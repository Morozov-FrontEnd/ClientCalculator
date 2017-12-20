import React from "react";
import ReactDom from "react-dom";

import MainApp from "../components/MainApp";

<<<<<<< HEAD
const App = () => (
    <MainApp>
        <div>
            Test2
        </div>
    </MainApp>
=======
const App = (props) => (
    <MainApp url={props.url}/>
>>>>>>> 528bf6b... Steps structure
)

export default App;