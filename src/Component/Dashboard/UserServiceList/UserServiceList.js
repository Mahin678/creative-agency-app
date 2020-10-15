import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import Spinner from '../../Spinner/Spinner';
import DashboardMain from '../DashboardMain/DashboardMain';
import UserServiceData from '../UserServiceData/UserServiceData';
// const userOrder = [
//     { name: "Web & Mobile design", details: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.", img: "https://i.imgur.com/Ydax7jf.png" },
//     { name: "Web & Mobile design", details: "Amazing flyers, social media posts and brand representations that would make your brand stand out.", img: "https://i.imgur.com/q2RbS9l.png" },
//     { name: "Web & Mobile design", details: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.", img: "https://i.imgur.com/L015MM8.png" },

// ]
const UserServiceList = () => {
    const { user } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = user;
    const [service, setService] = useState([])
    const parseJwt = (token) => {
        try {
            return (JSON.parse(atob(token.split('.')[1])))
        } catch (e) {
            return (false);
        }
    };
    const data = sessionStorage.getItem('token')
    const loggedUser = parseJwt(data)
    const email = (loggedInUser.email || loggedUser.email);

    useEffect(() => {
        fetch('http://localhost:5000/showAllUserOrder?email=' + email)
            .then(res => res.json())
            .then(result => setService(result))
    }, [email])
    return (
        <DashboardMain title={"user service list"} >
            <div className="dashboard-body p-4"  >
                <div className="review  " >
                    <div className="review-wrapper container">
                        <div className="row mx-auto " >
                            {
                                service.length ? (service.map(info => <UserServiceData info={info} />)) :
                                    <h1 className="text-danger" >NO Course Found </h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </DashboardMain>
    );
};

export default UserServiceList;