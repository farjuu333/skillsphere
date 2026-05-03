"use client";
import { Spinner } from "@heroui/react";
import React from "react";
const LoadingPage = () => {
  return (
    <div className="flex h-[85vh] w-full flex-col items-center justify-center gap-4">
      <Spinner 
        label="Loading..." 
        color="primary" 
        labelColor="primary" 
        size="lg" 
      />
    </div>
  );
};

export default LoadingPage;