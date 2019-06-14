import React, {Component} from 'react'
import {Navigation} from "../Navigation/Navigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Homepage} from "../../Layout/Homepage";
import {NotFound} from "../../Layout/NotFound";
import {Footer} from "../Footer/Footer";
import {AddQuestion} from "../../Layout/AddQuestion";
import {StandardQuiz} from "../../Layout/Quiz/StandardQuiz";
import ScrollToTop from "../Scroll/ScrollToTop";

class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                <div className="wrapper">
                    <header>
                        <Navigation/>
                    </header>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/pytanie" component={AddQuestion}/>
                        <Route exact path="/powtorzenie/matematyka" component={StandardQuiz}/>
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer/>
                </div>

                </ScrollToTop>
            </Router>
        )
    }
}

export default App