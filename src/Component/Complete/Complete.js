import React, { useEffect, useState } from 'react';
import Loading from '../Header/Loading';

const Complete = () => {
    const [completeTask,setCompleteTask]=useState([]);
    const [isLoading,setIsLoading]=useState(false);


    useEffect(()=>{
        fetch("http://localhost:5000/complete")
        .then(res=>res.json())
        .then(data=>setCompleteTask(data))
    },[])

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
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
                        completeTask.map((task,index)=>{
                            return(
                                <tr>
                                <th>
                                    {index+1}
                                </th>
                                <td>{task.name}</td>
                                <td>{task.task}</td>
                                <td><button class="btn btn-xs sm:btn-sm" >Completed</button></td>
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

export default Complete;