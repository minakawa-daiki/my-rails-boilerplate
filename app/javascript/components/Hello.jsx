import React from "react"
import PropTypes from "prop-types"
class Hello extends React.Component {
  render () {
    return (
      <React.Fragment>
        Title: {this.props.title}
      </React.Fragment>
    );
  }
}

Hello.propTypes = {
  title: PropTypes.string
};
export default Hello
