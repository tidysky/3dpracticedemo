import React from 'react';
import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

import { 
    GlobalCanvas, 
    ScrollScene, 
    UseCanvas, 
    SmoothScrollbar,
    useTracker,
    ViewportScrollScene 
} from '@14islands/r3f-scroll-rig' 

import { MeshDistortMaterial, GradientTexture,Html } from '@react-three/drei'
import { Group } from 'three/examples/jsm/libs/tween.module.js'
import { motion, useTransform } from 'framer-motion'
import { useTrackerMotionValue } from './useTrackerMotionValue'
import { PivotControls, MeshTransmissionMaterial, Grid, Environment, PerspectiveCamera, CameraControls } from '@react-three/drei'

import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups' 
import { RoundedBox } from '@react-three/drei'
import { a, config, useSpring } from '@react-spring/three'

import * as THREE from 'three';

function VideoFrameUpdater({ scrollState }) {
    const videoRef = useRef(null)

    // 在组件挂载时找到 DOM 视频元素
    useEffect(() => {
        // 使用 ID 查找 DOM 中的视频元素
        const videoElement = document.getElementById('video-scrubber');
        if (videoElement) {
            videoRef.current = videoElement;
            
            // 确保视频已加载元数据，并将其暂停，等待 useFrame 控制
            if (videoElement.readyState < 2) {
                videoElement.addEventListener('loadedmetadata', () => {
                    videoElement.pause();
                }, { once: true });
            } else {
                 videoElement.pause();
            }
        }
    }, [])

    // 核心逻辑：每一帧将滚动进度同步到视频时间
    useFrame(() => {
        const video = videoRef.current
        
        if (video && video.duration) {
            // ✅ 使用 scrollState.progress (0 到 1) 乘以视频总时长
            video.currentTime = scrollState.progress * video.duration 
        }
    })
    
    // 这个组件不需要渲染任何 Three.js 内容
    return null 
}



const VideoScrollScene = () => {
  const el = useRef()
  
  return (
    // position: 'relative' 和足够高的 height 确保了滚动范围
    <div style={{ position: 'relative', height: '250vh' }}> 
        {/* position: 'sticky' 和 top: '0' 确保视频在滚动过程中停留在视口中 */}
        <div ref={el} style={{ position: 'sticky', top: '0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {/* Hero section */}
            <section className="flex">
            
            {/* logo part */}
            <div className="w-[10vw] h-auto absolute top-[5vh] left-[4vw] z-10"><img src="logo.jpeg"/></div>

            <div className="text-[#ff5b59] w-[50vw] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-8xl text-center">
                <h1>Musement park</h1>
            </div>

            {/* video part */}
            <div className="z-0 w-[100vw] h-auto">
                <video
                    id="video-scrubber" // 🚨 必须要有 ID 供 VideoFrameUpdater 查找
                    muted
                    playsInline
                    preload="auto"
                    src="water.webm" // 替换为您的视频路径
                    className='w-full h-auto'
                />
              </div>
     </section>
        </div>

        <UseCanvas>
            {/* 跟踪 DOM 容器 (el)，将滚动信息传递给 VideoFrameUpdater */}
            <ScrollScene track={el}>
                {/* 这里的 props 包含 scrollState，用于 VideoFrameUpdater */}
                {(props) => <VideoFrameUpdater {...props} />}
            </ScrollScene>
        </UseCanvas>
    </div>
  )
}

export default VideoScrollScene;