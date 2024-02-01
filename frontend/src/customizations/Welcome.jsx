import logo from "./home2.jpeg";
import { IoPersonOutline } from "react-icons/io5";
import { PiSquaresFourBold } from "react-icons/pi";

function Welcome() {
	return (
		<div className='welcome'>
			<img src={logo} alt='ima' />
			<ul>
				<li>
					<h2> WELCOME </h2>
				</li>
				<li>
					<PiSquaresFourBold /> Take control of your property
				</li>
				<li>Group and categorize property</li>
				<li>Organize properties by Depatment</li>
				<li>
					<IoPersonOutline /> Pre-defined roles and make it easy
				</li>
			</ul>
			<a href='/customdep'>
				<button>Continue</button>
			</a>
		</div>
	);
}

export default Welcome;
