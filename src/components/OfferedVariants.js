import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as formActions from "../actions/formActions";


class OfferedVariants extends React.Component {  
  constructor(props) {
    super(props);     
  }

  componentWillReceiveProps (nextProps) {
    
    if (this.props.input !== nextProps.input && nextProps.input.userInput !== "") {
      this.props.formActions.getFilteredCountries(nextProps.input.userInput);
      // вызвать запрос...
    }    
  }
  
  render() {
    let { userInput } = this.props.input;   
    let { countries } = this.props.table;  
    let result = [];  
    const loading = (userInput.length && countries.length) ? "offeredCountries" : "offeredCountriesDisabled";    
    countries.filter( (item, index) => (result.push(<tr key={index}><th>{item}</th></tr> )));

    return (
      <table className={loading}>
        <tbody >
          {result}                  
        </tbody>
      </table>
    );
  }
}
function mapStateToProps(state) {
  return {
    table: state.table,
    input: state.input
  }
}
function mapDispatchToProps(dispatch) {
  return {
  formActions: bindActionCreators(formActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferedVariants);
