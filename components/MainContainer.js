import Link from 'next/link'

import Steps from './Steps';

// let inputVal;

const addState = (props) =>{
    console.log('Add', props);
    // props.onAddState(props.step);
};

//ToDo: make normal content grab 

const PostLink = (props) => (
  <li onClick={addState} step={props.step} id={props.step}>
    <Link href={`/?step=${props.step}`}>
      <a>{props.step}</a>
    </Link>
  </li>
)

const MainContainer = (props) => {
    return(
      <div>
        Steps
        <PostLink step="1"/>
        <PostLink step="2"/>
        <PostLink step="3"/>
        <h1>{props.url.query.step}</h1>
          <Steps id={props.url.query.step}/>
        {props.children}
      </div>
    )
}

// MainContainer.getInitialProps = () => {
//   const res = await fetch('')
//   const json = await res.json()
//   return { states: json.stargazers_count }
// }

export default MainContainer;
