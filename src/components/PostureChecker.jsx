import React, { useRef, useEffect } from 'react';
import * as posedetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';

function PostureChecker({ exercise }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      await posedetection.createDetector(posedetection.SupportedModels.MoveNet);
    };

    const initCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    loadModel();
    initCamera();
  }, []);

  return (
    <div>
      <h2>Ejercicio: {exercise}</h2>
      <video ref={videoRef} autoPlay playsInline muted width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" style={{ position: 'absolute', top: 0, left: 0 }} />
    </div>
  );
}

export default PostureChecker;
