import { Button, FileUpload, FormField, Grid, Header } from '@cloudscape-design/components';
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

    return (
        <div 
            style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
            {/* Header */}
            <span>
                <Header variant='h1'>
                    <span style={{ fontSize: '32px', fontWeight: '600' }}>Documents</span>
                </Header>

                <div style={{ marginTop: 23 }}></div>

                {/* Grid layout for file uploads */}
                <Grid
                    gridDefinition={[{ colspan: 12 }, { colspan: 6 }, { colspan: 6 }]}
                >
                    {/* User Photo Upload */}
                    <FormField label="User Photo">
                        <FileUpload
                            onChange={({ detail }) => setUserPhoto(detail.value)}
                            value={userPhoto}
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

                    {/* Aadhaar Front Upload */}
                    <FormField label="Aadhaar Front">
                        <FileUpload
                            onChange={({ detail }) => setAadhaarFront(detail.value)}
                            value={aadhaarFront}
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

                    {/* Pan Card Upload */}
                    <FormField label="Pan Card">
                        <FileUpload
                            onChange={({ detail }) => setPanCard(detail.value)}
                            value={panCard}
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

                    {/* Driving License Upload */}
                    <FormField label="Driving License">
                        <FileUpload
                            onChange={({ detail }) => setDrivingLicense(detail.value)}
                            value={drivingLicense}
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

                    {/* Vehicle Image Upload */}
                    <FormField label="Vehicle Image">
                        <FileUpload
                            onChange={({ detail }) => setVehicleImage(detail.value)}
                            value={vehicleImage}
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

                    {/* RC Book Upload */}
                    <FormField label="RC Book">
                        <FileUpload
                            onChange={({ detail }) => setRcBook(detail.value)}
                            value={rcBook}
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
                </Grid>
            </span>

            {/* Complete Button */}
            <div onClick={()=> navigate('/auth/register/review-and-submit')} style={{ marginBottom: 30 }}>
                <Button onClick={() => navigate('/auth/register/documents')} variant='primary' fullWidth>
                    Complete
                </Button>
            </div>
        </div>
    );
};

export default Documents;
