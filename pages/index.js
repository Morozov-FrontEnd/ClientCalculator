import React from "react";
import ReactDom from "react-dom";
import style from './style.css';

import MainApp from "../components/MainApp";
import GlobalStyles from "../components/GlobalStyles"

const App = (props) => [
    <GlobalStyles/>,
    <MainApp url={props.url}/>,
    <style jsx>{style}</style>
]

export default App;