import { FaTv } from "react-icons/fa";
import { MdSearch, MdPeople, MdSettings, MdAdd } from "react-icons/md";
import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function Staff() {
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

	const options = ["Option 1", "Option 2", "Option 3"];
	const [selectedOption, setSelectedOption] = useState("");
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setDropdownOpen(false);
	};
	return (
		<div className='staff'>
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
						<a href='/staffDet'> All </a>
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
										<h2> Register User </h2>
										<div className='inputs'>
											<h4>Employee ID</h4>
											<input placeholder='Enter ID' />
											<h4>Employee Email</h4>
											<input placeholder='Enter Property Name' />
											<div className='row'>
												<div
													className='input-container'
													style={{
														width: "12em",
														marginLeft: "10px",
														backgroundColor: "white",
														padding: "0px 10px",
														borderRadius: "8px",
														boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.322)",
													}}
												>
													<input
														type='text'
														placeholder='Select role'
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
														<ul className='options-list'>
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
														marginLeft: "5em",
														backgroundColor: "white",
														padding: "0px 10px",
														borderRadius: "8px",
														boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.322)",
													}}
												>
													<input
														type='text'
														placeholder='Select department'
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
														<ul className='options-list'>
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
							<li>Employee ID</li>
							<li>Employee Email</li>
							<li>Department</li>
							<li>Roles</li>
							<li>Action</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Staff;
