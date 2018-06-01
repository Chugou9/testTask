// import "./style.css";
// import Backround from "./forest.jpg";
import React from "react";
// import Ajax from "axios";
import UserInput from "../components/UserInput";
import OfferedVariants from "../components/OfferedVariants";

export default class AutoUpdatedForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.state = {
  //     inputValue: "",
  //     isLoading: false,
  //     filteredCountries: []
  //   };   
  // }

  // handleInputChange(inputValue) { 
  //   if (inputValue !== "") {             
  //     this.setState({inputValue, isLoading: true });
      
  //     Ajax.get("https://restcountries.eu/rest/v2/name/" + inputValue + "?fields=name")

  //       .then( res => {
  //         const filteredCountries = res.data.map( item => (item.name));
  //         this.setState({filteredCountries, isLoading: false});
  //       })       
  //       .catch( error => (
  //         console.log(error),
  //         this.setState(prevState => (
  //           {
  //             filteredCountries: prevState.filteredCountries,
  //              isLoading:false
  //           }
  //         )
  //       )
  //     ));
  //    } else {
  //      this.setState({inputValue,filteredCountries: [], isLoading: false });
  //    }
  // }
  render() {   
    // const input = this.state.inputValue;
    // const spinnerIsHere = this.state.isLoading;
    
    // const {
    //   isLoading, 
    //   inputValue, 
    //   filteredCountries
    // } = this.state;
    
    return (       
      <div>  
        <UserInput 
          // value={inputValue}
          // onChange={this.handleInputChange} 
          // load={isLoading}
        />
        <OfferedVariants             
          // countries={filteredCountries}            
        />
      </div>     
    )    
  }
}