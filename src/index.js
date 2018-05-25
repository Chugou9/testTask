import "./style.css";
import Backround from "./forest.jpg";
import React from "react";
import ReactDOM from "react-dom";
import { userInfo } from "os";
import { SSL_OP_NO_TICKET } from "constants";
import Ajax from "axios";

// class Spin extends React.Component {
//   render() {
//     return (<img className="loading" src={this.props.src} />);    
//   }
// }

const Spin = () => <img className="loading" src="http://www.vitorazevedo.net/external_files/loading_small.png" />

class AutoUpdatedForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      inputValue: "",
      allCountries: [],
      isLoading: true,
      filteredCountries: []
    };
    
    this.filterInput = this.filterInput.bind(this);
    
  }

  componentDidMount () {    
    // https://restcountries.eu/rest/v2/name/rus?fields=name
    Ajax.get("https://restcountries.eu/rest/v2/all")
      .then( res => {
        const allCountries = res.data;
        this.setState({allCountries, isLoading: false});
      })       
      .catch( (error) => (console.log(error),
        alert(error)
      ));
  }

  handleInputChange(inputValue) {    
    let result = this.filterInput(inputValue);    
    this.setState({ filteredCountries: result, inputValue });    
  }

  filterInput(enter) { 
    if (enter !== ""){
      let result = this.state.allCountries;
      result = result.map( item => (item.name)).filter( i => (~i.toLowerCase().indexOf(enter.toLowerCase())) );   
      return result; 
    } else {
      return [];
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
    
    return (isLoading ? 
      <Spin /> : 
      <div>  
        <UserInput 
          value={inputValue}
          onChange={this.handleInputChange} 
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
    const value = this.props.value;
    return (
      <input 
        type="text"
        value={value}
        placeholder="Введите название страны"
        onChange={this.handleChange} />      
    );
  }
}

class OfferedVariants extends React.Component {  
  render() {     
    let result = [];      
    this.props.countries.filter( (item, index) => (result.push(<tr key={index}><th>{item}</th></tr> )));

    return (
      <table>
        <tbody>
          {result}                  
        </tbody>
      </table>
    );
  }
}


ReactDOM.render(
  <AutoUpdatedForm />,
  document.getElementById('root')
);

