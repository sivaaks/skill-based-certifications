
const initDataStorage=()=>{
    try{
      const data=JSON.parse(localStorage.getItem('certs'));
      if(data==null) localStorage.setItem('certs',JSON.stringify([]));
    }catch{
      localStorage.setItem('certs',JSON.stringify([]));
    }
  }

export {initDataStorage}
