import {
    Button,
    SpaceBetween,
    Header,
    FormField,
  } from "@cloudscape-design/components";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import FileUpload from "@cloudscape-design/components/file-upload";
  
  const Documents = () => {
    const navigate = useNavigate();
  
    // State for files
    const [userPhoto, setUserPhoto] = useState([]);
    const [aadharFront, setAadharFront] = useState([]);
    const [aadharBack, setAadharBack] = useState([]);
    const [pan, setPan] = useState([]);
    const [drivingFront, setDrivingFront] = useState([]);
    const [drivingBack, setDrivingBack] = useState([]);
    const [vehicleImage, setVehicleImage] = useState([]);
    const [rcFront, setRcFront] = useState([]);
    const [rcBack, setRcBack] = useState([]);
  
    // State for errors (error will be true when a file is not selected)
    const [errors, setErrors] = useState({
      userPhoto: false,
      aadharFront: false,
      aadharBack: false,
      pan: false,
      drivingFront: false,
      drivingBack: false,
      vehicleImage: false,
      rcFront: false,
      rcBack: false,
    });
  
    const handleFileChange =
      (setter, fieldName) =>
      ({ detail }) => {
        setter(detail.value);
        // Reset error state when a file is selected
        if (detail.value.length > 0) {
          setErrors((prev) => ({
            ...prev,
            [fieldName]: false, // Reset the error for this field
          }));
        }
      };
  
    const handleSubmit = () => {
      const newErrors = {
        userPhoto: userPhoto.length === 0,
        aadharFront: aadharFront.length === 0,
        aadharBack: aadharBack.length === 0,
        pan: pan.length === 0,
        drivingFront: drivingFront.length === 0,
        drivingBack: drivingBack.length === 0,
        vehicleImage: vehicleImage.length === 0,
        rcFront: rcFront.length === 0,
        rcBack: rcBack.length === 0,
      };
  
      setErrors(newErrors);
  
      // If no errors, navigate
      if (Object.values(newErrors).every((e) => !e)) {
        navigate("/app/application-status");
      }
    };
  
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
                limitShowFewer: "Show fewer files",
                limitShowMore: "Show more files",
                errorIconAriaLabel: "Error",
              }}
              showFileLastModified
              showFileSize
              showFileThumbnail
              tokenLimit={3}
              errorText={errors.userPhoto ? "Please select a file" : ""}
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
  