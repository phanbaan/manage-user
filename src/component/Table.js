import React, { Component } from "react";
import edit from "../assets/images/edit.png";
import trash from "../assets/images/trash.png";

export default class Table extends Component {
  onClickEdit = (item) => {
    this.props.isChangePopup();
    this.props.getEditUser(item);
  };
  renderData = () => {
    let permissions;
    return this.props.data.map((item, index) => {
      switch (Number.parseInt(item.permission)) {
        case 1:
          permissions = "Giám đốc";
          break;
        case 2:
          permissions = "Quản lý";
          break;
        case 3:
          permissions = "Nhân viên";
          break;
        default:
          break;
      }

      return (
        <tr key={item.id}>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{permissions}</td>
          <td>
            <img
              src={edit}
              onClick={() => this.onClickEdit(item)}
              alt="edit"
              className="btn-icon"
            />
            <img
              src={trash}
              alt="delete"
              className="btn-icon"
              onClick={() => this.props.getUserDelete(item.id)}
            />
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table>
        <thead>
          <tr border="1">
            <th> STT </th>
            <th> Họ Tên</th>
            <th> Số điện thoại</th>
            <th> Chức vụ</th>
            <th> Thao tác</th>
          </tr>
        </thead>
        <tbody>{this.renderData()}</tbody>
      </table>
    );
  }
}
