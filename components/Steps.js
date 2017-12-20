const Steps = (props) => {
    switch(props.id) {
        case '1':
            return(
            <div>
                Step1
            </div>
            )
        break;      
        case '2':
            return(
                <div>
                    Step2
                </div>
            )
        break;
      }

}


// Step1.getInitialProps = () => {
//   const res = await fetch('')
//   const json = await res.json()
//   return { states: json.stargazers_count }
// }

export default Steps;
