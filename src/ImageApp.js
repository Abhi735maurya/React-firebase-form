import React,{useState} from 'react';
import ImageData from './ImageData';
function ImageApp(){
    const [images,setImage]=useState(ImageData);

    const allImages=()=>{
        const finalData=ImageData.filter((val)=>{
            return val;
        })
        setImage(finalData);
    }
    const onlyPython=(categoryItem)=>{
        const finalData=ImageData.filter((val)=>{
            return val.category===categoryItem;
        })
      setImage(finalData);
    }
    const onlyOffice=(categoryItem)=>{
        const finalData=ImageData.filter((val)=>{
            return val.category===categoryItem;
        })
      setImage(finalData);
    }
    const onlyReact=(categoryItem)=>{
        const finalData=ImageData.filter((val)=>{
            return val.category===categoryItem;
        })
      setImage(finalData);
    }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <button className="btn-primary" onClick={allImages}>All</button>
                </div>
                <div className="col-3">
                    <button className="btn-primary" onClick={()=>onlyPython('Python')}>Python</button>
                </div>
                <div className="col-3">
                    <button className="btn-primary" onClick={()=>onlyOffice('Office')}>Office</button>
                </div>
                <div className="col-3">
                    <button className="btn-primary" onClick={()=>onlyReact('React')}>React</button>
                </div>
            </div>
        </div>
        
         <div className="container">
             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                 
                     {
                         
                         images.map((value)=>{
                             return (
                                 <div className="col mt-3" key={value.id}>
                                  <img src={value.image} className="img-fluid" alt="image" />
                                 </div>
                                

                             );
                         })
                     }
                
             </div>
         </div>
         </>
    )
}
export default ImageApp;