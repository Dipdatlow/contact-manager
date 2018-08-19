import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.inputName = React.createRef();
    this.inputEmail = React.createRef();
    this.inputPhone = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contacts = {
      name: this.inputName.current.value,
      email: this.inputEmail.current.value,
      phone: this.inputPhone.current.value
    };
    console.log(contacts);
  };

  static defaultProps = {
    name: "Breno Magro",
    email: "brenin@magro.com",
    phone: "555-555-5555"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name..."
                  defaultValue={name}
                  ref={this.inputName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email..."
                  defaultValue={email}
                  ref={this.inputEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Phone..."
                  defaultValue={phone}
                  ref={this.inputPhone}
                />
              </div>
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
