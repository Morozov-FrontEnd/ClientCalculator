import Header from './Header'
import Footer from './Footer'

import MainContainer from './MainContainer';


const MainApp = (props) => [
    <Header/>,
    <MainContainer url={props.url}/>,
    <Footer/>
]

export default MainApp