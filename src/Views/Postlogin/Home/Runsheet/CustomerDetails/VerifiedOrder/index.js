import { Button, Modal } from "@cloudscape-design/components";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifiedOrder = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [isCaptured, setIsCaptured] = useState(false);
  const [photo, setPhoto] = useState(null); // To store the captured photo
  const [isPhotoTaken, setIsPhotoTaken] = useState(false); // To track if the photo is taken

  const videoRef = useRef(null); // To reference the video element
  const canvasRef = useRef(null); // To reference the canvas for capturing the photo

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }, // Use the back camera
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing the camera: ", err);
    }
  };

  // Start the camera when the component is mounted
  useEffect(() => {
    startCamera();

    return () => {
      // Stop the camera when the component unmounts
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        const tracks = stream?.getTracks();
        tracks?.forEach((track) => track.stop());
      }
    };
  }, []);

  // Capture photo from the video feed
  const handleTakePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      // Set the canvas size to match the video feed
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

      // Get the photo data from the canvas
      const photoUrl = canvasRef.current.toDataURL("image/jpeg");
      setPhoto(photoUrl); // Save the captured photo
      setIsCaptured(true); // Enable the "Verified" button
      setIsPhotoTaken(true); // Mark that photo has been taken
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexDirection: "column",
        }}
      >
        {/* Video Element: Only visible if the photo is not taken */}
        {!isPhotoTaken && (
          <div style={{ height: "88vh", width: "100%" }}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
              }}
            />
            {/* Canvas element to capture the photo (hidden) */}
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        )}

        {/* If the photo is taken, show the captured photo */}
        {isPhotoTaken && (
          <div
            style={{
              width: "100%",
              height: "88vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000716",
            }}
          >
            <img src={photo} alt="Captured" style={{ width: "80%", height: "auto" }} />
          </div>
        )}

        <div
          className="flex jcc aic"
          style={{
            width: "100%",
            gap: 20,
            flexDirection: "column",
            height: "16vh",
            position: "absolute",
            bottom: 0,
            background: "#000716",
          }}
        >
          {/* Button to take photo */}
          <Button onClick={handleTakePhoto} variant="inline-link" fullWidth>
            <span style={{ color: "#EAD72F" }}>TAKE A PHOTO</span>
          </Button>

          {/* Verified button, disabled if no photo is taken */}
          <div style={{ display: "flex", margin: "0 auto", width: "60%" }}>
            <Button
              disabled={!isCaptured}
              fullWidth
              variant="primary"
              onClick={() => navigate("/app/customer-details/captured-verified")}
            >
              Verified
            </Button>
          </div>
        </div>
      </div>

      <Modal
        removeModalRoot
        onDismiss={() => setVisible(false)}
        visible={visible}
        header="Modal title"
      >
        Your description should go here
      </Modal>
    </>
  );
};

export default VerifiedOrder;
