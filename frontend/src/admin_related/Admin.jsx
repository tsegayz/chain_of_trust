import { FaBug, FaTv } from "react-icons/fa";
import { IoAnalytics, IoPerson } from "react-icons/io5";
import { MdSearch, MdPeople, MdSettings } from "react-icons/md";
import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";
import { useState } from "react";

function Admin() {
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
	return (
		<div className='admin-dashboard'>
			<div className='side-bar'>
				<span style={{paddingLeft:'2em'}}> logo </span>
				<h3 style={{paddingLeft:'2em'}}> Chain of trust</h3>
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
					<div className='categ'>
						<h3> Quick stat</h3>
						<div className='each'>
							{stat.map((item) => (
								<div className='listed'>
									<p> {item.title}</p>
									<h2>{item.value} </h2>
								</div>
							))}
						</div>
					</div>
					<div className='categ'>
						<h3> Request overview</h3>
						<div className='each'>
							{reqOverview.map((item) => (
								<div className='listed'>
									<p> {item.title}</p>
									<h2>{item.value} </h2>
								</div>
							))}
						</div>
					</div>
					<a className='categ' href="/report">
						<h3> Report</h3>
						<div
							className='each'
							style={{
								boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
								width: "7em",
								marginLeft: "65px",
								display: "flex",
								alignItems: "center",
								fontSize: "18px",
								flexDirection: "column",
								padding: "1em 0.5em",
								borderRadius: "15px",
							}}
						>
							Generate report <IoAnalytics style={{ fontSize: "2em" }} />
						</div>
					</a>
				</div>
			</div>
			<div className='right-bar'>
				<h3 className='title'>Recent Transaction</h3>
				<div className='child'>
					{rightbar.map((item) => (
						<div className='context'>
							<span
								style={{
									fontSize: "16px",
									backgroundColor: "rgb(219, 233, 238)",
									borderRadius: "50%",
									padding: "7px 10px",
								}}
							>
								{item.icons}
							</span>
							<p style={{ paddingLeft: "10px" }}>{item.title} </p>
						</div>
					))}
				</div>
				<div className='maintenance'>
					<h3> Maintenance </h3>
					<p class='pending'>
						Pending <span>123,459</span>
					</p>
					<p class='resolved'>
						Resolved <span>123,459</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Admin;
