import React from 'react';
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import DashboardMain from '../DashboardMain/DashboardMain';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://infinite-headland-81835.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    toast.success('Admin successfully added')
                }
            })
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