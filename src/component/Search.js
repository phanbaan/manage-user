import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  renderButton = () => {
    return !this.props.status ? (
      <button
        className="btn btn--secondary"
        onClick={() => this.props.isChangeStatus()}
      >
        Thêm mới
      </button>
    ) : (
      <button
        className="btn btn--secondary btn--close"
        onClick={() => this.props.isChangeStatus()}
      >
        Đóng
      </button>
    );
  };

  onChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
    this.props.getSearch(this.state.searchValue);
  };
  render() {
    return (
      <div className="search">
        <div className="search-form">
          <input
            className="search__input"
            placeholder="Nhập tên nhân viên..."
            name="Fsearch"
            type="text"
            onChange={(event) => this.onChange(event)}
          />
          <input
            type="submit"
            value="Tìm kiếm"
            className="form__submit"
            onClick={() => this.props.getSearch(this.state.searchValue)}
          />
        </div>
        <div className="btn-group">{this.renderButton()}</div>
      </div>
    );
  }
}
