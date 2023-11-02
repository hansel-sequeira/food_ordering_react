import React from "react";
import ProfileClass from "./ProfileClass";

class AboutClass extends React.Component {

    constructor(props) {
        console.log("Parent constructor");
        super(props);
        this.state = {
            count1: 0,
            count2: -1
        }
    }

    componentDidMount() {
        console.log("Parent component did mount");
    }

    render() {
        console.log("Parent render");

        return (
            <div>
                <h2>{this.props.name}</h2>
                <ProfileClass job={'SWE'} />
            </div>
        )
    }
}

export default AboutClass;