import React, { Component } from "react";

export default class EditPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.userEdit.id,
      name: this.props.userEdit.name,
      phone: this.props.userEdit.phone,
      permission: this.props.userEdit.permission,
    };
  }
  onChangeEdit = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  onClickButton = () => {
    this.props.isChangePopup();

    let userEdit = {};
    userEdit.id = this.state.id;
    userEdit.name = this.state.name;
    userEdit.phone = this.state.phone;
    userEdit.permission = this.state.permission;

    this.props.getValueEdit(userEdit);
  };
  render() {
    return (
      <div className="popup-edit">
        <div className="popup-edit__content">
          <input
            className="popup-edit__input"
            name="name"
            defaultValue={this.props.userEdit.name}
            type="text"
            onChange={(event) => this.onChangeEdit(event)}
          />
          <input
            className="popup-edit__input"
            name="phone"
            type="text"
            defaultValue={this.props.userEdit.phone}
            onChange={(event) => this.onChangeEdit(event)}
          />
          <select
            className="popup-edit__input"
            defaultValue={this.props.userEdit.permission}
            name="permission"
            onChange={(event) => this.onChangeEdit(event)}
          >
            <option value>Chọn chức vụ</option>
            <option value="1">Giám đốc</option>
            <option value="2">Quản lý</option>
            <option value="3">Nhân viên</option>
          </select>
          <button
            className="btn btn--small btn--secondary"
            onClick={() => this.onClickButton()}
          >
            Lưu
          </button>
        </div>
      </div>
    );
  }
}
