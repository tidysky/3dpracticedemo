

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import { forwardRef } from 'react'
import { useControls } from 'leva'
import { useEffect } from 'react'

export const Parkmodel = forwardRef((props, ref) => {

const { nodes, materials, animations } = useGLTF('/3D/scene.glb')
const { actions, names, clips } = useAnimations(animations, ref);

console.log(names)

  useEffect(() => {
  
    names.forEach((name) => {
      actions[name]?.reset().play()  
    })
  }, [actions, names])

  return (
    <group ref={ref} {...props} dispose={null} scale={200}>
      <group name="Scene">
        <mesh
          name="Tent_islandMaterial_0"
          castShadow
          receiveShadow
          geometry={nodes.Tent_islandMaterial_0.geometry}
          material={materials.islandMaterial}
          position={[-3.394, -1.927, -5.61]}
          rotation={[-1.581, -0.03, 0.007]}
          scale={0.024}
        />
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials['Material.019']}
          position={[-3.187, -1.248, -12.394]}
          scale={[0.9, 0.702, 0.9]}
        />
        <mesh
          name="Cube037"
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={materials['Material.018']}
          position={[-3.187, -0.45, -12.394]}
          scale={[1.24, 0.123, 1.24]}
        />
        <mesh
          name="Cube038"
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials['Material.025']}
          position={[-2.25, -0.093, -12.393]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-0.921, -0.387, -0.146]}
        />
        <mesh
          name="Tent_islandMaterial_0001"
          castShadow
          receiveShadow
          geometry={nodes.Tent_islandMaterial_0001.geometry}
          material={materials['islandMaterial.001']}
          position={[6.337, -1.928, -20.901]}
          rotation={[-1.581, -0.03, 0.007]}
          scale={0.027}
        />
        <group name="Sphere013" position={[3.397, 3.523, -19.547]} scale={1.339}>
          <mesh
            name="Sphere013_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere013_1.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Sphere013_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere013_2.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Sphere013_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere013_3.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Sphere013_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere013_4.geometry}
            material={materials['Material.021']}
          />
        </group>
        <mesh
          name="ground"
          castShadow
          receiveShadow
          geometry={nodes.ground.geometry}
          material={nodes.ground.material}
          position={[0.909, -2.124, -14.082]}
          scale={[7.825, 10.706, 11.094]}
        />
        <group name="Circle001" position={[-2.97, -0.233, -21.362]}>
          <mesh
            name="Circle001_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials['Material.007']}
          />
          <mesh
            name="Circle001_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_2.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Circle001_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_3.geometry}
            material={nodes.Circle001_3.material}
          />
        </group>
        <group
          name="Cylinder002"
          position={[6.038, 0.078, -14.387]}
          rotation={[Math.PI / 2, 0.674, 0]}
          scale={[0.042, 0.391, 0.042]}>
          <mesh
            name="Cylinder014"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014.geometry}
            material={materials['Material.011']}
          />
          <mesh
            name="Cylinder014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_1.geometry}
            material={materials['Material.010']}
          />
        </group>
        <mesh
          name="Cylinder010"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials['Material.001']}
          position={[5.127, -1.774, -14.393]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.073, 0.667, 0.073]}
        />
        <mesh
          name="Cylinder011"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials['Material.001']}
          position={[6.953, -1.77, -14.393]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.073, 0.667, 0.073]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Material.002']}
          position={[6.812, 0.826, -14.391]}
          scale={[0.034, 0.059, 0.034]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['Material.002']}
          position={[7.16, 0.109, -14.391]}
          scale={[0.034, 0.059, 0.034]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.002']}
          position={[6.897, -0.596, -14.391]}
          scale={[0.034, 0.059, 0.034]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['Material.002']}
          position={[6.107, -1.039, -14.391]}
          scale={[0.034, 0.059, 0.034]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['Material.002']}
          position={[5.274, -0.744, -14.391]}
          scale={[0.034, 0.059, 0.034]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.002']}
          position={[4.927, 0.078, -14.391]}
          scale={[0.034, 0.059, 0.034]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['Material.002']}
          position={[5.285, 0.921, -14.391]}
          scale={[0.034, 0.059, 0.034]}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials['Material.002']}
          position={[6.065, 1.201, -14.391]}
          scale={[0.034, 0.059, 0.034]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['Material.002']}
          position={[4.968, 0.147, -14.406]}
          scale={-0.072}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.001']}
          position={[6.05, -0.859, -14.912]}
          rotation={[1.7, 0, 0]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials['Material.001']}
          position={[6.05, -0.859, -13.879]}
          rotation={[1.442, 0, Math.PI]}
        />
        <mesh
          name="Cylinder025"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={materials['Material.009']}
          position={[-2.261, -1.09, -15.99]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.113, -0.995, -0.113]}
        />
        <mesh
          name="Sphere018"
          castShadow
          receiveShadow
          geometry={nodes.Sphere018.geometry}
          material={materials['Material.007']}
          position={[-2.573, -0.052, -15.908]}
          scale={0.389}
        />
        <mesh
          name="Sphere017"
          castShadow
          receiveShadow
          geometry={nodes.Sphere017.geometry}
          material={materials['Material.003']}
          position={[-2.213, -0.161, -15.822]}
          scale={0.492}
        />
        <mesh
          name="Sphere016"
          castShadow
          receiveShadow
          geometry={nodes.Sphere016.geometry}
          material={materials['Material.001']}
          position={[-2.262, -0.004, -16.353]}
          scale={0.4}
        />
        <mesh
          name="Sphere015"
          castShadow
          receiveShadow
          geometry={nodes.Sphere015.geometry}
          material={materials['Material.008']}
          position={[-2.156, -0.551, -16.007]}
          scale={0.381}
        />
        <mesh
          name="Sphere014"
          castShadow
          receiveShadow
          geometry={nodes.Sphere014.geometry}
          material={materials['Material.008']}
          position={[-2.04, 0.341, -16.026]}
          scale={0.381}
        />
        <mesh
          name="Cylinder012"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials['Material.009']}
          position={[4.988, -0.561, -10.747]}
          scale={[0.136, 1.319, 0.136]}
        />
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.003']}
          position={[5.418, 0.525, -10.74]}
          scale={0.581}
        />
        <mesh
          name="Sphere001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials['Material.005']}
          position={[4.676, 0.477, -10.736]}
          scale={0.469}
        />
        <mesh
          name="Sphere002"
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials['Material.003']}
          position={[5.036, 0.485, -10.222]}
          scale={0.453}
        />
        <mesh
          name="Sphere003"
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={materials['Material.003']}
          position={[4.987, 0.525, -11.18]}
          scale={0.481}
        />
        <mesh
          name="Sphere004"
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials['Material.005']}
          position={[5.093, -0.022, -10.834]}
          scale={0.46}
        />
        <mesh
          name="Sphere005"
          castShadow
          receiveShadow
          geometry={nodes.Sphere005.geometry}
          material={materials['Material.005']}
          position={[5.209, 0.87, -10.854]}
          scale={0.46}
        />
        <mesh
          name="Cylinder019"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials['Material.009']}
          position={[3.293, -0.656, -22.963]}
          scale={[0.136, 1.319, 0.136]}
        />
        <mesh
          name="Sphere007"
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials['Material.012']}
          position={[3.723, 0.43, -22.956]}
          scale={0.581}
        />
        <mesh
          name="Sphere008"
          castShadow
          receiveShadow
          geometry={nodes.Sphere008.geometry}
          material={materials['Material.002']}
          position={[2.981, 0.382, -22.952]}
          scale={0.469}
        />
        <mesh
          name="Sphere009"
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={materials['Material.007']}
          position={[3.342, 0.39, -22.438]}
          scale={0.453}
        />
        <mesh
          name="Sphere010"
          castShadow
          receiveShadow
          geometry={nodes.Sphere010.geometry}
          material={materials['Material.007']}
          position={[3.292, 0.43, -23.397]}
          scale={0.481}
        />
        <mesh
          name="Sphere011"
          castShadow
          receiveShadow
          geometry={nodes.Sphere011.geometry}
          material={materials['Material.012']}
          position={[3.398, -0.117, -23.051]}
          scale={0.46}
        />
        <mesh
          name="Sphere012"
          castShadow
          receiveShadow
          geometry={nodes.Sphere012.geometry}
          material={materials['Material.002']}
          position={[3.514, 0.775, -23.07]}
          scale={0.46}
        />
        <group
          name="Cylinder015"
          position={[5.471, 0.576, -8.93]}
          rotation={[0, 0, -0.229]}
          scale={[0.038, 0.423, 0.038]}>
          <mesh
            name="Cylinder003"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Cylinder003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cylinder003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Cylinder003_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_3.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group
          name="balloon"
          position={[-5.178, 1.594, -10.07]}
          rotation={[-0.31, 0, 0]}
          scale={[0.038, 0.423, 0.038]}>
          <mesh
            name="Cylinder029"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cylinder029_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_1.geometry}
            material={materials['Material.006']}
          />
          <mesh
            name="Cylinder029_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_2.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Cylinder029_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_3.geometry}
            material={materials['Material.014']}
          />
        </group>
        <group name="Empty" position={[6.064, 1.163, -14.391]} scale={-0.129} />
        <group
          name="NurbsCircle"
          position={[6.053, 0.091, -14.388]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group name="Empty001" position={[6.812, 0.826, -14.391]} scale={-0.129} />
        <group name="Empty002" position={[7.16, 0.109, -14.391]} scale={-0.129} />
        <group name="Empty003" position={[6.897, -0.596, -14.391]} scale={-0.129} />
        <group name="Empty004" position={[6.107, -1.039, -14.391]} scale={-0.129} />
        <group name="Empty005" position={[5.274, -0.744, -14.391]} scale={-0.129} />
        <group name="Empty006" position={[4.927, 0.078, -14.391]} scale={-0.129} />
        <group name="Empty007" position={[5.285, 0.921, -14.391]} scale={-0.129} />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['Material.007']}
          position={[-4.211, -1.835, -18.646]}
          scale={[0.348, 0.045, 0.348]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['Material.010']}
          position={[-4.166, -0.135, -18.621]}
          scale={0.342}
        />
        <mesh
          name="Cylinder018"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials['Material.009']}
          position={[-4.206, -1.057, -18.646]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.058, -0.704, -0.058]}
        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['Material.007']}
          position={[3.531, -1.835, -18.458]}
          scale={[0.348, 0.045, 0.348]}
        />
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials['Material.010']}
          position={[3.576, -0.135, -18.433]}
          scale={0.342}
        />
        <mesh
          name="Cylinder028"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={materials['Material.009']}
          position={[3.537, -1.057, -18.458]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.058, -0.704, -0.058]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['Material.011']}
          position={[3.404, -1.836, -5.378]}
          scale={[0.348, 0.045, 0.348]}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials['Material.010']}
          position={[3.449, -0.136, -5.353]}
          scale={0.342}
        />
        <mesh
          name="Cylinder027"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027.geometry}
          material={materials['Material.009']}
          position={[3.41, -1.058, -5.378]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.058, -0.704, -0.058]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['Material.007']}
          position={[-4.266, -1.835, -9.242]}
          scale={[0.348, 0.045, 0.348]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['Material.007']}
          position={[-4.221, -0.135, -9.218]}
          scale={0.342}
        />
        <mesh
          name="Cylinder026"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026.geometry}
          material={materials['Material.009']}
          position={[-4.261, -1.057, -9.242]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.058, -0.704, -0.058]}
        />
      </group>
    </group>
  )
})
useGLTF.preload('/3D/scene.glb')