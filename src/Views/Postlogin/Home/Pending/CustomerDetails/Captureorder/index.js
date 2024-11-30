import { Button } from "@cloudscape-design/components"; 
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "@cloudscape-design/components/icon";
import { useDispatch } from "react-redux"; // Import useDispatch
import { uploadFile } from "Redux-Store/Uploadimage/UploadThunk";

const VerifiedOrder = () => {
  const { runsheetId, orderId } = useParams(); // Extract dynamic route params
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch

  const [visible, setVisible] = useState(false);
  const [isCaptured, setIsCaptured] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing the camera: ", err);
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        const tracks = stream?.getTracks();
        tracks?.forEach((track) => track.stop());
      }
    };
  }, []);

  const handleTakePhoto = () => {
    if (!isPhotoTaken) {
      if (videoRef.current && canvasRef.current) {
        const context = canvasRef.current.getContext("2d");
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const photoUrl = canvasRef.current.toDataURL("image/jpeg");
        setPhoto(photoUrl);
        setIsCaptured(true);
        setIsPhotoTaken(true);
      }
      setVisible(true); 
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    } else {
      setPhoto(null);
      setIsPhotoTaken(false);
      setIsCaptured(false);
      startCamera(); 
    }
  };

  const handleVerifyClick = async () => {
    if (photo && isCaptured) {
      // Convert the photo (base64) to a Blob object to upload
      const blob = await fetch(photo).then(res => res.blob());
      const file = new File([blob], "captured-photo.jpg", { type: "image/jpeg" });
      
      // Dispatch the uploadFile action
      dispatch(uploadFile(file)).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          // Navigate if upload is successful
          navigate(
            `/app/home/runsheet/${runsheetId}/customer-details/order/${orderId}/captured-verify`
          );
        } else {
          alert("Upload failed. Please try again.");
        }
      });
    } else {
      alert("No photo captured yet.");
    }
  };

  return (
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
        backgroundColor: "#000716",
      }}
    >
      {!isPhotoTaken && (
        <div
          style={{
            height: "88vh",
            width: "100%",
            backgroundColor: "#000716",
          }}
        >
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
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
      )}
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
          <img
            src={photo}
            alt="Captured"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      )}
      <div
        className="flex jcc aic"
        style={{
          width: "100%",
          gap: 20,
          flexDirection: "column",
          height: "24vh",
          position: "absolute",
          bottom: 0,
          background: "#000716",
        }}
      >
        <Button onClick={handleTakePhoto} variant="inline-link" fullWidth>
          <span style={{ color: "#EAD72F" }}>
            {isPhotoTaken ? "RETAKE PHOTO" : "TAKE A PHOTO"}
          </span>
        </Button>
        <div style={{ display: "flex", margin: "0 auto", width: "70%" }}>
          <Button
            disabled={!isCaptured}
            fullWidth
            variant="primary"
            onClick={handleVerifyClick} // Call handleVerifyClick on click
          >
            Verified
          </Button>
        </div>
      </div>
      {visible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              width: "40%",
              maxWidth: "400px",
            }}
          >
            <Icon name="status-positive" size="big" variant="success" />
            <h3 style={{ color: "#28a745" }}>Photo Captured</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifiedOrder;
