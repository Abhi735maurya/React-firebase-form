import React,{useState} from 'react';
//import { findRenderedComponentWithType } from 'react-dom/test-utils';
//import LoginFormShow from './LoginFormShow';
function LoginhtmlForm() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [city,setCity]=useState("");
   // const [userData,setUserData]=useState([]);
   /*
   const submitFormHandler=(event)=>{
        event.preventDefault();
       const newUesr ={email:email,password:password,city:city}
       setUserData([...userData,newUesr]);
       setEmail("");
       setPassword("");
       setCity("");

    }
    */
     const storeData=async(e)=>{
         e.preventDefault();
       const result= await  fetch('https://react-form-7655a-default-rtdb.firebaseio.com/user.json',{
             method: "POST",
             headers : {
                 "Content-type" : "application/json"
             },
             body :JSON.stringify({
               Email: email,
               Password :password,
               City :city
             })
         })
      if(result){
          setEmail("");
          setPassword("");
          setCity("");
          alert("form submitted sucessfully..");
      }
     }
   
    return (
        <>
            <div className="container my-5" >
                <div className="row">
                    <div className="col-9">
                        <form className="row g-3" method="POST">

                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="htmlForm-label">Email</label>
                                <input type="email" className="htmlForm-control" id="inputEmail4" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="htmlForm-label">Password</label>
                                <input type="password" className="htmlForm-control" id="inputPassword4" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            </div>


                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="htmlForm-label">City</label>
                                <input type="text" className="htmlForm-control" id="inputCity" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                            </div>


                            <div className="col-12">
                                <button type="submit" className="btn btn-primary" onClick={storeData}>Sign in</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
           {
               /*
               <LoginFormShow data={userData}/>
               */
           }

        </>

    )
}
export default LoginhtmlForm;