import React from 'react';
import './DashboardMain.css'
import Sidebar from '../SideBar/SideBar'
import { useContext } from 'react';
import { UserContext } from '../../../App';
const DashboardMain = (props) => {
    const { user } = useContext(UserContext)
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

    return (
        <section className="dashboard container-fluid "  >
            <div className="dashboard-wrapper  " >
                < div className="row" >
                    <div className="col-sm-12 col-md-12 col-lg-2">
                        <div className="dashboard-sidebar p-3 " >
                            <Sidebar />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-10 pr-0">
                        <div className="dashboard-wrapper  " >
                            <div className="d-flex  justify-content-between p-5"  >
                                <h4 className="main-title" >{props.title}</h4>
                                <h4 className="name-title" >{loggedInUser.name || loggedUser.name}</h4>
                            </div>
                            {props.children}
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default DashboardMain;