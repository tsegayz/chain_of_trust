import React from "react";
import { FaTv, FaUpload } from "react-icons/fa";
import { MdSearch, MdPeople, MdSettings } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function PropertyDetail() {
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
			link: "/Dep",
		},
		{
			title: "Category",
			icons: <PiSquaresFourBold />,
			link: "/Category",
		},
	];
	const [selectedItem, setSelectedItem] = useState(2);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
	const [isModalOpenThree, setIsModalOpenThree] = useState(false);

	const fileInputRef = useRef(null);

	const options = ["Option 1", "Option 2", "Option 3"];
	const [selectedOption, setSelectedOption] = useState("");
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setDropdownOpen(false);
	};
	return (
		<div className='property-detail'>
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
						<MdSettings style={{ fontSize: "40px", marginRight: "20px" }} />
						<h2> Organization Name </h2>
					</span>
				</div>
				<div className='body'>
					<section className='one'>
						<div className='col'>
							<h4> Property-001 </h4>
							<p> Name: </p>
							<p> Category: </p>
							<p> Status: </p>
						</div>
						<button
							style={{ color: "black" }}
							onClick={() => setIsModalOpen(true)}
						>
							Assign
						</button>
						{isModalOpen && (
							<div className='modal-overlay'>
								<Modal
									isOpen={isModalOpen}
									onRequestClose={() => setIsModalOpen(false)}
									className='modal-content custom-property'
									overlayClassName='modal-overlay'
								>
									<h2> Assign Property </h2>
									<div className='inputs'>
										<div className='row'>
											<div
												className='input-container'
												style={{
													width: "12em",
													marginRight: "2em",
													marginLeft: "30px",
													backgroundColor: "white",
													padding: "0px 10px",
													borderRadius: "8px",
													boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.322)",
												}}
											>
												<input
													type='text'
													placeholder='Select departement'
													value={selectedOption}
													readOnly
													onClick={() => setDropdownOpen(!isDropdownOpen)}
												/>
												<div
													className='dropdown-arrow'
													onClick={() => setDropdownOpen(!isDropdownOpen)}
												>
													<IoIosArrowDown />
												</div>
												{isDropdownOpen && (
													<ul
														className='options-list'
														style={{ top: "21.5em" }}
													>
														{options.map((option) => (
															<li
																key={option}
																onClick={() => handleOptionClick(option)}
															>
																{option}
															</li>
														))}
													</ul>
												)}
											</div>
											<div className='col'>
												<div className='input-container'>
													<p> Attach File: </p>
													<div className='cont'>
														<input
															type='file'
															onChange={handleFileChange}
															style={{ display: "none" }}
															ref={fileInputRef}
														/>
														<div
															style={{
																display: "flex",
																alignItems: "center",
															}}
														>
															<FaUpload style={{ marginRight: "5px" }} />
															<input
																type='text'
																placeholder='Choose File'
																onClick={() => fileInputRef.current.click()}
																readOnly
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className='area'
											style={{
												marginLeft: "20px",
												textAlign: "start",
												fontSize: "18px",
												fontWeight: "100",
											}}
										>
											<h3> Reason </h3>
											<textarea
												type='text'
												placeholder='Enter the reason'
												style={{
													marginLeft: "35px",
													width: "25em",
													height: "7em",
													outline: "none",
												}}
											/>
										</div>
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
						<button
							style={{ color: "black" }}
							onClick={() => setIsModalOpenTwo(true)}
						>
							Delete
						</button>
						{isModalOpenTwo && (
							<div className='modal-overlay'>
								<Modal
									isOpen={isModalOpenTwo}
									onRequestClose={() => setIsModalOpenTwo(false)}
									className='modal-content custom-property delete'
									overlayClassName='modal-overlay'
								>
									<p style={{ fontSize: "20px", margin: "0" }}>
										Are you sure you want to delete
									</p>
									<h2> Property-001? </h2>
									<div className='buttons' style={{ marginRight: "-15em" }}>
										<button
											onClick={() => setIsModalOpenTwo(false)}
											style={{
												color: "white",
												backgroundColor: "black",
												marginRight: "16em",
											}}
										>
											yes
										</button>
										<Link to='/property'>
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
						<button
							onClick={() => setIsModalOpenThree(true)}
							style={{ backgroundColor: "#011b33", color: "white" }}
						>
							Edit
						</button>
						{isModalOpenThree && (
							<div className='modal-overlay'>
								<Modal
									isOpen={isModalOpenThree}
									onRequestClose={() => setIsModalOpenThree(false)}
									className='modal-content custom-property'
									overlayClassName='modal-overlay'
								>
									<h2> Edit Property </h2>
									<div className='inputs'>
										<h4>Property ID</h4>
										<input placeholder='Enter ID' />
										<h4>Property Name</h4>
										<input placeholder='Enter Property Name' />
										<div className='row'>
											<div className='col'>
												<div className='input-container'>
													<p> Attach File: </p>
													<div className='cont'>
														<input
															type='file'
															onChange={handleFileChange}
															style={{ display: "none" }}
															ref={fileInputRef}
														/>
														<div
															style={{
																display: "flex",
																alignItems: "center",
															}}
														>
															<FaUpload style={{ marginRight: "5px" }} />
															<input
																type='text'
																placeholder='Choose File'
																onClick={() => fileInputRef.current.click()}
																readOnly
															/>
														</div>
													</div>
												</div>
											</div>
											<div
												className='input-container'
												style={{
													width: "12em",
													marginLeft: "30px",
													backgroundColor: "white",
													padding: "0px 10px",
													borderRadius: "8px",
													boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.322)",
												}}
											>
												<input
													type='text'
													placeholder='Select category'
													value={selectedOption}
													readOnly
													onClick={() => setDropdownOpen(!isDropdownOpen)}
												/>
												<div
													className='dropdown-arrow'
													onClick={() => setDropdownOpen(!isDropdownOpen)}
												>
													<IoIosArrowDown />
												</div>
												{isDropdownOpen && (
													<ul
														className='options-list'
														style={{ top: "33.1em" }}
													>
														{options.map((option) => (
															<li
																key={option}
																onClick={() => handleOptionClick(option)}
															>
																{option}
															</li>
														))}
													</ul>
												)}
											</div>
										</div>
										<div className='buttons'>
											<button
												onClick={() => setIsModalOpenThree(false)}
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
					</section>
					<section className='two'>
						<div className='col'>
							<h4> Current Owner </h4>
							<p> Employee-001: </p>
							<p> Departement: </p>
							<p> Role: </p>
						</div>
						<button>Detail</button>
					</section>
					<section className='three'>
						<h3> Previous Owners </h3>
						<ul>
							<li>Employee ID</li>
							<li>Employee email</li>
							<li>Departement</li>
							<li>Role</li>
							<li>Action</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
}

export default PropertyDetail;
