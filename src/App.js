import { useRef } from "react";
import useFingerpose from "./hooks/useFingerpose";
import Webcam from "react-webcam";

function App() {
  const webcamRef = useRef(null);
  const { handposeLoading, error, cameraLoading, hand } = useFingerpose({
    timeFrame: 100,
    webcamRef,
  });

  console.log(handposeLoading, error, cameraLoading, hand);
  return (
    <div>
      <h1>useFingerpose</h1>
      <Webcam ref={webcamRef} />
    </div>
  );
}

export default App;
