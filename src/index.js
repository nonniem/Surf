import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "./main/App";

ReactDOM.render(<Router><Route><App/></Route></Router>, document.getElementById('root'));
