import React, { useState ,useEffect} from 'react';



const getLocalItem=()=>{
    let list=localStorage.getItem('list');
    if(list){
        return JSON.parse(list);
    }else{
        return [];
    }
}
function Todo() {
    const [text, setText] = useState("Add some text");
    const [task, setTask] = useState(getLocalItem());
    const changeText = (e) => {

        setText(e.target.value);
    }
    const submitHandler = (e) => {

        e.preventDefault();
        setTask([...task, text]);
        setText('');


    }
    const removeTask=(a)=>{
        const finalData=task.filter((val,index)=>{
            return index!==a;
        })
        setTask(finalData);
    }
    useEffect(()=>{
localStorage.setItem("list",JSON.stringify(task));
    },[task])

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center main-row">
                    <div className="col shadow main-col bg-white">
                        <div className="col p-2">
                            <h4 className="text-center">Todo App Using React js</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input type="text" id="todo-input" className="form-control" value={text} onChange={changeText} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add todo</button>
                        </div>
                    </form>
                    <div className="container">
                        <div className="row">
                            {
                                task.map((value,index) => {
                                    return (
                                        <>
                                            <div className="col-6 my-2">{value}</div>
                                            <div className="col-6 my-2"><button className="btn btn-primary" onClick={()=>removeTask(index)}>Delete</button></div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}
export default Todo;