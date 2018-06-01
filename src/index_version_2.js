import "./style.css";
// import Backround from "./forest.jpg";
import React from "react";
import ReactDOM from "react-dom";

import Ajax from "axios";

// class Spin extends React.Component {
//   render() {
//     return (<img className="loading" src={this.props.src} />);    
//   }
// }

const Spin = (props) => {
  const loading = props.spin ? "loading" : "loadingDisabled";
  
  return (<img className={loading} src="http://www.vitorazevedo.net/external_files/loading_small.png" />);
}

class AutoUpdatedForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      inputValue: "",
      isLoading: false,
      filteredCountries: []
    };   
  }

  handleInputChange(inputValue) { 
    if (inputValue !== "") {             
      this.setState({inputValue, isLoading: true });
      
      Ajax.get("https://restcountries.eu/rest/v2/name/" + inputValue + "?fields=name")

        .then( res => {
          const filteredCountries = res.data.map( item => (item.name));
          this.setState({filteredCountries, isLoading: false});
        })       
        .catch( error => (
          console.log(error),
          this.setState(prevState => (
            {
              filteredCountries: prevState.filteredCountries,
               isLoading:false
            }
          )
        )
      ));
     } else {
       this.setState({inputValue,filteredCountries: [], isLoading: false });
     }
  }
  render() {   
    // const input = this.state.inputValue;
    // const spinnerIsHere = this.state.isLoading;
    
    const {
      isLoading, 
      inputValue, 
      filteredCountries
    } = this.state;
    
    return (       
      <div>  
        <UserInput 
          value={inputValue}
          onChange={this.handleInputChange} 
          load={isLoading}
        />
        <OfferedVariants             
          countries={filteredCountries}            
        />
      </div>     
    )    
  }
}

class UserInput extends React.Component {
  constructor(props) {
    super(props); 
    this.handleChange = this.handleChange.bind(this);   
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    const {load, value} = this.props;
    return (
      <div>
        <input
          className="inputCountry" 
          type="text"
          value={value}
          placeholder="Введите название страны"
          onChange={this.handleChange}
          readOnly={load} 
        />  
        <Spin spin={load} /> 
      </div> 
    );
  }
}

class OfferedVariants extends React.Component {  
  render() {     
    let result = [];  
    const loading = this.props.countries.length ? "offeredCountries" : "offeredCountriesDisabled";    
    this.props.countries.filter( (item, index) => (result.push(<tr key={index}><th>{item}</th></tr> )));

    return (
      <table className={loading}>
        <tbody>
          {result}                  
        </tbody>
      </table>
    );
  }
}


ReactDOM.render(
  <AutoUpdatedForm />,
  document.getElementById("root")
);

var user = {};

Object.defineProperty(user, "name", {
  value: "Вася",
  configurable: true,
  writable: true,
  enumerable: true
});
console.log( user.name );
//свойство-константа
Object.defineProperty(user, "name", {
  value: "Петя",
  writable: false,
  configurable: false
});
console.log(user.name);
user.name = "Маша";