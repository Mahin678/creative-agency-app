import React from 'react';
const brandLogo = [
    { img: "https://i.imgur.com/qC0WxE9.png" },
    { img: "https://i.imgur.com/EGFDbhN.png" },
    { img: "https://i.imgur.com/N61IkFB.png" },
    { img: "https://i.imgur.com/gpuS0ol.png" },
    { img: "https://i.imgur.com/rhVdHqW.png" },

]
const Brand = () => {
    const brandStyle = {
        height: " 44px",
    }
    return (
        <div className="brand-logo my-3 py-3  mx-auto container"  >
            <div className="row  mx-auto my-3 py-3  text-center ">
                {brandLogo.map(data => <div className="col-lg-2 my-3 py-3  mx-auto"><img style={brandStyle} className="img-fluid" src={data.img} alt="img" /></div>
                )}
            </div>
        </div>
    );
};

export default Brand;