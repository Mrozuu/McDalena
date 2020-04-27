import React from "react";
import MainPage from "./components/mainPage/MainPage";
import MainSet from "./components/mainPage/MainSet";
import SetPage from "./components/setPage/SetPage";
import './index.css'
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
      className: 'loader',
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
              path: "/MainSet" + (item.id - 1),
              Component: MainSet,
            }),
          });
          this.setState({
            setsRoutes: this.state.setsRoutes.concat({
              path: "/SetPage" + (item.id - 1),
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
        this.setState({ data});
        setTimeout(() => {
          this.setState({className: 'loader loaded'})
        }, 1000);
        setTimeout(() => {
          this.setState({isLoading:false})
        },1000)
      })
      .catch((error) => this.setState({ error,isLoading:false}));

  }

  render() {
    const { setsData, recipesData, mainRoutes, setsRoutes, isLoading, className, error } = this.state;
    if (error) {
      return <p style={{ backgroundColor: "white" }}>{error.message}</p>;
    }
    return (
      <div className = {className}>
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
