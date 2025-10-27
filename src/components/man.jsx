
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import { forwardRef } from 'react'
import { useControls } from 'leva'
import { useEffect } from 'react'
import { useFBX } from "@react-three/drei";
import { animations } from 'motion/react'
import * as THREE from 'three'


export const Men = forwardRef((props, ref) => {

  const group = useRef()
  const { nodes, materials } = useGLTF('/3D/1.glb')
  const { animations: Clapping } = useFBX('/3D/1clapping.fbx')
  const { animations: Idle } = useFBX('/3D/1idle.fbx')
  Clapping[0].name = 'Clap'
  Idle[0].name='Idle'
  const { actions } = useAnimations([...Clapping,...Idle],group)

useEffect(() => {
  const clapAction = actions['Clap']
  const idleAction = actions['Idle']
  if (!clapAction || !idleAction) return
  clapAction.setLoop(THREE.LoopOnce)
  clapAction.clampWhenFinished = true
  idleAction.setLoop(THREE.LoopOnce)
  idleAction.clampWhenFinished = true

  const playClap = () => {
    idleAction.fadeOut(0.5)
    clapAction.reset().fadeIn(0.5).play()
  }

  const playIdle = () => {
    clapAction.fadeOut(0.5)
    idleAction.reset().fadeIn(0.5).play()
    const timer = setTimeout(() => {
      playClap()
    }, 2000)
    return timer
  }
  
  let idleTimer = null
  const onFinish = (e) => {
    if (e.action === clapAction) {
     
      idleTimer = playIdle()
    }
  }

  clapAction.getMixer().addEventListener('finished', onFinish)

 
  playClap()


  return () => {
    clapAction.getMixer().removeEventListener('finished', onFinish)
    if (idleTimer) clearTimeout(idleTimer)
  }
}, [actions])




  return (
    <group {...props} ref={group} dispose={null} scale={200} position={[-382,-373,-3571]} rotation={[0,0.8,0]}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  )
})

useGLTF.preload('/3D/1.glb')

useFBX.preload("/3D/1clapping.fbx");



