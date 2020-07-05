import React from "react";
import MainPage from "./components/mainPage/MainPage";
import MainSet from "./components/mainPage/MainSet";
import SetPage from "./components/setPage/SetPage";

import "./index.css";

import loadingPhoto1 from "./img/dezerek.svg";
import loadingPhoto2 from "./img/rondel.svg";
import loadingPhoto3 from "./img/migzer.svg";

class LoadingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      setsData: [],
      recipesData: [],
      instructionsData: [],
      mainRoutes: [],
      setsRoutes: [],
      API: "http://127.0.0.1:8000/api/sets/",
      API2: "http://127.0.0.1:8000/api/recipes/",
      API3: "http://127.0.0.1:8000/api/instructions/",
      isLoading: false,
      loaded: false,
      className: "loader",
      classNameBackground: "loader__background",
      classNamePhoto: "loading__photo",
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
        this.setState({ setsData: data });
        data.map((item) => {
          this.setState({
            mainRoutes: this.state.mainRoutes.concat({
              path: "/MainSet" + item.id,
              Component: MainSet,
            }),
          });
          this.setState({
            setsRoutes: this.state.setsRoutes.concat({
              path: "/SetPage" + item.id,
              Component: SetPage,
            }),
          });
          return item;
        });
        this.setState({ data });
      })
      .catch((error) => this.setState({ error, isLoading: false }));

    fetch(this.state.API2)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        this.setState({ recipesData: data });
      })
      .catch((error) => this.setState({ error, isLoading: false }));

    fetch(this.state.API3)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        this.setState({ instructionsData: data });
        setTimeout(() => {
          this.setState({
            className: "loader loaded",
            classNamePhoto: "loading__photo loaded__photo",
          });
        }, 2000);
        setTimeout(() => {
          this.setState({
            classNameBackground: "loader__background loaded__background",
          });
        }, 3000);
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 4000);
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const {
      setsData,
      recipesData,
      instructionsData,
      mainRoutes,
      setsRoutes,
      isLoading,
      className,
      classNameBackground,
      classNamePhoto,
      error,
    } = this.state;
    if (error) {
      return <p style={{ backgroundColor: "white" }}>{error.message}</p>;
    }
    return (
      <div>
        {isLoading ? (
          <div className={classNameBackground}>
            <div className={className} />
            <div className={classNamePhoto}></div>
          </div>
        ) : null}
        <MainPage
          mainRoutes={mainRoutes}
          setsRoutes={setsRoutes}
          setsData={setsData}
          recipesData={recipesData}
          instructionsData={instructionsData}
        />
      </div>
    );
  }
}
export default LoadingPage;
