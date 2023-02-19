import { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";

const useFingerpose = (config) => {
  const { timeFrame, webcamRef } = config;
  const [handposeLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cameraLoading, setCameraLoading] = useState(true);
  const [hand, setHand] = useState(null);

  const detect = async (net) => {
    if (
      typeof webcamRef.current === "undefined" ||
      webcamRef.current === null ||
      webcamRef.current.readyState === 4
    )
      return;
    else {
      setCameraLoading(false);
      const video = webcamRef.current.video;

      try {
        const handRes = await net.estimateHands(video);
        setHand(handRes);
        setError(null);
      } catch (error) {
        setError({ local: "hand", error });
      }
    }
  };
  const runHandPose = async () => {
    try {
      const net = await handpose.load();
      setLoading(false);
      setError(null);
      setInterval(() => {
        detect(net);
      }, timeFrame);
    } catch (error) {
      setLoading(false);
      setError({ local: "handpose", error });
    }
  };

  runHandPose();

  return { handposeLoading, error, cameraLoading, hand };
};

export default useFingerpose;
