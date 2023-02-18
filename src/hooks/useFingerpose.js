import { useState } from "react";

const useFingerpose = () => {
  const [loading, setLoading] = useState(true);

  return { loading };
};

export default useFingerpose;
