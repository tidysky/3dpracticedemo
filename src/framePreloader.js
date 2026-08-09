import { useEffect, useState } from 'react'

export const TOTAL_FRAMES = 50
export const FRAME_BASE_PATH = '/videoimages'

export const makeFrameSrc = (index) =>
  `${FRAME_BASE_PATH}/images${index}.webp`

const preloadState = {
  started: false,
  completed: 0,
  failed: 0,
  ready: false,
  images: Array(TOTAL_FRAMES),
}

const subscribers = new Set()

function getSnapshot() {
  return {
    completed: preloadState.completed,
    failed: preloadState.failed,
    progress: Math.round((preloadState.completed / TOTAL_FRAMES) * 100),
    ready: preloadState.ready,
  }
}

function notifySubscribers() {
  const snapshot = getSnapshot()
  subscribers.forEach((subscriber) => subscriber(snapshot))
}

function loadFrame(index) {
  return new Promise((resolve) => {
    const image = new Image()
    let settled = false

    const finish = (loaded) => {
      if (settled) return
      settled = true

      if (loaded) {
        preloadState.images[index - 1] = image
      } else {
        preloadState.failed += 1
      }

      preloadState.completed += 1
      notifySubscribers()
      resolve()
    }

    image.decoding = 'async'
    image.fetchPriority = index <= 8 ? 'high' : 'auto'
    image.onload = async () => {
      try {
        await image.decode()
      } catch {
        // onload already confirms the image is usable; decode may reject if it
        // completed before this call or the browser releases the decode task.
      }
      finish(true)
    }
    image.onerror = () => finish(false)
    image.src = makeFrameSrc(index)
  })
}

async function startPreloading() {
  if (preloadState.started) return
  preloadState.started = true

  const queue = Array.from({ length: TOTAL_FRAMES }, (_, index) => index + 1)
  const workerCount = Math.min(6, TOTAL_FRAMES)

  const workers = Array.from({ length: workerCount }, async () => {
    while (queue.length > 0) {
      const index = queue.shift()
      await loadFrame(index)
    }
  })

  await Promise.all(workers)
  preloadState.ready = true
  notifySubscribers()
}

export function useFramePreloader() {
  const [snapshot, setSnapshot] = useState(getSnapshot)

  useEffect(() => {
    subscribers.add(setSnapshot)
    setSnapshot(getSnapshot())
    startPreloading()

    return () => subscribers.delete(setSnapshot)
  }, [])

  return snapshot
}
