"use client";
import { useRef, useEffect, useState } from "react";
import Navigation from "@/app/components/menu-items/navigation-user";
import { useGeolocated } from "react-geolocated";

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

  const [isClient, setIsClient] = useState(false);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  // Pastikan hanya di-render di client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Kondisi: Browser tidak mendukung geolocation
  if (!isGeolocationAvailable) {
    return (
      <>
        <div className="mb-4">
          <div className="w-full p-4 bg-[#77A4C4] dark:bg-[#567f9f] justify-center items-center font-bold dark:border-gray-600">
            <div className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="20" height="20" viewBox="0 0 24 24">
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M10.5 6a2.5 2.5 0 0 1 2.495 2.336L13 8.5v4.605l4.455.606a4 4 0 0 1 3.54 3.772l.005.202V18a8 8 0 0 1-.77 3.43a1 1 0 0 1-1.807-.86a6 6 0 0 0 .57-2.265L19 18v-.315a2 2 0 0 0-1.621-1.964l-.183-.027l-4.431-.603a2 2 0 0 1-1.759-1.827L11 13.105V8.5a.5.5 0 0 0-.992-.09L10 8.5V17a1 1 0 0 1-1.78.625l-.332-.407l-.303-.354c-.579-.657-1.001-1.02-1.36-1.203a1.2 1.2 0 0 0-.694-.137l-.141.02l2.504 5.009a1 1 0 0 1-1.73.996l-.058-.102l-2.777-5.553c-.36-.72-.093-1.683.747-2.028c1.043-.427 2.034-.506 3.055.012q.333.17.654.414l.215.17V8.5A2.5 2.5 0 0 1 10.5 6m0-4a6.5 6.5 0 0 1 6.255 8.272a1 1 0 1 1-1.924-.544a4.5 4.5 0 1 0-8.34.817a1 1 0 0 1-1.782.91A6.5 6.5 0 0 1 10.5 2"
                  />
                </g>
              </svg>
              <div className="flex justify-center text-white">Riwayat Absensi</div>
            </div>
          </div>
          <div className="p-4 m-2 flex flex-col justify-center max-h-screen items-center">Browser kamu tidak support geolocation</div>
        </div>
        <Navigation />
      </>
    );
  }

  // Kondisi: User menolak izin geolocation
  if (!isGeolocationEnabled) {
    return (
      <>
        <div className="mb-4">
          <div className="w-full p-4 bg-[#77A4C4] dark:bg-[#567f9f] justify-center items-center font-bold dark:border-gray-600">
            <div className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="20" height="20" viewBox="0 0 24 24">
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M10.5 6a2.5 2.5 0 0 1 2.495 2.336L13 8.5v4.605l4.455.606a4 4 0 0 1 3.54 3.772l.005.202V18a8 8 0 0 1-.77 3.43a1 1 0 0 1-1.807-.86a6 6 0 0 0 .57-2.265L19 18v-.315a2 2 0 0 0-1.621-1.964l-.183-.027l-4.431-.603a2 2 0 0 1-1.759-1.827L11 13.105V8.5a.5.5 0 0 0-.992-.09L10 8.5V17a1 1 0 0 1-1.78.625l-.332-.407l-.303-.354c-.579-.657-1.001-1.02-1.36-1.203a1.2 1.2 0 0 0-.694-.137l-.141.02l2.504 5.009a1 1 0 0 1-1.73.996l-.058-.102l-2.777-5.553c-.36-.72-.093-1.683.747-2.028c1.043-.427 2.034-.506 3.055.012q.333.17.654.414l.215.17V8.5A2.5 2.5 0 0 1 10.5 6m0-4a6.5 6.5 0 0 1 6.255 8.272a1 1 0 1 1-1.924-.544a4.5 4.5 0 1 0-8.34.817a1 1 0 0 1-1.782.91A6.5 6.5 0 0 1 10.5 2"
                  />
                </g>
              </svg>
              <div className="flex justify-center text-white">Riwayat Absensi</div>
            </div>
          </div>
          <div className="p-4 m-2 flex flex-col justify-center max-h-screen items-center">Geolocation tidak diterapkan</div>
        </div>
        <Navigation />
      </>
    );
  }

  // Kondisi: Masih memuat lokasi
  if (!coords) {
    return (
      <>
        <div className="p-4 text-center">Sedang mengambil lokasi...</div>
        <Navigation />
      </>
    );
  }

  return (
    <>
      <div className="">
        <div className="mb-4">
          <div className="w-full p-4 bg-[#77A4C4] dark:bg-[#567f9f] justify-center items-center font-bold dark:border-gray-600">
            <div className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="20" height="20" viewBox="0 0 24 24">
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M10.5 6a2.5 2.5 0 0 1 2.495 2.336L13 8.5v4.605l4.455.606a4 4 0 0 1 3.54 3.772l.005.202V18a8 8 0 0 1-.77 3.43a1 1 0 0 1-1.807-.86a6 6 0 0 0 .57-2.265L19 18v-.315a2 2 0 0 0-1.621-1.964l-.183-.027l-4.431-.603a2 2 0 0 1-1.759-1.827L11 13.105V8.5a.5.5 0 0 0-.992-.09L10 8.5V17a1 1 0 0 1-1.78.625l-.332-.407l-.303-.354c-.579-.657-1.001-1.02-1.36-1.203a1.2 1.2 0 0 0-.694-.137l-.141.02l2.504 5.009a1 1 0 0 1-1.73.996l-.058-.102l-2.777-5.553c-.36-.72-.093-1.683.747-2.028c1.043-.427 2.034-.506 3.055.012q.333.17.654.414l.215.17V8.5A2.5 2.5 0 0 1 10.5 6m0-4a6.5 6.5 0 0 1 6.255 8.272a1 1 0 1 1-1.924-.544a4.5 4.5 0 1 0-8.34.817a1 1 0 0 1-1.782.91A6.5 6.5 0 0 1 10.5 2"
                  />
                </g>
              </svg>
              <div className="flex justify-center text-white">Lakukan Presensi</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-full p-4 max-w-md">
              <video ref={videoRef} autoPlay playsInline className="rounded-lg w-full" width="320" height="240" />
              <canvas ref={canvasRef} width="320" height="240" className="hidden" />
            </div>

            <div className="flex gap-2">
              {!isCameraOn ? (
                <div className="flex flex-col justify-center items-center">
                  <button onClick={startCamera} className="bg-[#77A4C4] dark:bg-[#567f9f] transition-colors duration-200  text-white px-4 py-2 rounded hover:bg-green-600 dark:hover:bg-green-950">
                    <svg className="w-6 h-6  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="p-5">
                    <div className="full-w text-xs flex flex-col rounded-md text-gray-800 bg-blue-100 mt-2 p-4 items-center">
                      <div className="flex gap-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="orange" className="w-5 h-5 bg-amber-100 rounded-full">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.34 21h5.32M12 3a6 6 0 00-6 6c0 2.315 1.098 3.754 2.25 4.755.595.502.75 1.23.75 1.995v.75h6v-.75c0-.765.155-1.493.75-1.995C16.902 12.754 18 11.315 18 9a6 6 0 00-6-6z"
                          />
                        </svg>

                        <span className="font-bold text-sm mb-2">Tips</span>
                      </div>
                      <ul className="list-disc list-inside">
                        <li>Mohon berikan akses izin kamera dan lokasi sebelum melakukan presensi.</li>
                        <li>Pastikan wajah Anda jelas terlihat di kamera agar dapat dikenali sistem.</li>
                        <li>Klik tombol di bawah untuk membuka kamera, kemudian ambil foto untuk melakukan presensi</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
          {/* Lokasi */}
        </div>
      </div>

      <Navigation />
    </>
  );
}
