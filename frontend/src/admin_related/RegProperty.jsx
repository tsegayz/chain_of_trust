import { useState, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaUpload } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function RegProperty() {
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
		<div className='reg-property'>
			<h2> Register Property </h2>
			<div className='inputs'>
				<h4>Property ID</h4>
				<input placeholder='Enter ID' />
				<h4>Property Name</h4>
				<input placeholder='Enter Property Name' />
				<div className='row'>
					<div className='col'>
						<div className='input-container'>
							<p> Attack File: </p>
							<div className='cont'>
								<input
									type='file'
									onChange={handleFileChange}
									style={{ display: "none" }}
									ref={fileInputRef}
								/>
								<div style={{ display: "flex", alignItems: "center" }}>
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
						<div className='input-container'>
							<p> Attack Image: </p>
							<div className='cont'>
								<input
									type='file'
									onChange={handleFileChange}
									style={{ display: "none" }}
									ref={fileInputRef}
								/>
								<div style={{ display: "flex", alignItems: "center" }}>
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
                            padding:'0px 10px',
                            borderRadius:'8px',
                            boxShadow:' 0px 2px 4px rgba(0, 0, 0, 0.322)'
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
				<div className='buttons'>
					<button
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
		</div>
	);
}

export default RegProperty;
