import React from 'react';
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import DashboardMain from '../DashboardMain/DashboardMain';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };

    return (
        <div>

            <DashboardMain title={"Make Admin"}>
                <div className="dashboard-body"  >
                    <div className="dashboard-body-wrapper p-4" >

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mx-auto" >
                                <label className="font-weight-bold" >Service title</label>
                                <input placeholder="Enter Email" className="form-control w-50" name="email" ref={register({ required: true })} />
                                <input className="btn-custom mt-4" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </DashboardMain>

        </div>
    );
};

export default MakeAdmin;