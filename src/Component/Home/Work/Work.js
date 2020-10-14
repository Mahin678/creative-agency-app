import React from 'react';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import './Work.css'
const Work = () => {
    return (
        <section className="work  py-5 my-5" >
            <h1 className="text-center text-light py-5 my-5" >Here are some of <span>our works</span></h1>
            <div className="work-wrapper ">
                <CarouselSlider />
            </div>
        </section>
    );
};

export default Work;