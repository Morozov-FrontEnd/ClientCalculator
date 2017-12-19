import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MyModule from "../components/MyModule";

import reducer from "../reducers" 

const store = createStore(reducer);

const App = () => (
    
    <Provider store={store}>
        <MyModule>
            <div>
                Test2
            </div>
        </MyModule>
    </Provider>
)

export default App;