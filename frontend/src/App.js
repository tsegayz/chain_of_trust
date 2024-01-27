import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import NavBar from "./Navbar";
import About from "./About";
import Services from "./Services";

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
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
