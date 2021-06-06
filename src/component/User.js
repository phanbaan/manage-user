import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: "true",
      id: "",
    };
  }
  isShowButton = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, phone, permission } = this.state;
    return (
      this.props.status && (
        <div className="content-user">
          <form className="form">
            <h3 className="title">Thêm mới 1 user</h3>

            <input
              type="text"
              className="form__input"
              placeholder="Nhập tên"
              name="name"
              onChange={(event) => this.onChange(event)}
            />
            <input
              type="tel"
              className="form__input"
              placeholder="Nhập số điện thoại"
              name="phone"
              onChange={(event) => this.onChange(event)}
            />
            <select
              className="form__input"
              onChange={(event) => this.onChange(event)}
              name="permission"
            >
              <option value="0"> Chọn chứ vụ</option>
              <option value="1"> Giám đốc</option>
              <option value="2"> Quản lý</option>
              <option value="3"> Nhân viên</option>
            </select>
            <input
              type="reset"
              className="btn"
              onClick={() => this.props.getNewUser(name, phone, permission)}
              value="Thêm mới"
            />
          </form>
        </div>
      )
    );
  }
}
