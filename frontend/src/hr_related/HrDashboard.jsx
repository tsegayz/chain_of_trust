import { FaBug, FaStar, FaTv } from "react-icons/fa";
import { IoPerson, IoPersonCircle } from "react-icons/io5";
import { MdSearch, MdPeople } from "react-icons/md";
import { PiCallBellFill, PiHouse } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiTachometer } from "react-icons/bi";

import image from "../admin.png";
function HrDashboard() {
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
			icons: <PiCallBellFill />,
			link: "/request",
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

	const [selectedItem, setSelectedItem] = useState(0);
	return (
		<div className='hr-dashboard'>
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
						<IoPersonCircle style={{ fontSize: "40px", marginRight: "20px" }} />
						<h2> User 009 </h2>
					</span>
				</div>
				<div className='body'>
					<section className='one'>
						<div className='row1'>
							<h2>
								50
								<span
									style={{
										display: "flex",
										alignItems: "center",
										fontSize: "20px",
										fontWeight: "100",
										width: "9em",
									}}
								>
									<FaStar style={{ marginRight: "10px", fontSize: "40px" }} />{" "}
									Approved requests
								</span>
							</h2>
							<img src={image} alt='admin' />
						</div>
						<div className='row2'>
							<h2> Review Details</h2>
							<div className='item'>
								<h1>
									350
									<span
										style={{
											display: "flex",
											alignItems: "center",
											fontSize: "20px",
											fontWeight: "100",
											width: "9em",
										}}
									>
										Staff members
									</span>{" "}
								</h1>
								<BiTachometer
									style={{ marginLeft: "30px", fontSize: "100px" }}
								/>
							</div>
						</div>
					</section>
					<section className='two'>
						<h3> Activities </h3>
						<ul
							style={{
								display: "flex",
								flexDirection: "column",
								borderBottom: "none",
							}}
						>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						</ul>
					</section>
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
			</div>
		</div>
	);
}

export default HrDashboard;
