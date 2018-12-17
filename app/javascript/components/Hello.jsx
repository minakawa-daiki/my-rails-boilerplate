import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Hello extends React.Component {

  componentDidMount() {
    axios
        .get('http://localhost:3000/api/home')
        .then(results => {
          const data = results.data;
          console.log(data);
        }).catch((e) => {
          console.log('ERROR!! occurred in Backend.', e)
        });
  }

  render () {
    return (
      <React.Fragment>
        Title: {this.props.hello.title}
      </React.Fragment>
    );
  }
}

Hello.propTypes = {
  hello: PropTypes.object,
  title: PropTypes.string
};

export default Hello
