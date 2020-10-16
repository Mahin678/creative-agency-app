import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../../Spinner/Spinner';

const UserServiceData = ({ info }) => {
    const [allService, setAllService] = useState([]);
    useEffect(() => {
        fetch('https://infinite-headland-81835.herokuapp.com/showService')
            .then(res => res.json())
            .then(result => setAllService(result))
    }, [])
    const getService = allService.find(data => data._id == info.service) || {};
    return (
        <div key={info.name} className="col-sm-12 col-md-6 col-lg-6">
            <div className="card p-3 m-2" style={{ height: "250px", borderRadius: "17px" }} >
                {

                    getService.description ? <><div className="client-img d-flex justify-content-between">
                        {

                            getService.image &&
                            <img style={{ border: "1px solid white", borderRadius: "30px" }} src={`data:image/png;base64,${getService.image.img}`} alt="" />
                        }

                        <div className="pt-3 d m-2 font-weight-bold" >
                            <button className="btn btn-danger" >Pending</button>
                        </div>
                    </div>
                        <div className="review-text p-2 ">
                            <h4>{getService.service}</h4>
                            <small >{info.date}</small>
                            {

                                getService.description &&
                                <p>{getService.description.substring(0, 80) + '...'}</p>

                            }
                        </div>
                    </> : <div className="mt-5 pt-4" >
                            <Spinner />
                        </div>
                }

            </div>
        </div>
    );
};

export default UserServiceData;