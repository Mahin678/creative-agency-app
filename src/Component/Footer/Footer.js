import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footer-wrapper p-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="footer-content container p-5" >
                            <h2 >
                                Let us handle your project
                                , professionally.
                            </h2>
                            <p>
                                With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="footer-form pt-5">
                            <form>
                                <div className="form-group ">
                                    <input type="email" className="form-control p-4" placeholder="write your Email address" />

                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control p-4" placeholder="write  Your Company / your name " />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control p-4" placeholder="Your message" ></textarea>
                                </div>

                                <button type="submit" className="btn btn-custom">Send</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <h6 className="m-auto text-center m-5 p-5"  >
                copy  &copy; right orange labs 2020
                </h6>
        </footer>
    );
};

export default Footer;