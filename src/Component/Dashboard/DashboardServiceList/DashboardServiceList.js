import React, { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../../Spinner/Spinner';
import DashboardMain from '../DashboardMain/DashboardMain';
import './DashboardServiceList.css';
const DashboardServiceList = () => {
	const [selectedService, setSelectedService] = useState({});
	const [info, setInfo] = useState([]);
	useEffect(() => {
		fetch('https://infinite-headland-81835.herokuapp.com/showAllOrder')
			.then((res) => res.json())
			.then((result) => setInfo(result));
	}, []);

	const handleServiceStatus = (info) => {
		const data = info.target.value;
		const allData = JSON.parse(data);
		const { id, status } = allData;
		fetch(
			`https://infinite-headland-81835.herokuapp.com/UpdateService/${id}`,
			{
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ status: status }),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	return (
		<div>
			<DashboardMain title={' Service List'}>
				<div className="dashboard-body">
					<div className="dashboard-body-wrapper p-4">
						<div className="dashboard-service-list">
							<div
								style={{ overflow: 'scroll' }}
								className="dashboard-service-list-wrapper p-4"
							>
								<table className="table ">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Email Id</th>
											<th scope="col">service</th>
											<th scope="col">project description</th>
											<th scope="col">status</th>
										</tr>
									</thead>
									<tbody>
										{info.length ? (
											info.map((data) => (
												<>
													{console.log(data.status)}
													<tr>
														<td className="font-weight-bold">
															{data.userName}
														</td>
														<td className="text-danger">
															{data.userEmail}
														</td>
														<td>
															<small>{data.date}</small>{' '}
														</td>
														<td className="">
															<p className="font-weight-bold mb-0">
																{data.serviceName}
															</p>
															<small className="d-block">
																{data.description.substring(
																	0,
																	40
																) + '...'}
															</small>
														</td>
														<td className="delete-button">
															<select
																onChange={handleServiceStatus}
																className="form-control bg-dark 
                                                            text-light"
															>
																{data.status == 'Pending' ? (
																	<>
																		<option
																			value={JSON.stringify({
																				id: data._id,
																				status: 'Pending',
																			})}
																		>
																			Pending
																		</option>
																		<option
																			value={JSON.stringify({
																				id: data._id,
																				status: 'Done',
																			})}
																			className=""
																		>
																			Done
																		</option>{' '}
																	</>
																) : (
																	<>
																		<option
																			value={JSON.stringify({
																				id: data._id,
																				status: 'Done',
																			})}
																			className=""
																		>
																			Done
																		</option>
																		<option
																			value={JSON.stringify({
																				id: data._id,
																				status: 'Pending',
																			})}
																		>
																			Pending
																		</option>
																	</>
																)}
															</select>
														</td>
													</tr>
												</>
											))
										) : (
											<h1 className="text-danger">
												NO Course Found{' '}
												<small>
													or wait some moment database working{' '}
												</small>{' '}
											</h1>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</DashboardMain>
		</div>
	);
};

export default DashboardServiceList;
