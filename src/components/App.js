import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./routes/Home";
import Alternative from "./routes/Alternative";
import Top from "./routes/Top";
import LicenseCheck from "./routes/LicenseCheck";
import Login from "./routes/Login";
import Register from "./routes/Register";
import AddProprietary from "./routes/AddProprietary";
import AddSearch from "./routes/AddSearch";

import "bulma/css/bulma.css";

const App = () => {
	return (
		<Router>
			<div
				style={{
					display: "flex",
					minHeight: "100vh",
					flexDirection: "column"
				}}
			>
				<div style={{ flex: 1 }}>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/alternative" component={Alternative} />
					<Route path="/top" component={Top} />
					<Route path="/license" component={LicenseCheck} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/addproprietary" component={AddProprietary} />
					<Route path="/addsearch" component={AddSearch} />
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
