import React, { Component } from "react";
import { connect } from "react-redux";
import Spin from "./Spin";
import { bindActionCreators } from "redux";
import * as formActions from "../actions/formActions";

class UserInput extends Component {
  constructor(props) {
    super(props); 
    this.handleChange = this.handleChange.bind(this);   
  }
  handleChange(e) {
    this.props.formActions.setInputView(e.target.value);
  }
  render() {
    const { isLoading } = this.props.load; 
    const { userInput } = this.props.field;
   
    return (
      <div>
     
        <input
          className="inputCountry" 
          type="text"
          value={userInput}
          placeholder="Введите название страны"
          onChange={this.handleChange}
          readOnly={isLoading} 
        />  
        <Spin 
         spin={isLoading}
         /> 
      </div> 
    );
  }
}
function mapStateToProps (state) {
  return {
    field: state.input,
    load: state.table
  }
}

function mapDispatchToProps(dispatch) {
  return {
  formActions: bindActionCreators(formActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInput);