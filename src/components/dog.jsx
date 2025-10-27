
import React, { useRef, useEffect, forwardRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useControls } from 'leva'

export const Dog = forwardRef((props, ref) => {
  const group = useRef() 
  const { nodes, materials, animations } = useGLTF('/3D/dog.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    console.log('Available animation names:', names)
    console.log('Actions:', actions)

    const action = actions['Animation']
    if (action) {
      action.reset().fadeIn(0.5).play()
      console.log('Playing animation: Animation')
    } else {
      console.warn('⚠️ 没有找到名字为 "Animation" 的动画')
    }

    return () => {
      Object.values(actions).forEach((a) => a.stop())
    }
  }, [actions, names])

  return (
    <group
      ref={group} 
      {...props}
      dispose={null}
      scale={70.0}
      position={[-409, -372.6, -2845.4]}
   
      rotation={[0, 0.8, 0]}
    >
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.398}
        >
          <group name="root">
            <group
              name="GLTF_SceneRootNode"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="puppy_46" scale={0.273}>
                <group name="GLTF_created_0">
                  <skinnedMesh
                    name="mesh_0"
                    geometry={nodes.mesh_0.geometry}
                    material={materials.material}
                    skeleton={nodes.mesh_0.skeleton}
                    morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                  />
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/3D/dog.glb')
