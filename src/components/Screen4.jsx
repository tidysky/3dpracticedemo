
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

import { useControls } from "leva";
import { MeshDistortMaterial, GradientTexture,Html } from '@react-three/drei'
import { Group } from 'three/examples/jsm/libs/tween.module.js'
import { motion, useTransform } from 'framer-motion'
import { useTrackerMotionValue } from './useTrackerMotionValue'
import { PivotControls, MeshTransmissionMaterial, Grid, Environment, PerspectiveCamera, CameraControls } from '@react-three/drei'

import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups' 
import { RoundedBox } from '@react-three/drei'
import { a, config, useSpring } from '@react-spring/three'
import { Parkmodel } from './Parkmodel';
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import { Bear } from './bear';
import { Wolf } from './wolf';

import * as THREE from 'three';
import { Men } from './man';
import { Dog } from './dog';

export default function Screen4(props){
  
  const mesh = useRef()
  const el= useRef()

  return(
    <>


    <div style={{position:'relative',height:'1000vh'}}>
      <div ref={el} style={{position:'sticky',height:'70vh',top:'0'}}></div>
    </div>
      <UseCanvas>
        <StickyScrollScene track={el}>

          {(props)=>{
        
            return(
              <>
              <AmusementPark {...props}/>
            </>
             )
          }}
        </StickyScrollScene>
      </UseCanvas>

    </>
  )
}



function AmusementPark({ scrollState, ...props }) {

   const mesh= useRef()

  const { camera } = useThree()

 
  
 useFrame(() => {
   
    parkRef.current.position.z = scrollState.progress * 5200+637
    parkRef.current.position.y = 95
  })

const parkRef = useRef()

  return (
    <>
    <Environment preset='sunset' />
      <group ref={parkRef}>
       <Parkmodel ref={mesh} {...props}/>
       <Bear />
       <Wolf />
       <Men />
       <Dog />
      </group>
     

    </>
  )
}

