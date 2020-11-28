import React from 'react';
import './HeaderContent.css';
const HeaderContent = () => {
	return (
		<section className="header-content">
			<div className="header-content-wrapper container p-5">
				<div className="row mt-3 ">
					<div className="col-sm-12 col-md-12 col-lg-5 align-self-center p-1 pt-5 ">
						<h1 className="display-4 font-weight-bold">
							Let’s Grow Your Brand To The Next Level
						</h1>
						<p className="my-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Purus commodo ipsum duis laoreet maecenas. Feugiat{' '}
						</p>
						<a
							href="#hire"
							className="p-3 px-5 text-decoration-none text-light btn-custom mt-4 px-4"
						>
							Hire us
						</a>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-7">
						<div className="content-img">
							<img
								className="img-fluid"
								src="https://i.imgur.com/tWpNkbs.png"
								alt="content-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeaderContent;
