import React, { useContext } from 'react';
import DashboardMain from '../DashboardMain/DashboardMain';
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const parseJwt = (token) => {
        try {
            return (JSON.parse(atob(token.split('.')[1])))
        } catch (e) {
            return (false);
        }
    };
    const data = sessionStorage.getItem('token')
    const loggedUser = parseJwt(data)

    const onSubmit = data => {
        const newReviewer = { ...data };
        newReviewer.email = (loggedInUser.email || loggedUser.email);
        newReviewer.photo = (loggedInUser.photo || loggedUser.picture);
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReviewer)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };

    return (
        <div>
            <DashboardMain title={"Review"} >
                <div className="dashboard-body p-5"  >
                    <div className="addService-wrapper" >
                        <form onSubmit={handleSubmit(onSubmit)} className="w-50" >
                            <div className="form-group" >
                                <label className="font-weight-bold" >Name</label>
                                <input placeholder="Enter Name" className="form-control" defaultValue={(loggedInUser.name || loggedUser.name)} name="name" ref={register({ required: true })} />
                            </div>
                            <div className="form-group" >
                                <label className="font-weight-bold" >Company Name</label>
                                <input placeholder="Enter Company Name" className="form-control" name="company" ref={register({ required: true })} />
                            </div>
                            <div className="form-group" >
                                <label className="font-weight-bold" >Discretion</label>
                                <textarea placeholder="Enter Discretion " className="form-control" name="discretion" ref={register({ required: true })} ></textarea>
                            </div>

                            <input className="btn-custom mt-5" type="submit" />
                        </form>
                    </div>
                </div>

            </DashboardMain >
        </div >
    );
};

export default Review;