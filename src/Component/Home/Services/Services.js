import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Spinner from '../../Spinner/Spinner';
import './Services.css'
const Services = () => {
    const [serviceInfo, setServiceInfo] = useState([])
    const { user } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = user;
    const [states, setState] = useState(false);
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
            .then(result => {
                if (result.length == 0) {
                    setState(false)
                }
                else {
                    setState(true)
                }
            })
    }, [email])

    useEffect(() => {
        fetch('http://localhost:5000/showService')
            .then(res => res.json())
            .then(result => setServiceInfo(result))
    }, [])
    return (
        <section className="services py-5" >
            <div className="services-wrapper container text-center" >
                <h2 className=" py-5  my-5" >Provide awesome <span>services</span></h2>
                <div className="row " >


                    {
                        states || !states ?
                            serviceInfo.length ?
                                serviceInfo.map(info =>
                                    <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                                        {
                                            states && <Link to={`/adminServiceList`} >
                                                <div className="card card-service-custom" >
                                                    <div className="card-body ">
                                                        <img src={`data:image/png;base64,${info.image.img}`} alt="service-img" />
                                                        <h4>{info.service}</h4>
                                                        <p>{info.description}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        }
                                        {
                                            !states && <Link to={`/order/:${info._id}`} >
                                                <div className="card card-service-custom" >
                                                    <div className="card-body ">
                                                        <img src={`data:image/png;base64,${info.image.img}`} alt="service-img" />
                                                        <h4>{info.service}</h4>
                                                        <p>{info.description}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        }
                                    </div>
                                )

                                : <Spinner />

                            : <p>hello</p>
                    }



                </div>
            </div>
        </section >
    );
};

export default Services;