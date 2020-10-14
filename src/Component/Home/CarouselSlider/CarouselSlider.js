import React from "react";
import Carousel from "react-elastic-carousel";

const carouselInfo = [
    { img: "https://i.imgur.com/TLYB32Yl.png" },
    { img: "https://i.imgur.com/TejFQGb.png" },
    { img: "https://i.imgur.com/lbiyprM.png" },
    { img: "https://i.imgur.com/S2WXoCW.png" },
    { img: "https://i.imgur.com/OcNDMdW.png" },
    { img: "https://i.imgur.com/S2WXoCW.png" },
    { img: "https://i.imgur.com/OcNDMdW.png" },
]
const CarouselSlider = () => {
    const breakPoints = [
        { width: 480, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 991, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2.5 },
    ]
    const imgStyles = {
        height: '334.7px',
        borderRadius: '10px',
        margin: '15px'
    }
    return (
        <div className="App">
            <Carousel enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints}>
                {
                    carouselInfo.map(info => <div  >
                        <img style={imgStyles} src={info.img} alt="crsl-img" />
                    </div>)
                }

            </Carousel>
        </div >
    );
};

export default CarouselSlider;