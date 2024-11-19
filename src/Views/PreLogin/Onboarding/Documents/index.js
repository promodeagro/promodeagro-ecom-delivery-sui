import React, { useState, useEffect } from "react";
import {
  Button,
  SpaceBetween,
  FormField,
  FileUpload,
  Header,
} from "@cloudscape-design/components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUploadUrl } from "Redux-Store/Onboarding/onboardingThunk";
import { setDocuments } from "Redux-Store/Onboarding/onboardingSlice";
import { useNavigate } from "react-router-dom";

const Documents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userPhoto, setUserPhoto] = useState([]);
  const [aadharFront, setAadharFront] = useState([]);
  const [aadharBack, setAadharBack] = useState([]);
  const [pan, setPan] = useState([]);
  const [drivingFront, setDrivingFront] = useState([]);
  const [drivingBack, setDrivingBack] = useState([]);
  const [vehicleImage, setVehicleImage] = useState([]);
  const [rcFront, setRcFront] = useState([]);
  const [rcBack, setRcBack] = useState([]);
  const [errors, setErrors] = useState({});

  const handleFileChange = (setter, fieldName) => ({ detail }) => {
    setter(detail.value);
    if (detail.value.length > 0) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: false, 
      }));
    }
  };

  // Function to handle the file upload and get URLs for the files
  const handleSubmit = async () => {
    // Check if all files are selected
    const newErrors = {
      userPhoto: !userPhoto.length,
      aadharFront: !aadharFront.length,
      aadharBack: !aadharBack.length,
      pan: !pan.length,
      drivingFront: !drivingFront.length,
      drivingBack: !drivingBack.length,
      vehicleImage: !vehicleImage.length,
      rcFront: !rcFront.length,
      rcBack: !rcBack.length,
    };
  
    setErrors(newErrors);
  
    // If no errors, proceed to upload files and get URLs
    if (Object.values(newErrors).every((e) => !e)) {
      // Prepare the list of documents with file names
      const documentList = [
        { name: "userPhoto", image: userPhoto[0] },
        { name: "aadharFront", image: aadharFront[0] },
        { name: "aadharBack", image: aadharBack[0] },
        { name: "pan", image: pan[0] },
        { name: "drivingFront", image: drivingFront[0] },
        { name: "drivingBack", image: drivingBack[0] },
        { name: "vehicleImage", image: vehicleImage[0] },
        { name: "rcFront", image: rcFront[0] },
        { name: "rcBack", image: rcBack[0] },
      ];
  
      try {
        // Loop through the document list to upload each file and get the URL
        const uploadPromises = documentList.map(async (doc) => {
          if (doc.image) {
            // Log the file name before dispatching
            console.log(`Uploading ${doc.name} with file name: ${doc.image.name}`);
  
            // Pass the file name explicitly to the thunk
            const response = await dispatch(fetchUploadUrl(doc.image)).unwrap();
  
            // Ensure we correctly extract the URL from the response
            return { name: doc.name, image: response };
          }
          return null; // If no image, return null
        });
  
        // Wait for all upload promises to complete
        const results = await Promise.all(uploadPromises);
  
        // Filter out any null values (if any file had no image)
        const validUrls = results.filter((url) => url !== null);
  
        // Dispatch the valid URLs to Redux
        dispatch(setDocuments(validUrls));
  
        // Navigate to the next page
        navigate("/app/register/review-and-submit");
      } catch (error) {
        // Log any errors during file upload
        console.error("Error uploading files:", error);
      }
    }
  };
    
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "Refreshing will reset your form data. Are you sure you want to proceed?";
      event.returnValue = message; // Standard way to trigger the confirmation dialog
      return message; // For some browsers
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <SpaceBetween size="xxl">
      <Header variant="h1">
        <span style={{ fontSize: "32px", fontWeight: "600" }}>Documents</span>
      </Header>
      <SpaceBetween direction="vertical" size="m">
        <FormField label="User Photo">
          <FileUpload
              onChange={handleFileChange(setUserPhoto, 'userPhoto')}
              value={userPhoto}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
            }}
            showFileLastModified
            showFileSize
            showFileThumbnail
            tokenLimit={3}
            errorText={errors.userPhoto || ""}
          />
        </FormField>

        <FormField label="Aadhar Front">
          <FileUpload
              onChange={handleFileChange(setAadharFront, 'aadharFront')}
              value={aadharFront}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
              limitShowFewer: "Show fewer files",
              limitShowMore: "Show more files",
              errorIconAriaLabel: "Error",
            }}
            showFileLastModified
            showFileSize
            showFileThumbnail
            tokenLimit={3}
            errorText={errors.aadharFront ? "Please select a file" : ""}
          />
        </FormField>
        <FormField label="Aadhar Back">
          <FileUpload
              onChange={handleFileChange(setAadharBack, 'aadharBack')}
              value={aadharBack}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
              limitShowFewer: "Show fewer files",
              limitShowMore: "Show more files",
              errorIconAriaLabel: "Error",
            }}
            showFileLastModified
            showFileSize
            showFileThumbnail
            tokenLimit={3}
            errorText={errors.aadharBack ? "Please select a file" : ""}
          />
        </FormField>

        <FormField label="PAN Card">
          <FileUpload
              onChange={handleFileChange(setPan, 'pan')}
              value={pan}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
              limitShowFewer: "Show fewer files",
              limitShowMore: "Show more files",
              errorIconAriaLabel: "Error",
            }}
            showFileLastModified
            showFileSize
            showFileThumbnail
            tokenLimit={3}
            errorText={errors.pan ? "Please select a file" : ""}
          />
        </FormField>

        <FormField label="Driving License Front">
          <FileUpload
              onChange={handleFileChange(setDrivingFront, 'drivingFront')}
              value={drivingFront}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
              limitShowFewer: "Show fewer files",
              limitShowMore: "Show more files",
              errorIconAriaLabel: "Error",
            }}
            showFileLastModified
            showFileSize
            showFileThumbnail
            tokenLimit={3}
            errorText={errors.drivingFront ? "Please select a file" : ""}
          />
        </FormField>

        <FormField label="Driving License Back">
          <FileUpload
              onChange={handleFileChange(setDrivingBack, 'drivingBack')}
              value={drivingBack}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
              limitShowFewer: "Show fewer files",
              limitShowMore: "Show more files",
              errorIconAriaLabel: "Error",
            }}
            showFileLastModified
            showFileSize
            showFileThumbnail
            tokenLimit={3}
            errorText={errors.drivingBack ? "Please select a file" : ""}
          />
        </FormField>

        <FormField label="Vehicle Image">
          <FileUpload
              onChange={handleFileChange(setVehicleImage, 'vehicleImage')}
              value={vehicleImage}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
              limitShowFewer: "Show fewer files",
              limitShowMore: "Show more files",
              errorIconAriaLabel: "Error",
            }}
            showFileLastModified
            showFileSize
            showFileThumbnail
            tokenLimit={3}
            errorText={errors.vehicleImage ? "Please select a file" : ""}
          />
        </FormField>

        <FormField label="RC Book Front">
          <FileUpload
              onChange={handleFileChange(setRcFront, 'rcFront')}
              value={rcFront}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
              limitShowFewer: "Show fewer files",
              limitShowMore: "Show more files",
              errorIconAriaLabel: "Error",
            }}
            showFileLastModified
            showFileSize
            showFileThumbnail
            tokenLimit={3}
            errorText={errors.rcFront ? "Please select a file" : ""}
          />
        </FormField>

        <FormField label="RC Book Back">
          <FileUpload
              onChange={handleFileChange(setRcBack, 'rcBack')}
              value={rcBack}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
              limitShowFewer: "Show fewer files",
              limitShowMore: "Show more files",
              errorIconAriaLabel: "Error",
            }}
            showFileLastModified
            showFileSize
            showFileThumbnail
            tokenLimit={3}
            errorText={errors.rcBack ? "Please select a file" : ""}
          />
        </FormField>
      </SpaceBetween>

      <Button onClick={handleSubmit} variant="primary" fullWidth>
        Complete
      </Button>
    </SpaceBetween>
  );
};

export default Documents;
