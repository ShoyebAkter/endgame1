import React from 'react';

const Addtask = () => {
    return (
        <div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Enter your task</span>
                </label>
                <label class="input-group">
                    <input type="text" placeholder="Enter your name" class="input input-bordered" />
                    <input type="text" placeholder="Enter your task" class="input input-bordered" />
                    <span>AddTask</span>
                </label>
            </div>
        </div>
    );
};

export default Addtask;