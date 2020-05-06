import React from 'react';
import { render } from 'react-dom';

class Userlist extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor: ", this);
        this.state = {
            isLoaded: false
        };
    }
componentDidMount() {
console.log("componentDidMount:",this);
    setTimeout(()=>{
        this.setState({
            isLoaded:true,
        })

    },2000);
}


compoentDidUpdate(){
    console.log("componentDidUpdate: ",this);

}
compoentWillUpdate(){
    console.log("compoentWillUpdate: ",this);
    
}
compoentWillMount(){
    console.log("compoentWillMount: ",this);
    
}
render(){
    const {isLoaded} = this.state;
    return isLoaded ?
    <ul>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
        <li>test4</li>
    </ul>
    :
    <div>로딩중</div>

    }
}
export default Userlist ;