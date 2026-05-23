import {Component} from "react";

class ClassComponentsTutorials extends Component{
    // Constructor
    constructor(props){
        super(props);

        // State
        this.state={
            count:0
        }

        this.countPlusHandleClick=this.countPlusHandleClick.bind(this);
        this.countMinusHandleClick=this.countMinusHandleClick.bind(this);

    }

    // CDM

    // Event
    countPlusHandleClick(){
        this.setState({count:this.state.count+1});
    }

    countMinusHandleClick(){
        this.setState({count:this.state.count-1});
    }

    render(){
        return(
            <div>
            <h1>
                Class Component</h1>
                <p>Count: {this.state.count}</p>
                <button className="btn btn-primary" onClick={this.countPlusHandleClick}>+</button>
                <button className="btn btn-danger ms-2" onClick={this.countMinusHandleClick}>-</button>

                </div>
        );
    }
}

export default ClassComponentsTutorials;