import React, { Component } from "react";
import axios from "axios";
import { Server } from "http";

class Form extends Component {
  state = {
    formState: "",
  };
  componentDidMount() {
    // <- my route from route folder to get json not working
    axios
      .get("http://localhost:3001/products")
      // axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState(
          {
            formState: response,
          },
          () => {
            console.log(this.state.formState);
          }
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <h1> Form Page</h1>
        <p> intro to axios</p>
        <h1> {}</h1>
      </div>
    );
  }
}
export default Form;
