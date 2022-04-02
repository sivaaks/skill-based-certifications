import AddCert from './AddCert';
import ListCerts from './ListCerts';
import { initDataStorage } from './InitDataStorage';

export default function PageLayout(props){
    const page=props.page;
    const ADD='add';
    initDataStorage();

    return(
        <>
            <div id="container">
                <div className="header">
                    <h1>Skills-Based Certifications</h1>
                    <h6>(You can add upto 5 certifications)</h6>
                </div>
                <div id="body">
                    {page===ADD?<AddCert/>:<ListCerts/>}
                </div>
            </div>
        </>
    )

}