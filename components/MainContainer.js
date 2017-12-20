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

const MainContainer = (props) => (
  <div>
    {console.log(props.url.query)}
    MainContainer
    <PostLink title="1"/>
    <PostLink title="2"/>
    <PostLink title="3"/>
    <h1></h1>

  </div>
)


// MainContainer.getInitialProps = () => {
//   const res = await fetch('')
//   const json = await res.json()
//   return { states: json.stargazers_count }
// }

MainContainer.defaultProps = {
   test: '1',
};

export default MainContainer;