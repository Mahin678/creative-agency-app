import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import './Services.css'
const servicesInfo = [
    { id: 1, name: "Web & Mobile design", details: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.", img: "https://i.imgur.com/Ydax7jf.png" },
    { id: 2, name: "Graphic design", details: "Amazing flyers, social media posts and brand representations that would make your brand stand out.", img: "https://i.imgur.com/q2RbS9l.png" },
    { id: 3, name: "Web development", details: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.", img: "https://i.imgur.com/L015MM8.png" },
];
const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/showService')
            .then(res => res.json())
            .then(result => setService(result))
    }, [])
    return (
        <section className="services py-5" >
            <div className="services-wrapper container text-center" >
                <h2 className=" py-5  my-5" >Provide awesome <span>services</span></h2>
                <div className="row " >


                    {
                        service.length ?
                            service.map(info =>
                                <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                                    <Link to={`/order/${info._id}`} >
                                        <div className="card card-service-custom" >
                                            <div className="card-body ">
                                                <img src={`data:image/png;base64,${info.image.img}`} alt="service-img" />
                                                <h4>{info.service}</h4>
                                                <p>{info.description}</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                            : <Spinner />
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;