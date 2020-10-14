import React, { useEffect, useState } from 'react';
import './Feedback.css'
const client = [
    {
        name: "Rayhan Islam", company: "CEO, Manpol", photo: "https://i.imgur.com/tlSGBSF.png", discretion
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"
    },
    {
        name: "Miriam Barron", company: "CEO, Manpol", photo: "https://i.imgur.com/N5ITv6p.png", discretion
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"
    },
    {
        name: "Bria Malone", company: "CEO, Manpol", photo: "https://i.imgur.com/180rfqX.png", discretion
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"
    }
]
const Feedback = () => {
    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getAllReviews')
            .then(res => res.json())
            .then(result => setFeedback(result))
    }, [])
    const newReview = [...client, ...feedback]
    return (
        <section className="review my-5 py-3" >
            <div className="review-wrapper container">
                <h2 className="text-center my-3 mb-5"> Clients <span >  Feedback</span></h2>
                <div className="row" >
                    {
                        newReview.map(info => <div key={info.name} className="col-sm-12 col-md-6 col-lg-4 mt-5">
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