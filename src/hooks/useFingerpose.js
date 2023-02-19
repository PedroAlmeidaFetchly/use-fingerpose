import { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";

const useFingerpose = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const runHandPose = async () => {
    try {
      const net = await handpose.load();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  runHandPose();

  return { loading, error };
};

export default useFingerpose;
