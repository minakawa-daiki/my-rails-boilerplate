import * as React from "react";
import axios from "axios";

interface HelloProps {
  hello: { title: string };
}

interface HelloState {
  name: string;
}

class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/home")
      .then(results => {
        const data = results.data;
        console.log(data);
      })
      .catch(e => {
        console.log("ERROR!! occurred in Backend.", e);
      });
  }

  render() {
    return <>Title: {this.props.hello.title}</>;
  }
}

export default Hello;
