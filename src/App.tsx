import { BrowserRouter as Router, Link } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"

import "./style/style.css"

function App() {
 return (
	 <Router>
		 <div className="containe">
			<div className="tophome">
				<div className="logotipo">
					<h2><Link to="/" className="home">QUIMICA</Link></h2>		
				</div>
			</div>

	 	<AppRoutes />
		 </div>
	 </Router>
 )
}

export default App