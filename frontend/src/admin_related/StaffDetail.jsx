import { FaTv, FaUpload } from "react-icons/fa";
import { MdSearch, MdPeople, MdSettings, MdAdd } from "react-icons/md";
import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function StaffDetail() {
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
	const [selectedItem, setSelectedItem] = useState(1);
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
		<div className='staff-detail'>
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
					<section className='one'>
						<div className='col'>
							<h4> Employee-001 </h4>
							<p> Departement: </p>
							<p> Role: </p>
							<p> Asset: </p>
						</div>
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
									<h2> Edit User </h2>
									<div className='inputs'>
										<h4>Employee ID</h4>
										<input placeholder='Enter ID' />
										<h4>Email</h4>
										<input type='email' placeholder='Enter Property Name' />
										<div className='row'>
											<div
												className='input-container'
												style={{
													width: "12em",
													marginLeft: "20px",
													backgroundColor: "white",
													padding: "0px 10px",
													borderRadius: "8px",
													boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.322)",
												}}
											>
												<input
													type='text'
													placeholder='Select Departement'
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
														style={{ top: "33.7em" }}
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
											<div
												className='input-container'
												style={{
													width: "12em",
													marginLeft: "80px",
													backgroundColor: "white",
													padding: "0px 10px",
													borderRadius: "8px",
													boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.322)",
												}}
											>
												<input
													type='text'
													placeholder='Select roles'
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
														style={{ top: "33.7em" }}
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
									<h2> Employee-001? </h2>
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
					</section>
					<section className='two'>
						<h3> Owned Asset </h3>
						<ul>
							<li>Asset ID: </li>
							<li>Asset type:</li>
							<li>Asset name:</li>
							<li>Date:</li>
							<li>Action:</li>
						</ul>
					</section>
					<section className='three'>
						<h3> Requests </h3>
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

export default StaffDetail;
