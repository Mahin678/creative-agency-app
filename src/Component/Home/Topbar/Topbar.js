import React from 'react';
import { NavLink } from 'react-router-dom';
import './Topbar.css';
const Topbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
			<img
				className="ml-5"
				src="https://i.imgur.com/SsnK22Z.png"
				alt="topbar-logo"
			/>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							activeClassName="nav-style"
							className="nav-link a mr-3"
							to="/home"
						>
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<a
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="nav-link a mr-3"
							href="#work"
						>
							Our Portfolio
						</a>
					</li>
					<li className="nav-item">
						<a
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="nav-link a mr-3"
							href="#hire"
						>
							Service
						</a>
					</li>
					<li className="nav-item">
						<a
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="nav-link a mr-3"
							href="#contact"
						>
							Contact us
						</a>
					</li>
					<NavLink to="/login">
						<button
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="btn-custom"
						>
							login
						</button>
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};

export default Topbar;
