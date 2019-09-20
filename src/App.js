import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import axios from "axios";
import Search from "./components/user/Search";
import Alert from "./components/layout/Alert";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_Client_ID}&clent_secret=${process.env.REACT_APP_GITHUB_Client_SECRET}`
    );
    this.setState({ loading: false, users: res.data });
  }
  searchUsers = async text => {
    console.log(text);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_Client_ID}&clent_secret=${process.env.REACT_APP_GITHUB_Client_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items });
  };
  clearUsers = () => {
    this.setState({ users: [] });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 100000);
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
