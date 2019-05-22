import React, {Component} from 'react'
import {Navigation} from "../Navigation/Navigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Homepage} from "../../Layout/Homepage";
import {Subject} from "../../Layout/Subject";
import {NotFound} from "../../Layout/NotFound";
import {Footer} from "../Footer/Footer";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <header>
                        <Navigation/>
                    </header>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/przedmioty" component={Subject}/>
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App