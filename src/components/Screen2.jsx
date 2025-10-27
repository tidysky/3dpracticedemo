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


export default function Screen2() {
  const el = useRef()
  const tracker = useTracker(el)
  const progress = useTrackerMotionValue(tracker)


const opacity = useTransform(progress, [0.25, 0.5, 0.75], [0, 1, 0])


  return (
    <section style={{ position: 'relative', height: '120vh' }}>
        <div ref={el} style={{ position: 'sticky', top: '0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <motion.div style={{ opacity,textAlign: 'center',color:'#ffffff'}}>
            <h1 className='text-7xl'>Enjoy your journey!</h1>
        </motion.div>
        </div>
    </section>
  )
}