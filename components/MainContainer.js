import Link from 'next/link'

let inputVal;

const PostLink = (props) => (
  <li>
    <Link href={`/?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)


const addState = (props) =>{
    console.log('Add', inputVal.value);
    props.onAddState(inputVal.value);
    inputVal.value = '';
};

MainContainer.getInitialProps = () => {
  // const res = await fetch('')
  // const json = await res.json()
  // return { states: json.stargazers_count }
  return { test: '1' }
}


const MainContainer = (props) => (
  <div>
    MainContainer
    <PostLink title="1"/>
    <PostLink title="2"/>
    <PostLink title="3"/>
<<<<<<< HEAD
    {console.log(props)}
    <h1></h1>
=======
    <h1>{
      (props.url.query.title)
      ? props.url.query.title
      : '1'
    }</h1>
>>>>>>> 528bf6b... Steps structure

  </div>
)

export default MainContainer;