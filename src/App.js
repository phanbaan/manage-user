import React, { Component } from "react";
import "./App.css";
import Search from "./component/Search";
import Table from "./component/Table";
import User from "./component/User";
import Data from "./data/data.json";

import { v4 as uuidv4 } from "uuid";
import EditPopup from "./component/EditPopup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      data: [],
      valueSearch: "",
      isPopup: false,
      userEdit: {},
    };
  }
  componentDidMount() {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify(Data));
    } else {
      var dataNew = JSON.parse(localStorage.getItem("data"));
      this.setState({
        data: dataNew,
      });
    }
  }

  isChangePopup = () => {
    this.setState({
      isPopup: !this.state.isPopup,
    });
  };
  isChangeStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };
  getNewUser = (name, phone, permission) => {
    var newUser = {};
    newUser.id = uuidv4();
    newUser.name = name;
    newUser.phone = phone;
    newUser.permission = permission;

    var items = this.state.data;
    items.push(newUser);
    this.setState({
      data: items,
    });
    localStorage.setItem("data", JSON.stringify(items));
  };
  getSearch = (value) => {
    this.setState({
      valueSearch: value,
    });
  };
  getEditUser = (value) => {
    this.setState({
      userEdit: value,
    });
  };
  getValueEdit = (value) => {
    this.state.data.forEach((item) => {
      if (item.id === value.id) {
        item.name = value.name;
        item.phone = value.phone;
        item.permission = value.permission;
      }
    });
    localStorage.setItem("data", JSON.stringify(this.state.data));
  };
  getUserDelete = (value) => {
    let dataTemp = this.state.data.filter((item) => item.id !== value);
    this.setState({
      data: dataTemp,
    });
    localStorage.setItem("data", JSON.stringify(dataTemp));
  };
  render() {
    let classContentTable = "content-table";
    if (!this.state.status) {
      classContentTable += " content-100";
    }
    const { userEdit } = this.state;
    var dataNew = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.valueSearch) !== -1) {
        dataNew.push(item);
      }
    });
    return (
      <div className="container">
        <div className="header">
          <h3 className="heading__primary">Quản lý danh sách nhân viên</h3>
        </div>
        <Search
          status={this.state.status}
          isChangeStatus={() => this.isChangeStatus()}
          getSearch={(value) => this.getSearch(value)}
        />
        <div className="content">
          <div className={classContentTable}>
            <Table
              data={dataNew}
              isChangePopup={() => this.isChangePopup()}
              getEditUser={(value) => this.getEditUser(value)}
              getUserDelete={(value) => this.getUserDelete(value)}
            />
          </div>

          <User
            status={this.state.status}
            getNewUser={(id, name, phone, permission) =>
              this.getNewUser(id, name, phone, permission)
            }
          />
        </div>
        {this.state.isPopup && (
          <EditPopup
            isChangePopup={() => this.isChangePopup()}
            userEdit={userEdit}
            getValueEdit={(value) => this.getValueEdit(value)}
          />
        )}
      </div>
    );
  }
}

export default App;
