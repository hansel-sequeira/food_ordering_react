import React from "react";

class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        console.log("Child 1 constructor: " + props.job);
        this.state = {
            login: 'Dummy'
        }
    }

    componentDidMount() {
        console.log(this.props.job + " did mount");
        // const response = await fetch("https://api.github.com/users/hansel-sequeira");
        // const json = await response.json();
        // console.log(json);
        // this.setState({
        //     login: json.login
        // })
        this.timer = setInterval(() => {
            console.log("Alert!")
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Child updated");
    }

    componentWillUnmount() {
        console.log("Child component has unmounted");
        clearInterval(this.timer);
    }

    render() {
        console.log("Child 1 render: " + this.props.job);
        return (
            <div>
                <h4>{this.props.job}</h4>
                <h4>Location: {this.state.login}</h4>
                <h4>sequeirahansel@gmail.com</h4>
            </div>
        )
    }
}

export default ProfileClass;