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
import { Suspense } from 'react';

import { MeshDistortMaterial, GradientTexture,Html, OrbitControls,useProgress } from '@react-three/drei'
import { Group } from 'three/examples/jsm/libs/tween.module.js'
import { motion, useTransform } from 'framer-motion'
import { useTrackerMotionValue } from './useTrackerMotionValue'
import { PivotControls, MeshTransmissionMaterial, Grid, Environment, PerspectiveCamera, CameraControls } from '@react-three/drei'

import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups' 
import { RoundedBox } from '@react-three/drei'
import { a, config, useSpring } from '@react-spring/three'

import { useControls } from "leva";

import * as THREE from 'three';

import VideoScrollScene from './components/Video';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Screen5 from './components/screen5';
import { EffectComposer, Bloom, Autofocus } from "@react-three/postprocessing";

function GlobalLoader() {  // ✅ 修改处：新增
  const { active, progress } = useProgress();
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#f5f7fa',
        display: active ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: 9999,
        fontFamily: 'system-ui, sans-serif',
        transition: 'opacity 0.5s ease',
      }}
    >
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111' }}>
        Loading... {progress.toFixed(0)}%
      </p>
      <div
        style={{
          width: '200px',
          height: '6px',
          background: 'rgba(0,0,0,0.1)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: '#111',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}
export default function App(){

  const eventSource = useRef() 
  const scrollContentRef = useRef(null); 


  return (
    <>
    <GlobalLoader /> 
     <div ref={eventSource}>
        <GlobalCanvas eventSource={eventSource} eventPrefix="client" 
        
        camera={{
          near:0.1,
          far:10000,
          fov:75,
          position: [0, 78, 500], 
        }}
        > 
       
          <OrbitControls enableZoom={false} />
          <EffectComposer disableNormalPass multisampling={8}>
          </EffectComposer>
        
        </GlobalCanvas>
      <SmoothScrollbar>
        {(bind) => (
          <>
          <div {...bind} ref={scrollContentRef}>
            <VideoScrollScene />
            <Screen3 />
            <Screen4 />
            {/* <Screen2 /> */}
            <Screen5 />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          </>
          
        )}
      </SmoothScrollbar>
      </div>
      
    </>
  )
}