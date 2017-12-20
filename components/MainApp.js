import Header from './Header'
import Footer from './Footer'

import MainContainer from './MainContainer';


const MainApp = (props) => [
    <Header/>,
    <MainContainer url={props.url} steps={props.steps}>
        {props.children}
    </MainContainer>,
    <Footer/>
]

export default MainApp