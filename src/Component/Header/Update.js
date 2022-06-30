import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id}=useParams();
    const [task,setTask]=useState({});
    const [name,setName]=useState("")

    useEffect(()=>{
        fetch(`http://localhost:5000/task/${id}`)
        .then(res=>res.json())
        .then(data=>{setTask(data)
        setName(data.task)
        })
    },[name])

    const handleUpdate=event=>{
        event.preventDefault();
        const task=event.target.task.value;

        const updateProduct={
            task:task
        }
        fetch(`http://localhost:5000/task/${id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            setName(name);
            event.target.task.value=""
        })
    }
    return (
        <div  style={{minHeight:'100vh'}}>
        <p className='text-2xl'><strong>Task Name: {name}</strong></p>
                <br/>
        <form onSubmit={handleUpdate} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 

                <input type="text" min={1} name='task' placeholder='enter new task' required />
                <br/>
                <Button className='rounded pt-1 w-100' size="lg" style={{marginLeft:'1%'}} type="submit">Update task</Button>
            </form>
        </div>
    );
};

export default Update;