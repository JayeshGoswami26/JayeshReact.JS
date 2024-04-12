import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const SpiderMan = () => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../assets/3dModels/spiderman_2099.glb')
  return (
    <group ref={group} {...props} dispose={null}>
    <group name="Sketchfab_Scene">
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <group
          name="Spider-man_2099_(Across_the_Spider-verse)fbx"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <group name="Object_2">
            <group name="RootNode">
              <group name="hero_spiderman209901_S02" scale={100}>
                <group name="Object_5">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_96"
                    geometry={nodes.Object_96.geometry}
                    material={materials.hero_spiderman209901_S02_03}
                    skeleton={nodes.Object_96.skeleton}
                  />
                  <skinnedMesh
                    name="Object_98"
                    geometry={nodes.Object_98.geometry}
                    material={materials.hero_spiderman209901_S02_04}
                    skeleton={nodes.Object_98.skeleton}
                  />
                  <skinnedMesh
                    name="Object_100"
                    geometry={nodes.Object_100.geometry}
                    material={materials.hero_spiderman209901_S02_02}
                    skeleton={nodes.Object_100.skeleton}
                  />
                  <skinnedMesh
                    name="Object_102"
                    geometry={nodes.Object_102.geometry}
                    material={materials.hero_spiderman209901_S02_04}
                    skeleton={nodes.Object_102.skeleton}
                  />
                  <skinnedMesh
                    name="Object_104"
                    geometry={nodes.Object_104.geometry}
                    material={materials.hero_spiderman209901_S02_01}
                    skeleton={nodes.Object_104.skeleton}
                  />
                  <skinnedMesh
                    name="Object_106"
                    geometry={nodes.Object_106.geometry}
                    material={materials.SpiderMan_web02}
                    skeleton={nodes.Object_106.skeleton}
                  />
                  <skinnedMesh
                    name="Object_108"
                    geometry={nodes.Object_108.geometry}
                    material={materials.SpiderMan_web02}
                    skeleton={nodes.Object_108.skeleton}
                  />
                  <group name="Object_95" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  <group name="Object_97" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  <group name="Object_99" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  <group name="Object_101" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  <group name="Object_103" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  <group
                    name="Object_105"
                    position={[-100, 0, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="Object_107"
                    position={[-100, 0, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                </group>
              </group>
              <group
                name="hero_spiderman209901_S02_03"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <group
                name="hero_spiderman209901_S02_05"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <group
                name="hero_spiderman209901_S02_02"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <group
                name="hero_spiderman209901_S02_05_02"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <group
                name="hero_spiderman209901_S02_01"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <group
                name="spider_wp02"
                position={[-100, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <group
                name="spider_wp003"
                position={[-100, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  </group>
  )
}

export default SpiderMan