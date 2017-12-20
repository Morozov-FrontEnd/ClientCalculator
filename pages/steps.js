import React from "react";
import ReactDom from "react-dom";

import MainApp from "../components/MainApp";

const Steps = (props) => (
    <MainApp url={props.url} steps={true}/>
)

export default Steps;