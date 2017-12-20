import React from "react";
import ReactDom from "react-dom";

import MainApp from "../components/MainApp";

const App = (props) => (
    <MainApp url={props.url}/>
)

export default App;