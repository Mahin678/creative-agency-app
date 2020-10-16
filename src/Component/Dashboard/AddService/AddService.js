import React, { useState } from 'react';
import DashboardMain from '../DashboardMain/DashboardMain';
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();

const AddService = () => {
    const { user } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = user;
    const parseJwt = (token) => {
        try {
            return (JSON.parse(atob(token.split('.')[1])))
        } catch (e) {
            return (null);
        }
    };
    const data = sessionStorage.getItem('token')
    const loggedUser = parseJwt(data)

    const { register, handleSubmit, watch, errors } = useForm();
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
    const [isValue, setIsValue] = useState(true);


    const onSubmit = data => {
        let image;
        image = data.file[0];
        console.log(image);
        if (image == undefined) {
            setIsValue(false)
        }
        const formData = new FormData()
        formData.append('name', (loggedUser.name || loggedInUser.name));
        formData.append('email', (loggedUser.email || loggedInUser.email));
        formData.append('service', data.service);
        formData.append('description', data.descriptions);
        formData.append('imageFile', image)

        fetch('https://infinite-headland-81835.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setIsValue(true)
                    toast.success('service added successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })

    };

    return (
        <>
            <DashboardMain title={"Add Service"}>
                <div className="dashboard-body"  >
                    <div className="dashboard-body-wrapper p-4" >
                        <div className="addService" >
                            <div className="addService-wrapper" >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-6">
                                            <div className="form-group" >
                                                <label className="font-weight-bold" >Service title</label>
                                                <input placeholder="Enter Title" className="form-control" name="service" ref={register({ required: true })} />
                                            </div>
                                            <div className="form-group" >
                                                <label className="font-weight-bold" >Descriptions</label>
                                                <textarea placeholder="Enter Descriptions" className="form-control" name="descriptions" ref={register({ required: true })} ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12  col-lg-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold d-block" >Icon</label>
                                                <label style={{ backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444" }} className="custom-file-upload w-50 p-2 text-center" >
                                                    <input name="file" style={{ display: "none" }} ref={register({ required: false })} type="file" />
                                                    <FontAwesomeIcon icon={faCloudUploadAlt} /> upload project file
                                            </label>

                                            </div>
                                            <p className={`${!isValue && "text-danger"}`}  > Image is not set , you must be added image </p>

                                            <input className="btn-custom mt-4" type="submit" />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div></div >
            </DashboardMain >
        </>


    );
};

export default AddService;