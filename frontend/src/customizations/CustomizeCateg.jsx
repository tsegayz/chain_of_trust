import React from "react";

function CustomizeCateg() {
	return (
		<div className='category'>
			<h2> Customize Category </h2>
			<div className='inputs'>
				<h4>Category</h4>
				<input placeholder='Enter the category' />
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
				<a href='/dashboard'> Next </a>
			</div>
		</div>
	);
}

export default CustomizeCateg;
