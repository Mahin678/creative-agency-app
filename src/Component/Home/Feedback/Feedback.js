import React, { useEffect, useState } from 'react';
import './Feedback.css'

const Feedback = () => {
    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getAllReviews')
            .then(res => res.json())
            .then(result => setFeedback(result))
    }, [])
    return (
        <section className="review my-5 py-3" >
            <div className="review-wrapper container">
                <h2 className="text-center my-3 mb-5"> Clients <span >  Feedback</span></h2>
                <div className="row" >
                    {
                        feedback.map(info => <div key={info.name} className="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <div className="card card-service-custom   p-4" >
                                <div className="client-img d-flex " >
                                    <img style={{ border: "1px solid white", borderRadius: "34px" }} src={info.photo} alt="review-img" />
                                    <div className="mt-4 font-weight-bold" >
                                        <a href="/"> <h4>{info.company}</h4></a>
                                    </div>
                                </div>
                                <div className="review-text">
                                    <p className="text-center" >{info.discretion}</p>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Feedback;