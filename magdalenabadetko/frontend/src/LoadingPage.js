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
    };
  }

  componentDidMount() {
    fetch(this.state.API)
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => {
          if (item.Component === "MainSet") {
            item.Component = MainSet;
          }
          return item;
        });
        this.setState({ data });
      });
  }
  render() {
    return <MainPage data={this.state.data} />;
  }
}
export default LoadingPage;
