import './ViewCert.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ViewCert(props){

    const navigate=useNavigate();

    const deleteCert=(id)=>{
        if (window.confirm('Are you sure to delete certification?')){
            const data=JSON.parse(localStorage.getItem('certs'));
            data.splice(id-1,1);
            localStorage.setItem('certs',JSON.stringify(data));
            navigate('/');
            toast.dismiss();
            toast.success('Certification deleted successfully');
        } else {
            toast.error('Certification delete cancelled');
        }
    }

    return(
        <>
        <div id="certs">
            <div id="one-cert-detail">
                <h4 id="cert-no">{props.certNo}</h4>
                <h3 id="cert-name">{props.certName}</h3>
                <h5 id="cert-issuer">{props.certIssuer}</h5>
                <img id="cert-delete" alt="delete" width="25px" onClick={()=>{deleteCert(props.certNo)}} src="/img/delete.png"></img>
            </div>
            <a id="cert-link" target="_blank" rel="noreferrer" href={`/cert${props.certNo}.jpg`}>View certification</a>
        </div>
        </>
    )

}