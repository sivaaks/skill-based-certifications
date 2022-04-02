import ViewCert from './ViewCert';
import './ListCerts.scss';
import './style.scss';
import { useNavigate } from 'react-router-dom';

export default function ListCerts() {

    const navigate = useNavigate();

    const certs = JSON.parse(localStorage.getItem('certs'));

    const addCert = () => navigate('/add');

    return (
        <>
            <div id="certs-list-container">
                <div id="certs-list">
                    {certs.length > 0 ?
                        certs.map((cert, index) => {
                            return <ViewCert key={index} certName={cert.name} certIssuer={cert.issuer} certLink={cert.file} certNo={index + 1} />
                        })
                        : <p>No certifications to display</p>}
                </div>
                {certs.length<=4?<button className="button" onClick={addCert}>Add a certification</button>:<></>}
            </div>
        </>
    )

}