import React from 'react';
import './App.css';
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"
import  {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar"

function App() {
  return (
    <React.Fragment>
    <Navbar></Navbar>  {/* Since the navbar is present in every page so we put this around Switch. */}
    <Switch>
      <Route exact path="/" component = {Home}></Route>
      <Route exact path="/rooms/" component = {Rooms}></Route>
      <Route exact path="/rooms/:slug" component = {SingleRoom}></Route>  
      <Route component={Error}></Route>  
    </Switch>
    </React.Fragment>
  )
}

export default App;
