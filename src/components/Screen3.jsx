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

export default function Screen3() {
  const el = useRef()
  const tracker = useTracker(el)
  const progress = useTrackerMotionValue(tracker)
  const scrollRangeEl=useRef()

  const x = useTransform(progress, [0, 1], ['100vw', '-100vw'])

  return (
    <div ref={scrollRangeEl} style={{ 
        position: 'relative', 
        height: '250vh' 
    }}>
        
     
        <div style={{ 
            position: 'sticky', 
            top: '0', 
            height: '100vh', 
            overflow: 'hidden', 
            display: 'flex', 
            alignItems: 'center' 
        }}>

       
    <section ref={el} className="Marquee Debug">
      <motion.div style={{ x }}>
        <div className='flex flex-row gap-[10vh]'>
        <h1 className='text-white text-7xl'>EVENTS</h1>
        <img src='operahouse1.jpg' className='w-[30vw] h-auto' />  <img src='operahouse2.jpg' className='w-[30vw] h-auto'  /> 
        </div>
      </motion.div>
    </section>
    </div>
    </div>
  )
}