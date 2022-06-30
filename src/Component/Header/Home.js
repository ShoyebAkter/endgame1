import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Home = () => {
    const [allTasks,setAllTasks]=useState([])
    const [completeTask,setCompleteTask]=useState([])
    const [isLoading,setIsLoading]=useState(false);

    const navigate=useNavigate()

    useEffect(()=>{
        fetch("http://localhost:5000/task")
        .then(res=>res.json())
        .then(data=>setAllTasks(data))
    },[])

    useEffect(()=>{
        fetch("http://localhost:5000/complete")
        .then(res=>res.json())
        .then(data=>setCompleteTask(data));
    },[])

    const tasks=[...completeTask,...allTasks];
    

    if (isLoading) {
        return <Loading></Loading>
    }

    const update= id =>{
        navigate(`task/${id}`)
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
                            <th>Starting</th>
                            <th>Ending</th>
                            <th>Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        tasks.map((task,index)=>{
                            return(
                                <tr>
                                <th>
                                    {index+1}
                                </th>
                                <td>{task.name}</td>
                                <td>{task.starting}</td>
                                <td>{task.ending}</td>
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