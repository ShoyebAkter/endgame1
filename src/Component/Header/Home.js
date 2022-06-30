import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Home = () => {
    const [allTasks,setAllTasks]=useState([])
    const [isLoading,setIsLoading]=useState(false);
    const [checked,setChecked]=useState(false)

    const navigate=useNavigate()

    useEffect(()=>{
        fetch("http://localhost:5000/task")
        .then(res=>res.json())
        .then(data=>setAllTasks(data))
    },[])

    

    if (isLoading) {
        return <Loading></Loading>
    }

    const update= id =>{
        navigate(`task/${id}`)
    }

    const complete=(event,task,id)=>{
        // console.log(task)
        const newTask={
            name: task.name,
            task: task.task
        }
        // console.log(newTask)
        if(event.target.checked){
            fetch(`http://localhost:5000/complete`,{
                method: "POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newTask)
            })
            .then(res=>res.json())
            .then(data=>{
                alert("Completed")
            })

            fetch(`http://localhost:5000/task/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining=allTasks.filter(task=>task._id!==id)
                setAllTasks(remaining);
            })
            
        }
        
    }

    return (
        <div>
            <h2 className='text-3xl text-center'>Todo List</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        allTasks.map(task=>{
                            return(
                                <tr>
                                <th>
                                    <div class="form-control">
                                        <label class="cursor-pointer label">
                                            <input type="checkbox" onChange={(e)=>complete(e,task,task._id)} class="checkbox checkbox-accent" />
                                        </label>
                                    </div>
                                </th>
                                <td>{task.name}</td>
                                <td>{task.task}</td>
                                <td><button class="btn btn-xs sm:btn-sm" onClick={()=>update(task._id)}>Edit</button></td>
                            </tr>
                            )
                        })
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;