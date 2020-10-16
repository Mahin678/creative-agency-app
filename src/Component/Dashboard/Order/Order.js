import React from 'react';
import DashboardMain from '../DashboardMain/DashboardMain';
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Spinner from '../../Spinner/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();
const Order = () => {
    const id = useParams();
    const serviceId = id.id;
    const { register, handleSubmit, watch, errors } = useForm();
    const { user } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = user;
    const [showService, setShowService] = useState([]);
    const [allService, setAllService] = useState([]);
    const [isValue, setIsValue] = useState(true);
    const [service, setServiceName] = useState();
    const parseJwt = (token) => {
        try {
            return (JSON.parse(atob(token.split('.')[1])))
        } catch (e) {
            return ("");
        }
    };
    useEffect(() => {
        fetch('https://infinite-headland-81835.herokuapp.com/showService')
            .then(res => res.json())
            .then(result => setAllService(result))
    }, [])

    const getService = allService.find(data => data._id == serviceId) || {};
    const data = sessionStorage.getItem('token')
    const loggedUser = parseJwt(data)
    const onSubmit = data => {
        let image;
        image = data.file[0];
        if (image == undefined) {
            setIsValue(false)
        }
        console.log(data);
        const formData = new FormData();
        formData.append('userName', data.name);
        formData.append('email', data.email);
        formData.append('date', new Date().toDateString());
        if (getService.service) {
            console.log(data);
            formData.append('service', data.service);
            formData.append('serviceName', getService.service);
        } else {
            const serviceInfo = JSON.parse(data.service);
            formData.append('serviceName', serviceInfo.serviceName);
            formData.append('service', serviceInfo.id);
        }
        formData.append('description', data.Massage);
        formData.append('price', data.price);
        formData.append('image', image);
        fetch('https://infinite-headland-81835.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    toast.success('Order purchases successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })

    };
    useEffect(() => {
        fetch('https://infinite-headland-81835.herokuapp.com/showService')
            .then(res => res.json())
            .then(result => setShowService(result))
    }, [])
    return (
        <div>
            <DashboardMain title={"Order"} >
                <div className="dashboard-body"  >
                    <div className=" p-4" >
                        <div className="addService" >
                            <div className="addService-wrapper" >
                                <form onSubmit={handleSubmit(onSubmit)} className="w-50" >
                                    <div className="form-group " >
                                        <input required defaultValue={(loggedUser.name || loggedInUser.name)} placeholder="Enter Your Name" className="form-control p-4" name="name" ref={register({ required: true })} />
                                    </div>
                                    <div className="form-group" >
                                        <input required value={(loggedUser.email || loggedInUser.email)} className="form-control p-4" name="email" ref={register({ required: true })} />
                                    </div>
                                    <div className="form-group" >

                                        {
                                            getService.service ?
                                                (
                                                    getService.service ?
                                                        <select required className="form-control" name="service" ref={register({ required: true })} >
                                                            <option value={serviceId} >{getService.service}</option>
                                                        </select> : <Spinner />
                                                )
                                                :
                                                (
                                                    showService.length ?
                                                        <select required className="form-control" defaultChecked={showService[1]} name="service" ref={register({ required: false })} >
                                                            {
                                                                showService.map(data =>
                                                                    <option value={JSON.stringify({ id: data._id, serviceName: data.service })} >{data.service}</option>
                                                                )
                                                            }
                                                        </select> : <Spinner />
                                                )
                                        }
                                    </div>
                                    <div className="form-group" >
                                        <textarea required placeholder="Enter Descriptions" className="form-control p-4" name="Massage" ref={register({ required: true })} ></textarea>
                                    </div>
                                    <div className="d-flex" >
                                        <div className="form-group w-50 mr-4">
                                            <input required placeholder="price" className="form-control p-4" name="price" type="number" ref={register({ required: true })} />
                                        </div>
                                        <div className="form-group w-50 ">
                                            <label style={{ backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444" }} className="custom-file-upload w-75 p-2 text-center" >
                                                <input name="file" style={{ display: "none" }} ref={register({ required: false })} type="file" />
                                                <FontAwesomeIcon icon={faCloudUploadAlt} />
                                                upload project file
                                            </label>
                                        </div>
                                    </div>
                                    <p className={`${!isValue && "text-danger"}`}  > Image is not set , you must be added image </p>
                                    <input className="btn-custom mt-2" type="submit" />
                                </form>
                            </div>
                        </div>
                    </div></div >
            </DashboardMain >
        </div >
    );
};

export default Order;