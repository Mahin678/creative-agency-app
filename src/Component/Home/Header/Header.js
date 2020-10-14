import React from 'react';
import Brand from '../Brand/Brand';
import Feedback from '../Feedback/Feedback';
import HeaderContent from '../HeaderContent/HeaderContent';
import Services from '../Services/Services';
import Topbar from '../Topbar/Topbar';
import Work from '../Work/Work';
import './Header.css'
const Header = () => {
    return (
        <header className="header" >
            <div className="header-wrapper ">
                <Topbar />
                <HeaderContent />
            </div>
            <Brand />
            <Services />
            <Work />
            <Feedback />
        </header>
    );
};

export default Header;