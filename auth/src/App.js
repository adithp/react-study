import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Places from "./components/screens/Places";
import Place from "./components/screens/Place";
import NotFound from "./components/screens/NotFound";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";

function App(props) {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" exact component={Places} />
                    <Route path="/auth/login/" exact component={Login} />
                    <Route path="/auth/create/" exact component={Signup} />
                    <Route path="/place/:id" component={Place} />
                    <Route component={NotFound} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
