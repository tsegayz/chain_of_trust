import React from "react";

function CustomizeDep() {
	return (
		<div className='dep'>
			<h2> Customize Department </h2>
			<div className='inputs'>
				<h4>Department</h4>
				<input placeholder='Enter the Department' />
				<h4>Description</h4>
				<input placeholder='Enter thte Description' />
				<div className='buttons'>
					<button
						style={{
							color: "black",
							backgroundColor: "white",
							marginRight: "16em",
						}}
					>
						Cancel
					</button>
					<button>Save</button>
				</div>
				<a href='/customcateg'> Next </a>
			</div>
		</div>
	);
}

export default CustomizeDep;
