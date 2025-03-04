import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Liver = () => {
    const liverModel = useGLTF("models-3d/liver.glb");

    useEffect(() =>{
        liverModel.scene.traverse((child) => {
            if(child.isMesh){
                child.material.color.set("white");
                child.material.metalness = 0.3 //Refleja más luz
                child.material.roughness = 1 //Menos Rugoso

        }
    
    })
   }, [liverModel.scene])


    return(
        <mesh>
            <primitive object = {liverModel.scene} scale ={[5,5,5]}/>
            <meshStandardMaterial attach="material" color = "white"/>
        </mesh>
    )
}

export default Liver;

useGLTF.preload("models-3d/liver.glb");