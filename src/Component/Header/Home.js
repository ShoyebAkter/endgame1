import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Todo List</h2>
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
                        <tr>
                            <th>
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <input type="checkbox" unchecked class="checkbox checkbox-accent" />
                                    </label>
                                </div>
                            </th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td><button class="btn btn-xs sm:btn-sm">Edit</button></td>
                        </tr>
                        <tr>
                            <th>
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <input type="checkbox" checked="unchecked" class="checkbox checkbox-accent" />
                                    </label>
                                </div>
                            </th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td><button class="btn btn-xs sm:btn-sm">Edit</button></td>                        </tr>
                        <tr>
                            <th>
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <input type="checkbox" unchecked class="checkbox checkbox-accent" />
                                    </label>
                                </div>
                            </th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td><button class="btn btn-xs sm:btn-sm">Edit</button></td>                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;