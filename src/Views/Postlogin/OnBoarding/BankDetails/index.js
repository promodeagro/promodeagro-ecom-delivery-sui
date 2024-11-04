import { Button, Header, Input, Select, SpaceBetween, FormField } from '@cloudscape-design/components';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateBankDetails } from 'Redux-Store/BankDetails/bankDetailsSlice';
import { ValidationEngine } from 'Utils/helperFunctions';

const bankValidationSchema = {
    bankName: [
        {
            message: "Please select a bank",
            type: ValidationEngine.type.MANDATORY,
        },
    ],
    acc: [
        {
            message: "Please enter Account Number",
            type: ValidationEngine.type.MANDATORY,
        },
        {
            message: "Account Number must be numeric",
            type: ValidationEngine.type.REGEX,
            regex: /^[0-9]+$/,
        },
    ],
    ifsc: [
        {
            message: "Please enter IFSC code",
            type: ValidationEngine.type.MANDATORY,
        },
        {
            message: "Please enter a valid IFSC code",
            type: ValidationEngine.type.REGEX,
            // regex: /^[A-Z]{4}0[A-Z0-9]{6}$/, // Example regex pattern for IFSC code
        },
    ],
};

const BankDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [bankName, setBankName] = useState(null);
    const [acc, setAcc] = useState("");
    const [ifsc, setIfsc] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const riderId = JSON.parse(localStorage.getItem("id"));

    

    const handleSubmit = () => {
        setIsSubmitted(true);
        const bankDetails = { bankName, acc, ifsc };
        const validationErrors = ValidationEngine.validate(bankValidationSchema, bankDetails);

        if (validationErrors.isValid) {
            const bankDetailsPayload = {
                id: riderId,
                bankName,
                acc,
                ifsc
            };
            dispatch(updateBankDetails(bankDetailsPayload));
            navigate('/auth/register/document-details');
        } else {
            console.log("Validation failed:", validationErrors);
        }
    };

    const validationErrors = ValidationEngine.validate(bankValidationSchema, { bankName, acc, ifsc });

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div style={{ marginTop: '20px' }}>
                <Header variant='h1'>
                    <span style={{ fontSize: '32px', fontWeight: '600' }}>Bank Details</span>
                </Header>
            </div>

            <div style={{ marginTop: 23 }}></div>

            <SpaceBetween direction='vertical' size='m'>
                <FormField errorText={isSubmitted && !validationErrors.isValid ? validationErrors.bankName?.message : ''}>
                    <Select
                        placeholder='Select Bank'
                        selectedOption={bankName}
                        onChange={({ detail }) => setBankName({ label: detail.selectedOption.label, value: detail.selectedOption.value })}
                        options={[
                            { label: "State Bank of India", value: "SBI" },
                            { label: "HDFC Bank", value: "HDFC" },
                            { label: "ICICI Bank", value: "ICICI" },
                        ]}
                    />
                </FormField>

                <FormField errorText={isSubmitted && !validationErrors.isValid ? validationErrors.acc?.message : ''}>
                    <Input
                        placeholder='Account Number'
                        value={acc}
                        onChange={(e) => setAcc(e.detail.value)}
                    />
                </FormField>

                <FormField errorText={isSubmitted && !validationErrors.isValid ? validationErrors.ifsc?.message : ''}>
                    <Input
                        placeholder='IFSC Code'
                        value={ifsc}
                        onChange={(e) => setIfsc(e.detail.value)}
                    />
                </FormField>
            </SpaceBetween>

            <div style={{ position: 'absolute', right: 30, bottom: "10%", left: 30 }}>
                <Button onClick={handleSubmit} variant='primary' fullWidth>Complete</Button>
            </div>
        </div>
    );
};

export default BankDetails;
