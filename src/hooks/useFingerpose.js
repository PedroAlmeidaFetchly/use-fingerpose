import { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";

const useFingerpose = (config) => {
  const { timeFrame, webcamRef } = config;
  const [handposeLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cameraLoading, setCameraLoading] = useState(true);

  const detect = () => {
    if (
      typeof webcamRef.current === "undefined" ||
      webcamRef.current === null ||
      webcamRef.current.readyState === 4
    )
      return;
    else {
      setCameraLoading(false);
      console.log(webcamRef.current);
    }
  };
  const runHandPose = async () => {
    try {
      const net = await handpose.load();
      setLoading(false);

      setInterval(() => {
        detect(net);
      }, timeFrame);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  runHandPose();

  return { handposeLoading, error, cameraLoading };
};

export default useFingerpose;
