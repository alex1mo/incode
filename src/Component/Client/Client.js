import React, { Component } from "react";

export default class Client extends Component {
  render() {
    let { client } = this.props;
    return (
      <div className="Client">
        <h1>{`${client.general.firstName} ${client.general.lastName}`}</h1>
        <h2>{client.job.title}</h2>
        <ul type="none">
          <li>phone: {client.contact.phone}</li>
          <li>email: {client.contact.email}</li>
          <br />
          <li>
            adress:{" "}
            {`${client.address.street}, ${client.address.city} ${
              client.address.zipCode
            }, ${client.address.country}`}
          </li>
          <br />
          <li>company: {client.job.company}</li>
        </ul>
      </div>
    );
  }
}
