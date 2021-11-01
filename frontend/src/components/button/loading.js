import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './layer.json';

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} style={{ height: '100%', width: '35px' }} />;
}
