import React, { Component } from 'react';
import Table from './table.js'
let index;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      Address: '',
      Gender: '',
      Name: '',
      data: []

    }

  }
  
  handleSave = (e) => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const Address = this.state.Address;
    const gender = this.state.Gender;
    const Action = <input type='button' value='edit' onClick={this.handleEdit} />
    const obj = { 'fname': firstName, 'lname': lastName, 'address': Address, 'Gender': gender, 'action': Action };
    const updateObj=[...this.state.data];
    updateObj[index-1]=obj;
    //this.state.data[index-1]=obj;
    this.setState({...this.state,data:  updateObj});
  console.log(this.state.data[index-1])
  console.log()
    this.setState({
      firstName: "",
      lastName: "",
      Address: "",
      Gender: ""
     
    });
  }

  handleEdit = (e) => {
    e.preventDefault();

    index = e.target.parentNode.parentNode.rowIndex
    this.setState({ firstName: this.state.data[index - 1].name });
    this.setState({ lastName: this.state.data[index - 1].lname });
    this.setState({ Address: this.state.data[index - 1].address });
    this.setState({ Gender: this.state.data[index - 1].Gender });

    return index;
  }
  handleradioChange = (e) => {
    this.setState({

      Gender: e.target.value
    });
  };
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const Address = this.state.Address;
    const gender = this.state.Gender;
    const Action = <input type='button' value='edit' onClick={this.handleEdit} />
    const obj = { 'fname': firstName, 'lname': lastName, 'address': Address, 'Gender': gender, 'action': Action };
    this.setState({ data: [...this.state.data,obj]});
    this.setState({
      firstName: "",
      lastName: "",
      Address: "",
      Gender: ""
    });
  }
  handleReset=(e)=> {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      Address: "",
      Gender: ""
    });
  }

  render() {
    const { Gender } = this.state;
    return (
      <div className="App">
        <form   >
          <div>
            <label htmlFor="fname">First Name </label>
            <input
              name="firstName"
              placeholder="First Name"
              id="fname"
              value={this.state.firstName}
              onChange={this.change} />
          </div>
          <div>
            <label htmlFor="lname"> Last Name</label> <input
              name="lastName"
              id="lname"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.change} />
          </div>
          <div>
            <label htmlFor="address">Address</label>  <textarea
              name="Address"
              id="address"
              placeholder="address"
              value={this.state.Address}
              onChange={this.change} />
          </div>
          <div>
            <label >Gender:</label>
            <input type="radio" value="Male" id="male"  name="gender" checked={Gender === 'Male'} onChange={this.handleradioChange} />
            <label for="gender">Male</label>
            <input type="radio" value="Female" id="female" name="gender" checked={Gender === 'Female'} onChange={this.handleradioChange} />
            <label for="gender">Female</label>
          </div>
          <div>
            <input type="submit" onClick={this.handleSubmit} />
            <input type="reset" onClick={this.handleReset} />
            <input type="button" value="save" onClick={this.handleSave} />
          </div>
        </form>
        <p>
          <Table tableData={this.state.data} />
        </p>
      </div>

    );
  }
}

export default Form;