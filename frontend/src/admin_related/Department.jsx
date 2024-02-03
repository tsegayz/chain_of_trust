import { FaTv, FaUpload } from "react-icons/fa";
import { MdSearch, MdPeople, MdSettings, MdAdd, MdEdit } from "react-icons/md";
import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";

import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function Department() {
	const sidebar = [
		{
			title: "Dashboard",
			icons: <FaTv />,
			link: "/admin",
		},
		{
			title: "Staff",
			icons: <MdPeople />,
			link: "/staff",
		},
		{
			title: "Property",
			icons: <PiHouse />,
			link: "/property",
		},
		{
			title: "Requests",
			icons: <PiGitPullRequest />,
			link: "/request",
		},
		{
			title: "Departements",
			icons: <PiTree />,
			link: "/dep",
		},
		{
			title: "Category",
			icons: <PiSquaresFourBold />,
			link: "/category",
		},
	];
	const [selectedItem, setSelectedItem] = useState(4);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
	const [isModalOpenThree, setIsModalOpenThree] = useState(false);

	return (
		<div className='department'>
			<div className='side-bar'>
				<span style={{ paddingLeft: "2em" }}> logo </span>
				<h3 style={{ paddingLeft: "2em" }}> Chain of trust</h3>
				{sidebar.map((item, index) => (
					<Link
						to={item.link}
						key={index}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						<div
							className={`parent ${selectedItem === index ? "selected" : ""}`}
							onClick={() => setSelectedItem(index)}
						>
							<span style={{ fontSize: "22px" }}> {item.icons}</span>
							<p style={{ paddingLeft: "10px" }}>{item.title} </p>
						</div>
					</Link>
				))}
			</div>
			<div className='content'>
				<div className='frame'>
					<div className='search'>
						<MdSearch
							style={{ fontSize: "25px", color: "rgb(168, 168, 168)" }}
						/>
						<input placeholder='Search' /> <span> ⌘/ </span>
					</div>
					<span>
						<MdSettings style={{ fontSize: "40px", marginRight: "20px" }} />{" "}
						<h2> Organization Name </h2>
					</span>
				</div>
				<div className='body'>
					<seciton className='one'>
						<h3> All </h3>
						<div>
							<button onClick={() => setIsModalOpen(true)}>
								<MdAdd style={{ color: "white" }} />
							</button>
							{isModalOpen && (
								<div className='modal-overlay'>
									<Modal
										isOpen={isModalOpen}
										onRequestClose={() => setIsModalOpen(false)}
										className='modal-content custom-property'
										overlayClassName='modal-overlay'
									>
										<h2> Register Department </h2>
										<div className='inputs'>
											<h4>Department Name</h4>
											<input placeholder='Enter ID' />
											<h4>Description</h4>
											<input placeholder='Enter Property Name' />
											<div className='buttons'>
												<button
													onClick={() => setIsModalOpen(false)}
													style={{
														color: "white",
														backgroundColor: "black",
														marginRight: "16em",
													}}
												>
													Cancel
												</button>
												<Link to='/property'>
													<button
														style={{
															color: "black",
															backgroundColor: "white",
															marginRight: "16em",
														}}
													>
														Save
													</button>
												</Link>
											</div>
										</div>
									</Modal>
								</div>
							)}
						</div>
					</seciton>
					<section className='two'>
						<ul>
							<li>Department ID</li>
							<li>Property name</li>
							<li>No. of staff</li>
							<li>Description</li>
							<li>Action</li>
							<div>
								<button onClick={() => setIsModalOpenTwo(true)}>
									<MdEdit style={{ color: "white" }} />
								</button>
								{isModalOpenTwo && (
									<div className='modal-overlay'>
										<Modal
											isOpen={isModalOpenTwo}
											onRequestClose={() => setIsModalOpenTwo(false)}
											className='modal-content custom-property'
											overlayClassName='modal-overlay'
										>
											<h2> Edit Department </h2>
											<div className='inputs'>
												<h4>Department Name</h4>
												<input placeholder='Enter ID' />
												<h4>Description</h4>
												<input placeholder='Enter Property Name' />
												<div className='buttons'>
													<button
														onClick={() => setIsModalOpenTwo(false)}
														style={{
															color: "white",
															backgroundColor: "black",
															marginRight: "16em",
														}}
													>
														Cancel
													</button>
													<Link to='/dep'>
														<button
															style={{
																color: "black",
																backgroundColor: "white",
																marginRight: "16em",
															}}
														>
															Save
														</button>
													</Link>
												</div>
											</div>
										</Modal>
									</div>
								)}
							</div>
							<div>
								<button
									style={{ color: "black" }}
									onClick={() => setIsModalOpenThree(true)}
								>
									Delete
								</button>
								{isModalOpenThree && (
									<div className='modal-overlay'>
										<Modal

											isOpen={isModalOpenThree}
											onRequestClose={() => setIsModalOpenThree(false)}
											className='modal-content custom-property delete'
											overlayClassName='modal-overlay'
										>
											<p style={{ fontSize: "20px", margin: "0" }}>
												Are you sure you want to delete
											</p>
											<h2> Department-001? </h2>
											<div className='buttons' style={{ marginRight: "-15em" }}>
												<button
													onClick={() => setIsModalOpenThree(false)}
													style={{
														color: "white",
														backgroundColor: "black",
														marginRight: "16em",
													}}
												>
													yes
												</button>
												<Link to='/dep'>
													<button
														style={{
															color: "black",
															backgroundColor: "white",
															marginRight: "16em",
														}}
													>
														No
													</button>
												</Link>
											</div>
										</Modal>
									</div>
								)}
							</div>
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Department;
