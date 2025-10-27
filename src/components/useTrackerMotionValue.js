import { useEffect } from 'react'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { useMotionValue } from 'framer-motion'


export function useTrackerMotionValue(tracker, prop = 'progress') {
  const progress = useMotionValue(0)
  const { onScroll } = useScrollbar()
  const { scrollState, rect } = tracker

  useEffect(() => {
   
    return onScroll(() => {
      progress.set(scrollState[prop])
    })
  }, [progress, scrollState, prop, onScroll, rect])

  return progress
}
