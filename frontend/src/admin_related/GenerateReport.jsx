import { FaTv } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdSearch, MdSettings, MdPeople } from "react-icons/md";
import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function GenerateReport() {
	const sidebar = [
		{
			title: "Dashboard",
			icons: <FaTv />,
			link: '/admin'
		},
		{
			title: "Staff",
			icons: <MdPeople />,
			link: '/staff'
		},
		{
			title: "Property",
			icons: <PiHouse />,
			link: '/property'
		},
		{
			title: "Requests",
			icons: <PiGitPullRequest />,
			link: '/request'
		},
		{
			title: "Departements",
			icons: <PiTree />,
			link: '/Dep'
		},
		{
			title: "Category",
			icons: <PiSquaresFourBold />,
			link: '/Category'
		},
	];

	const [selectedItem, setSelectedItem] = useState(null);
	const [selectedOne, setSelectedOne] = useState([]);
	const options = ["Option 1", "Option 2", "Option 3"];
	const [selectedOption, setSelectedOption] = useState("");
	const [selectedDate, setSelectedDate] = useState(null);
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setDropdownOpen(false);
	};

	const handleDateChange = (date) => {
		setSelectedDate(date);
		setDropdownOpen(false);
	};
	const handleReport = () => {};
	const handleItemClick = (item) => {
		setSelectedOne([...selectedOne, item]);
	};

	const handleClose = (index) => {
		const updatedItems = [...selectedOne];
		updatedItems.splice(index, 1);
		setSelectedOne(updatedItems);
	};
	return (
		<div className='report'>
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
					<div className='row1'>
						<div className='input-container'>
							<input
								type='text'
								placeholder='Current month summary'
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
										<li key={option} onClick={() => handleOptionClick(option)}>
											{option}
										</li>
									))}
								</ul>
							)}
						</div>
						<div className='input-container'>
							<input
								type='text'
								placeholder='Departement summary'
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
										<li key={option} onClick={() => handleOptionClick(option)}>
											{option}
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
					<div className='row2'>
						<div className='date-container'>
							<h4> Date info</h4>
							<DatePicker
								className='date-picker'
								selected={selectedDate}
								onChange={handleDateChange}
								placeholderText='February 7, 2026'
								dateFormat='MMMM d, yyyy'
							/>
						</div>
						<button onSubmit={handleReport()}>Generate</button>
					</div>
					{selectedOption && selectedDate ? (
						<div className='row3'>
							<div className='section'>
								<ul>
									<li>
										<div
											className='each'
											onClick={() => handleItemClick("HR-report - Feb 2019-03")}
										>
											{selectedOption && <p>{selectedOption}-</p>}
											{selectedDate && <p>{selectedDate.toDateString()}</p>}
										</div>
										<h3> X </h3>
									</li>
								</ul>
							</div>
							<div className='section2'>
								<ul>
									<li>Asset ID</li>
									<li>Asset type</li>
									<li>Description</li>
									<li>Quantity</li>
								</ul>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default GenerateReport;
