"use client"; 
import React from 'react';
import { ColorRing } from 'react-loader-spinner';

export default function LoadingPage() {
  return (
    <div className="flex h-[85vh] w-full flex-col items-center justify-center gap-4">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      
      <span className="text-primary text-sm font-medium">Loading...</span>
    </div>
  );
}