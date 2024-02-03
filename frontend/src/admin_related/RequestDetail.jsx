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

function RequestDetail() {
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
	const [selectedItem, setSelectedItem] = useState(3);
	const [isModalOpen, setIsModalOpen] = useState(false);

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
		<div className='request-detail'>
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
					<span style={{ marginLeft: "70em" }}>
						<MdSettings style={{ fontSize: "40px", marginRight: "20px" }} />
						<h2> Organization Name </h2>
					</span>
				</div>
				<div className='body'>
					<seciton className='one'>
						<div className='col'>
							<h3> Req-001</h3>
							<ul>
								<li>Request ID: </li>
								<li>Request type: </li>
								<li>Asset ID: </li>
								<li>Employee ID: </li>
								<li>Status: </li>
								<li>Date submitted: </li>
								<li>Date resolved: </li>
								<li>Action: </li>
							</ul>
						</div>
						<div className='col2'>
							<h3> Description</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
								corporis exercitationem ipsa incidunt! Quos, nam! Voluptas,
								aliquam saepe tempora assumenda placeat incidunt fugiat ex fuga?
								Illo nemo neque sed aperiam?
							</p>
						</div>
					</seciton>
					<section className='two'>
						<h3> Attached files</h3>
						<p> file1.pdf</p>
						<p> file2.pdf</p>
					</section>
					<button onClick={() => setIsModalOpen(true)}>Verify</button>
					{isModalOpen && (
						<div className='modal-overlay'>
							<Modal
								isOpen={isModalOpen}
								onRequestClose={() => setIsModalOpen(false)}
								className='modal-content custom-property'
								overlayClassName='modal-overlay'
							>
								<h2> Verify request </h2>
                                <div className='inputs'> 
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
									<h3> Response </h3>
									<textarea
										type='text'
										placeholder='Enter the reason'
										style={{
											marginLeft: "35px",
											width: "35em",
											height: "7em",
											outline: "none",
										}}
									/>
								</div>
								<div className='inputs'>
									<div className='col'>
										<div
											className='input-container'
											style={{
												display: "flex",
												marginTop: "30px",
												marginLeft: "30px",
											}}
										>
											<p> Attach File: </p>
											<div
												className='cont'
												style={{
													marginLeft: "20px",
													backgroundColor: "rgb(255, 255, 255)",
													borderRadius: "10px",
													boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.322)",
												}}
											>
												<input
													type='file'
													onChange={handleFileChange}
													style={{
														display: "none",
													}}
													ref={fileInputRef}
												/>
												<div
													style={{
														display: "flex",
														alignItems: "center",
                                                        marginLeft:'20px'
													}}
												>
													<FaUpload style={{ marginRight: "5px", color:"gray" }} />
													<input
														type='text'
														placeholder='Choose File'
														onClick={() => fileInputRef.current.click()}
														readOnly
                                                        style={{
                                                            color:'gray',
                                                            outline:'none',
                                                            border:'none',
                                                            width:'8em',
                                                            marginTop:'16px',
                                                            padding:0
                                                        }}
													/>
												</div>
											</div>
										</div>
									</div>
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
												placeholder='Verify'
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
												<ul className='options-list' style={{ top: "36.3em" }}>
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
			</div>
		</div>
	);
}

export default RequestDetail;
