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
        case '3':
            return(
                <div>
                    Step3
                </div>
            )
        break;
        default:
            return(
                <div>
                    Nothing found
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
