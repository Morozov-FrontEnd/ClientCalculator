import { connect } from "react-redux";

let inputVal;

const addState = (props) =>{
    console.log('Add', inputVal.value);
    props.onAddState(inputVal.value);
    inputVal.value = '';
};

const MyModule = (props) => (
  <div>
    {console.log(props)}
    <input type="text" ref={(input)=>{ inputVal = input }}/>
    <button onClick={()=>addState(props)}>
        Add
    </button>

    {props.wrapt.map((item, index)=>{
        return (<div key={index}>{item}</div>)
    }
    )}
  </div>
)



export default connect(
    state=>({
        wrapt: state.wrapt
    }),
    dispatch=>({
        onAddState: (stateName)=>{
            dispatch({type: 'TEST_STATE', payload: stateName })
        }
    })
)(MyModule);