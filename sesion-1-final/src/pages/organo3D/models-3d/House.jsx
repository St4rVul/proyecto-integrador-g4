import { useRef } from "react";
import { useFrame} from "@react-three/fiber"
 

const House = () => {
    const houseRef = useRef();

    useFrame((state, delta) => {
        houseRef.current.rotation.y += 1 * delta;
    })

  return (
    <group ref = {houseRef}>
        <mesh position={[0,1,0]} rotation = {[0, Math.PI * 0.25, 0]} scale={1.5}>
            <coneGeometry args={[1, 1, 4]} />
            <meshStandardMaterial color = "red"/>
        </mesh>
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="Purple"/>
        </mesh>
    </group>
  );
}

export default House;