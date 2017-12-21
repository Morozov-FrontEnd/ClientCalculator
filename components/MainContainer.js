import Link from 'next/link'

import Steps from './Steps';

// let inputVal;

const addState = (props) =>{
    console.log('Add', props);
    // props.onAddState(props.step);
};

//ToDo: make normal content grab 

const PostLink = (props) => (
  <li onClick={addState} title={props.title}>
    <Link href={`/steps?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const MainContainer = (props) => {
  
  if(props.steps){
    return(
      <div>
        Steps
        <PostLink title="1"/>
        <PostLink title="2"/>
        <PostLink title="3"/>
        <h1>{props.url.query.title}</h1>
          <Steps id={props.url.query.title}/>
        {props.children}
      </div>
    )
  }
  else{
    return(
      <div>
        MainContainer
      </div>
    )
  }
}

// MainContainer.getInitialProps = () => {
//   const res = await fetch('')
//   const json = await res.json()
//   return { states: json.stargazers_count }
// }

export default MainContainer;
