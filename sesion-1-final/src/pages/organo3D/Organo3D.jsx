import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Liver from "./models-3d/Liver";
import "./Organo3D.css"

const Organo3D = () => {
  return (
    <div>
      <Canvas camera={{ position: [2, 0, 5] }}>
        <OrbitControls/>
        <ambientLight intensity={1.5}/>
        <directionalLight position={[5,5,10]} intensity={2}/>
        <Liver scale={0.001}/>
      </Canvas>
    </div>
  );
}

export default Organo3D;