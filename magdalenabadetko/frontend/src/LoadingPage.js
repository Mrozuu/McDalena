import React from "react";
import MainPage from "./components/mainPage/MainPage";
import MainSet from "./components/mainPage/MainSet";

class LoadingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      API: "http://127.0.0.1:8000/api/sets/",
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(this.state.API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        data.map((item) => {
          if (item.Component === "MainSet") {
            item.Component = MainSet;
          }
          return item;
        });
        this.setState({ data, isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  render() {
    const { data, isLoading, error } = this.state;
    if (error) {
      return <p style={{ backgroundColor: "white" }}>{error.message}</p>;
    }
    if (isLoading) {
      return <p style={{ backgroundColor: "white" }}>Loading ...</p>;
    }
    return <MainPage data={data} />;
  }
}
export default LoadingPage;
