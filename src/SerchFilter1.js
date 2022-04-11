import React,{useState} from 'react';
import SearchFilter2 from './SearchFilter2';
function SearchFilter1(){

  const [text,setText]=useState('');

  const changeHandler=(e)=>{
    setText(e.target.value);
}
  
  return (
    <div className="container my-3 ">
      <div className="row text-center">
        <div className="col-4 border">
          <input type="text" className="form-control my-2" value={text} onChange={changeHandler}/>
          {
            SearchFilter2.filter((val)=>{
              if(text===""){
                return val;
              }else if(val.name.toLocaleLowerCase().startsWith(text.toLocaleLowerCase())){
                return val;
              }
            }).map((value)=>{
              return (
                <h6 key={value.code}>{value.name}</h6>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}
export default SearchFilter1;