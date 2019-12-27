import React, { Component } from 'react';
import './App.css';
// Import bootstrap CDN link
import 'bootstrap/dist/css/bootstrap.min.css';
// Import styling components from reactstrap
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
// Import the else if function from taxTable.js
import { taxTable } from './TaxTable';
// Import helmet
import {Helmet } from 'react-helmet';
// Created the app with props
class App extends Component {
  constructor(props) {
    super(props);
    // State items are set to taxEarning and taxablePay to allow userinput collection and to
    // calculate the tax on the user input
    this.state = { taxEarning: '', taxablePay: '' };
  }
  // Target the input and save the value to taxEarning
  handleInput = event => {
    this.setState({ taxEarning: event.target.value });
  };
  // When the user clicks on Submit, the input value is set to taxEarning
  handleSubmit = () => {
    const taxEarning = Math.floor(this.state.taxEarning);
    // Set the function to a const to allow the else if to determine the income after tax
    const taxablePay = taxTable(taxEarning);
    // Set the outcome of the value to state
    this.setState({ taxablePay });
  };

  render() {
    return (
      <div className="App container">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
        </Helmet>
        <h1 className="jumbotron jumbotron-fluid">Welcome to Tax Calc</h1>
        <h3 className="alert alert-secondary" role="alert">
          Use the below form to calculate your monthly salary after TAX
        </h3>
        <p className="instructions">Please enter your monthly salary into the form below</p>
        <br />
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">R</InputGroupAddon>
          {/* Input for the user to enter their monthly salary, the input value is 
          set in state to taxEarning */}
          <Input
            placeholder="Amount"
            type="number"
            value={this.state.taxEarning}
            onChange={this.handleInput}
          />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
        </InputGroup>
        <br />
        {/* Submit button calls the function to calculate the income after tax from 
        the TaxTable.js file */}
        <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
        <br />
        <br />
        {/* Render the value to the user from state */}
        <p className="instructions">After TAX amount: R{this.state.taxablePay}</p>
        <br />
        <br />
        <br />
        <footer className="alert alert-secondary">
          App created &amp; maintained by &copy;
            <a href="https://github.com/hazelbag" target="_blank" rel="noopener noreferrer">
            hazelbag</a>. All rights reserved.
        </footer>
        <br />
      </div>
    )
  };
}

export default App;
