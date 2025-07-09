"use client";
import { useRef, useEffect, useState } from "react";
import Navigation from "@/app/components/menu-items/navigation-user";

export default function MulaiAbsen() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  // Start the camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraOn(true);
      }
    } catch (err) {
      alert("Tidak dapat mengakses kamera: " + err.message);
    }
  };

  // Stop the camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOn(false);
    }
  };

  // Capture photo
  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 320, 240);
  };

  useEffect(() => {
    return () => {
      // Stop camera when component unmounts
      stopCamera();
    };
  }, []);

  return (
    <>
      <div className="">
        <div className="mb-4">
          <div className="w-full p-4 bg-gray-100 mb-6 dark:bg-gray-700 justify-center items-center font-bold dark:border-gray-600">Lakukan Absensi</div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-full p-4 max-w-md">
              <video ref={videoRef} autoPlay playsInline className="rounded-lg w-full" width="320" height="240" />
              <canvas ref={canvasRef} width="320" height="240" className="hidden" />
            </div>

            <div className="flex gap-2">
              {!isCameraOn ? (
                <button onClick={startCamera} className="bg-green-500 transition-colors duration-200 dark:bg-green-800 text-white px-4 py-2 rounded hover:bg-green-600 dark:hover:bg-green-950">
                  <svg className="w-6 h-6  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              ) : (
                <button onClick={stopCamera} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  <svg className="w-6 h-6  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                  </svg>
                </button>
              )}

              {isCameraOn && (
                <button onClick={capturePhoto} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Ambil Foto Absen
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </>
  );
}
