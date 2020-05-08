import React from "react";
import MainPage from "./components/mainPage/MainPage";
import MainSet from "./components/mainPage/MainSet";
import SetPage from "./components/setPage/SetPage";
import "./index.css";
class LoadingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      setsData: [],
      recipesData: [],
      mainRoutes: [],
      setsRoutes: [],
      API: "http://127.0.0.1:8000/api/sets/",
      API2: "http://127.0.0.1:8000/api/recipes/",
      isLoading: false,
      loaded: false,
      className: "loader",
      classNameLeft: "loader-left",
      classNameRight: "loader-right",
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
            setsRoutes: this.state.mainRoutes.concat({
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
        setTimeout(() => {
          this.setState({ className: "loader loaded" });
        }, 1000);
        setTimeout(() => {
          this.setState({
            classNameLeft: "loader-left loaded-left",
            classNameRight: "loader-right loaded-right",
          });
        }, 2000);
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 3000);
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const {
      setsData,
      recipesData,
      mainRoutes,
      setsRoutes,
      isLoading,
      className,
      classNameLeft,
      classNameRight,
      error,
    } = this.state;
    if (error) {
      return <p style={{ backgroundColor: "white" }}>{error.message}</p>;
    }

    return (
      <div>
        {isLoading ? (
          <div>
            <div className={className} />
            <div className={classNameLeft} />
            <div className={classNameRight} />
          </div>
        ) : null}
        <MainPage
          mainRoutes={mainRoutes}
          setsRoutes={setsRoutes}
          setsData={setsData}
          recipesData={recipesData}
        />
      </div>
    );
  }
}
export default LoadingPage;
