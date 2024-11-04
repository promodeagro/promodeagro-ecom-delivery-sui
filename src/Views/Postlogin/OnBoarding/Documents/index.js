import { Button, FileUpload,SpaceBetween, FormField, Grid, Header } from '@cloudscape-design/components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Documents = () => {
    // Individual state for each file input
    const [userPhoto, setUserPhoto] = React.useState([]);
    const [aadhaarFront, setAadhaarFront] = React.useState([]);
    const [aadhaarBack, setAadhaarBack] = React.useState([]);
    const [panCard, setPanCard] = React.useState([]);
    const [drivingLicense, setDrivingLicense] = React.useState([]);
    const [vehicleImage, setVehicleImage] = React.useState([]);
    const [rcBook, setRcBook] = React.useState([]);

    const navigate = useNavigate();


    const handleSubmit = ()=> {

        navigate("/app/application-status")
    }
    return (
        <div style={{width:"100%" , height:"100%" }}>

 {/* Header Top */}
 <div style={{marginTop:'20px'}}>
<Header 
varant='h1'><span style={{fontSize:'32px' , fontWeight:'600'}}>Documents</span>
</Header>  
</div>

<div style={{marginTop:23}}></div>
<SpaceBetween  direction='vertical' size="l">
     
                    {/* Aadhaar Back Upload */}
                    <FormField label="Aadhaar Back">
                        <FileUpload
                            onChange={({ detail }) => setAadhaarBack(detail.value)}
                            value={aadhaarBack}
                            i18nStrings={{
                                uploadButtonText: (e) => e ? "Choose files" : "Choose file",
                                dropzoneText: (e) => e ? "Drop files to upload" : "Drop file to upload",
                                removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
                                limitShowFewer: "Show fewer files",
                                limitShowMore: "Show more files",
                                errorIconAriaLabel: "Error"
                            }}
                            showFileSize
                            showFileThumbnail
                            tokenLimit={3}
                        />
                    </FormField>

                       {/* Aadhaar Back Upload */}
                       <FormField label="Aadhaar Back">
                        <FileUpload
                            onChange={({ detail }) => setAadhaarBack(detail.value)}
                            value={aadhaarBack}
                            i18nStrings={{
                                uploadButtonText: (e) => e ? "Choose files" : "Choose file",
                                dropzoneText: (e) => e ? "Drop files to upload" : "Drop file to upload",
                                removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
                                limitShowFewer: "Show fewer files",
                                limitShowMore: "Show more files",
                                errorIconAriaLabel: "Error"
                            }}
                            showFileSize
                            showFileThumbnail
                            tokenLimit={3}
                        />
                    </FormField>

                       {/* Aadhaar Back Upload */}
                       <FormField label="Aadhaar Back">
                        <FileUpload
                            onChange={({ detail }) => setAadhaarBack(detail.value)}
                            value={aadhaarBack}
                            i18nStrings={{
                                uploadButtonText: (e) => e ? "Choose files" : "Choose file",
                                dropzoneText: (e) => e ? "Drop files to upload" : "Drop file to upload",
                                removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
                                limitShowFewer: "Show fewer files",
                                limitShowMore: "Show more files",
                                errorIconAriaLabel: "Error"
                            }}
                            showFileSize
                            showFileThumbnail
                            tokenLimit={3}
                        />
                    </FormField>

                       {/* Aadhaar Back Upload */}
                       <FormField label="Aadhaar Back">
                        <FileUpload
                            onChange={({ detail }) => setAadhaarBack(detail.value)}
                            value={aadhaarBack}
                            i18nStrings={{
                                uploadButtonText: (e) => e ? "Choose files" : "Choose file",
                                dropzoneText: (e) => e ? "Drop files to upload" : "Drop file to upload",
                                removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
                                limitShowFewer: "Show fewer files",
                                limitShowMore: "Show more files",
                                errorIconAriaLabel: "Error"
                            }}
                            showFileSize
                            showFileThumbnail
                            tokenLimit={3}
                        />
                    </FormField>

                       {/* Aadhaar Back Upload */}
                       <FormField label="Aadhaar Back">
                        <FileUpload
                            onChange={({ detail }) => setAadhaarBack(detail.value)}
                            value={aadhaarBack}
                            i18nStrings={{
                                uploadButtonText: (e) => e ? "Choose files" : "Choose file",
                                dropzoneText: (e) => e ? "Drop files to upload" : "Drop file to upload",
                                removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
                                limitShowFewer: "Show fewer files",
                                limitShowMore: "Show more files",
                                errorIconAriaLabel: "Error"
                            }}
                            showFileSize
                            showFileThumbnail
                            tokenLimit={3}
                        />
                    </FormField>

                       {/* Aadhaar Back Upload */}
                       <FormField label="Aadhaar Back">
                        <FileUpload
                            onChange={({ detail }) => setAadhaarBack(detail.value)}
                            value={aadhaarBack}
                            i18nStrings={{
                                uploadButtonText: (e) => e ? "Choose files" : "Choose file",
                                dropzoneText: (e) => e ? "Drop files to upload" : "Drop file to upload",
                                removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
                                limitShowFewer: "Show fewer files",
                                limitShowMore: "Show more files",
                                errorIconAriaLabel: "Error"
                            }}
                            showFileSize
                            showFileThumbnail
                            tokenLimit={3}
                        />
                    </FormField>

                       {/* Aadhaar Back Upload */}
                       <FormField label="Aadhaar Back">
                        <FileUpload
                            onChange={({ detail }) => setAadhaarBack(detail.value)}
                            value={aadhaarBack}
                            i18nStrings={{
                                uploadButtonText: (e) => e ? "Choose files" : "Choose file",
                                dropzoneText: (e) => e ? "Drop files to upload" : "Drop file to upload",
                                removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
                                limitShowFewer: "Show fewer files",
                                limitShowMore: "Show more files",
                                errorIconAriaLabel: "Error"
                            }}
                            showFileSize
                            showFileThumbnail
                            tokenLimit={3}
                        />
                    </FormField>

</SpaceBetween>

{/* Bottom */}
<div style={{position:'absolute' ,right:30 ,bottom:"10%" , left:30}}>
<Button onClick={handleSubmit} variant='primary' fullWidth>
                    Complete
                </Button></div>


 </div>
    );
};

export default Documents;
