import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./general/Home";
import NavBar from "./general/Navbar";
import About from "./general/About";
import Services from "./general/Services";
import Signin from "./general/Signin";
import Signup from "./general/Signup";
import Welcome from "./customizations/Welcome";
import CustomizeDep from "./customizations/CustomizeDep";
import CustomizeCateg from "./customizations/CustomizeCateg";
import GenerateReport from "./admin_related/GenerateReport";
import Admin from "./admin_related/Admin";
import Property from "./admin_related/Property";
import Staff from "./admin_related/Staff";
import RegProperty from "./admin_related/RegProperty";

function App() {
	return (
		<div className='App'>
			<Router>
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<NavBar />
							<Home />
						</Route>
						<Route exact path='/about'>
							<NavBar />
							<About />
						</Route>
						<Route exact path='/service'>
							<NavBar />
							<Services/>
						</Route>
						<Route exact path='/signin'>
							<Signin />
						</Route>
						<Route exact path='/signup'>
							<Signup />
						</Route>
						<Route exact path='/welcome'>
							<Welcome />
						</Route>
						<Route exact path='/customdep'>
							<CustomizeDep/>
						</Route>
						<Route exact path='/customcateg'>
							<CustomizeCateg />
						</Route>
						<Route exact path='/report'>
							<GenerateReport />
						</Route>
						<Route exact path='/admin'>
							<Admin />
						</Route>
						<Route exact path='/property'>
							<Property/>
						</Route>
						<Route exact path='/property'>
							<Staff/>
						</Route>
						<Route exact path='/addPpty'>
							<RegProperty/>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
