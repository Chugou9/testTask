import React, { Component } from "react"

// export const Spin = (props) => {
//   const loading = props.spin ? "loading" : "loadingDisabled";
  
//   return (<img className={loading} src="http://www.vitorazevedo.net/external_files/loading_small.png" />);
// }
export default class Spin extends Component {
  render() {
    const loading = this.props.spin ? "loading" : "loadingDisabled";
    return (<img className={loading} src="http://www.vitorazevedo.net/external_files/loading_small.png" />);
  }
}