import { useState } from 'react';
import './style.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { initDataStorage } from './InitDataStorage';

export default function AddCert(){

    const navigate=useNavigate();
    initDataStorage();

    const [certDetails,setCertDetails]=useState({name:'',issuer:'',file:''});
    const [nameError,setNameError]=useState();
    const [issuerError,setIssuerError]=useState();
    const [fileError,setFileError]=useState();

    const handleChange=({target:{name,value}})=>setCertDetails({...certDetails,[name]:value});

    const addCertificate=()=>{

        try{
            const data=JSON.parse(localStorage.getItem('certs'));
            console.log('data',data);
            if(data.length>=5) toast.error('Cannot add more than 5 certifications');
            else {
                data.push(certDetails);
                localStorage.setItem('certs',JSON.stringify(data));
                toast.success('Certification added succesfully');
                navigate('/');
            }
        } catch(err){
            console.log(err);
        }
    }

    const handleBack=()=>navigate('/');

    const validateData=()=>{
        if(certDetails.name.length===0) {
            setNameError('Enter certification name');
        } else if(certDetails.issuer.length===0){
            setIssuerError('Enter certificate issuer')
        }else if(certDetails.file.length===0){
            setNameError('');
            setFileError('Upload a file with your certification')
        } else if(certDetails.file.length>0){
            setIssuerError('');
            const fileName=certDetails.file.split('.');
            const fileExtension=fileName[fileName.length-1];
            if(fileExtension==='pdf' || fileExtension==='jpg'){
                setNameError('');
                setIssuerError('');
                setFileError('');
                addCertificate();
            }else{
                setIssuerError('');
                setFileError('Upload a file containing jpg and pdf only')
            }
        }
        else{
            
        }
    }

    return(
        <>
        <div className="container">
            <div className="cert-details">
                <div id="cert-input-details">
                    <div className="cert-name-detail">
                        <label htmlFor="cert-name">Certification name</label>
                        <input type="text" id="cert-name" onChange={handleChange} name="name" value={certDetails.name} placeholder="Enter certification name"></input>
                        <span className="error">{nameError}</span>
                    </div>
                    <div className="cert-issuer-detail">
                        <label htmlFor="cert-issuer">Issuer</label>
                        <input type="text" id="cert-issuer" onChange={handleChange} name="issuer" value={certDetails.issuer} placeholder="Enter issuer"></input>
                        <span className="error">{issuerError}</span>
                    </div>
                </div>
                <div className="cert-file-upload">
                    <label>Upload a file showing your certification</label>
                    <input type="file" onChange={handleChange} accept=".jpg*,.pdf*" name="file" id="file" value={certDetails.file}></input>
                    <span className="error">{fileError}</span>
                    <label>(File format should be only pdf and jpg)</label>
                </div>
                <button className="button" onClick={validateData}>Save certification</button>
            </div>
            <br/>
            <center><button className="button" onClick={handleBack}>Back to certifications</button></center>
        </div>
        </>
    )

}