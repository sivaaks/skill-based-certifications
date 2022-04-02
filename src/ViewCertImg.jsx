import { useParams } from 'react-router-dom';
import './style.scss';

export default function ViewCertImg(props){
    const params=useParams();
    console.log('params',params);
    return(
        <>
        <center><img alt="cert" width="50%" src={`/img/${params.id}`}></img></center>
        <br/>
        <center><button className="button" onClick={()=>{window.close()}}>Close</button></center>
        </>
    )
}