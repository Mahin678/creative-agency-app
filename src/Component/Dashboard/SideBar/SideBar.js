import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, faServer, faShoppingCart, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import { useContext } from 'react';
import { UserContext } from '../../../App';
const SideBard = () => {
    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    return (
        <div className="sidebar ">
            <div className="sidebar-logo p-2" >
                <Link to="/home" >
                    <img height="0px" className="img-fluid" src="https://i.imgur.com/SsnK22Z.png" alt="" />
                </Link>
            </div>
            <div className=" p-1 h-75">
                <NavLink activeStyle={{
                    fontWeight: "700",
                    color: "darkgrey"
                }} to="/adminServiceList" >
                    <h6> <FontAwesomeIcon icon={faServer} /> Services list</h6>
                </NavLink>
                <NavLink activeStyle={{
                    fontWeight: "700",
                    color: "darkgrey"
                }} to="/addService" >
                    <h6> <FontAwesomeIcon icon={faPlus} /> Add service</h6>
                </NavLink>
                <NavLink activeStyle={{
                    fontWeight: "700",
                    color: "darkgrey"
                }} to="/MakeAdmin" >
                    <h6><FontAwesomeIcon icon={faUserPlus} /> Make admin</h6>
                </NavLink>
                <NavLink activeStyle={{
                    fontWeight: "700",
                    color: "darkgrey"
                }} to="/order" >
                    <h6> <FontAwesomeIcon icon={faShoppingCart} />  order</h6>
                </NavLink>
                <NavLink activeStyle={{
                    fontWeight: "700",
                    color: "darkgrey"
                }} to="/review" >
                    <h6>  <FontAwesomeIcon icon={faCommentAlt} /> review</h6>
                </NavLink>
                <NavLink activeStyle={{
                    fontWeight: "700",
                    color: "darkgrey"
                }} to="/serviceList" >
                    <h6> <FontAwesomeIcon icon={faServer} /> Service List</h6>
                </NavLink>

            </div>

        </div>
    );
};

export default SideBard;