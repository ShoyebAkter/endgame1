import React from 'react';
import { useForm } from 'react-hook-form';



const Addtask = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const task={
            name: data.name,
            task: data.Task,
            starting:data.starting,
            ending: data.ending
        }
        const url="http://localhost:5000/task";
        fetch(url,{
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res=>res.json())
        .then(result=>{
            alert("task added successfully")
        reset();
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mx-auto form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                </div>

                <div className="mx-auto form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Task</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Write your task"
                        {...register("Task", {
                            required: {
                                value: true,
                                message: 'Task is Required'
                            }
                        })}
                    ></textarea>
                    
                </div>
                <div className="mx-auto form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Starting date</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Starting date"
                        {...register("starting", {
                            required: {
                                value: true,
                                message: 'starting is Required'
                            }
                        })}
                    ></textarea>
                    
                </div>
                <div className="mx-auto form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ending date</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Ending date"
                        {...register("ending", {
                            required: {
                                value: true,
                                message: 'ending is Required'
                            }
                        })}
                    ></textarea>
                    <br></br>
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                    <br/>
                </div>


                
            </form>

        </div >
    );
};

export default Addtask;