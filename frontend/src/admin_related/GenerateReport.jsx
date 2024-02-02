import { FaBug, FaTv } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdSearch, MdSettings, MdPeople } from "react-icons/md";
import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";
import { useState } from "react";

function GenerateReport() {
	const sidebar = [
		{
			title: "Dashboard",
			icons: <FaTv />,
		},
		{
			title: "Staff",
			icons: <MdPeople />,
		},
		{
			title: "Property",
			icons: <PiHouse />,
		},
		{
			title: "Requests",
			icons: <PiGitPullRequest />,
		},
		{
			title: "Departements",
			icons: <PiTree />,
		},
		{
			title: "Category",
			icons: <PiSquaresFourBold />,
		},
	];
	const rightbar = [
		{
			title: "You fixed a bug",
			icons: <FaBug />,
		},
		{
			title: "New user registered",
			icons: <IoPerson />,
		},
		{
			title: "You fixed a bug",
			icons: <FaBug />,
		},
		{
			title: "New user registered",
			icons: <IoPerson />,
		},
	];
	const stat = [
		{
			title: "Total property",
			value: 400,
		},
		{
			title: "Available property",
			value: 300,
		},

		{
			title: "Assigned property",
			value: 350,
		},
	];
	const reqOverview = [
		{
			title: "Total pending request",
			value: 350,
		},
		{
			title: "Resolved request",
			value: 350,
		},
	];

	const [selectedItem, setSelectedItem] = useState(null);
	const options = ["Option 1", "Option 2", "Option 3"];
	const [selectedOption, setSelectedOption] = useState("");
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setDropdownOpen(false);
	};

	return (
		<div className='report'>
			<div className='side-bar'>
				<span style={{ paddingLeft: "2em" }}> logo </span>
				<h3 style={{ paddingLeft: "2em" }}> Chain of trust</h3>
				{sidebar.map((item, index) => (
					<div
						key={index}
						className={`parent ${selectedItem === index ? "selected" : ""}`}
						onClick={() => setSelectedItem(index)}
					>
						<span style={{ fontSize: "22px" }}> {item.icons}</span>
						<p style={{ paddingLeft: "10px" }}>{item.title} </p>
					</div>
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
				</div>
			</div>
		</div>
	);
}

export default GenerateReport;
