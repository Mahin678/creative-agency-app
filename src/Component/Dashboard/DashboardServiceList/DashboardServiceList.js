import React, { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../../Spinner/Spinner';
import DashboardMain from '../DashboardMain/DashboardMain';
import './DashboardServiceList.css'
const DashboardServiceList = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/showAllOrder')
            .then(res => res.json())
            .then(result => setInfo(result))
    }, [])
    return (
        <div>

            <DashboardMain title={" Service List"} >
                <div className="dashboard-body"  >
                    <div className="dashboard-body-wrapper p-4" >
                        <div className="dashboard-service-list"  >
                            <div className="dashboard-service-list-wrapper p-4" >
                                <table className="table ">
                                    <thead><tr><th scope="col">Name</th>
                                        <th scope="col">Email Id</th>
                                        <th scope="col">service</th>
                                        <th scope="col">project description</th>
                                        <th scope="col">status</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            info.length ? info.map(data => <>
                                                <tr>
                                                    <td className="font-weight-bold">{data.userName}</td>
                                                    <td className="text-danger">{data.userEmail}</td>
                                                    <td><small>{data.date}</small>  </td>
                                                    <td className="">
                                                        <p className="font-weight-bold mb-0" >
                                                            {data.serviceName}
                                                        </p>
                                                        <small className="d-block" >
                                                            {data.description.substring(0, 40) + '...'}
                                                        </small>
                                                    </td>
                                                    <td className="delete-button">
                                                        <select className="form-control bg-dark text-light" >
                                                            <option>Pending</option>
                                                            <option className="" >Approve</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            </>)
                                                : <h1 className="text-danger" >NO Course Found <small>or wait some moment database working </small> </h1>
                                        }


                                    </tbody></table></div>
                        </div>
                    </div></div>
            </DashboardMain>

        </div >
    );
};

export default DashboardServiceList;