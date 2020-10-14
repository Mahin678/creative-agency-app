import React from 'react';
import { useEffect } from 'react';
import DashboardMain from '../DashboardMain/DashboardMain';
import './DashboardServiceList.css'
const DashboardServiceList = () => {
    useEffect(() => {

    })
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
                                        <th scope="col">project details</th>
                                        <th scope="col">status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="font-weight-bold">Mahin Tazuar Turza</td>
                                            <td className="text-danger">mahintazuar678@gmail.com</td>
                                            <td>2020-10-03</td>
                                            <td className="text-success font-weight-bold">drive Safety</td>
                                            <td className="delete-button">
                                                <button className="bg-danger "><img src="https://i.imgur.com/YwDre2M.png" alt="delete-icon" /></button></td></tr><tr>
                                            <td
                                                className="font-weight-bold">Mahin Tazuar Turza</td><td className="text-danger">mahintazuar678@gmail.com</td><td>2020-10-08</td><td className="text-success font-weight-bold">helps </td><td className="delete-button">
                                                <button className="bg-danger "><img src="https://i.imgur.com/YwDre2M.png" alt="delete-icon" /></button></td></tr><tr><td className="font-weight-bold">Mahin Tazuar Turza</td><td className="text-danger">mahintazuar678@gmail.com</td><td>2020-10-24</td><td className="text-success font-weight-bold">food Charity</td><td className="delete-button"><button className="bg-danger "><img src="https://i.imgur.com/YwDre2M.png" alt="delete-icon" /></button></td></tr><tr><td className="font-weight-bold">Mahin Tazuar Turza</td><td className="text-danger">mahintazuar678@gmail.com</td><td>2020-10-15</td><td className="text-success font-weight-bold">animal Shelter</td><td className="delete-button"><button className="bg-danger "><img src="https://i.imgur.com/YwDre2M.png" alt="delete-icon" /></button></td></tr></tbody></table></div>
                        </div>
                    </div></div>
            </DashboardMain>

        </div >
    );
};

export default DashboardServiceList;