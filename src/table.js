import React, { Component } from 'react';

class Table extends Component {
  render() {
    const table = this.props.tableData.map((item) => {

      return (
        <tr   >
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.address}</td>
          <td>{item.Gender}</td>
          <td >{item.action}</td>
        </tr>)

    }, this
    );
    return (
      <table cellpadding="10" cellSpacing="10">
        <tr><th>First Name</th><th>Last Name</th><th>Address</th><th>Gender</th><th>Action</th></tr>
        {table}
      </table>

    );
  }
}
  export default Table;