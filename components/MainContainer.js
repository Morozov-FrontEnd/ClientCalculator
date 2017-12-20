import Link from 'next/link'

// let inputVal;

const addState = (props) =>{
      console.log('Add', props);
      // props.onAddState(props.step);
  };
  
  const PostLink = (props) => (
    <li onClick={addState} title={props.title}>
      <Link href={`/steps/step${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )

const MainContainer = (props) => (
  <div>
    MainContainer
    <PostLink title="1"/>
    <PostLink title="2"/>
    <PostLink title="3"/>
    <h1>{
      (props.url.query.title)
      ? props.url.query.title
      : '1'
    }</h1>

    {props.children}
  </div>
)

// MainContainer.getInitialProps = () => {
//   const res = await fetch('')
//   const json = await res.json()
//   return { states: json.stargazers_count }
// }

export default MainContainer;
