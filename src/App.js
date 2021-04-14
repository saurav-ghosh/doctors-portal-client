import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
import AllPatients from "./Components/Dashboard/AllPatients/AllPatients";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                    <PrivateRoute path="/patients">
                        <AllPatients></AllPatients>
                    </PrivateRoute>
                    <PrivateRoute path="/addDoctor">
                        <AddDoctor></AddDoctor>
                    </PrivateRoute>
                    <PrivateRoute path="/appointment">
                        <Appointment></Appointment>
                    </PrivateRoute>
                </Switch>
            </Router>
        </userContext.Provider>
    );
}

export default App;
