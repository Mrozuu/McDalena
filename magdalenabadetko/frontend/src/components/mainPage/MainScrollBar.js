import React from "react";
import "./MainPageStyle.css";
import MainScrollDot from "./MainScrollDot";
import { Link, NavLink, matchPath } from "react-router-dom";

class MainScrollBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonClicked: true,
    };

    this.ClickEvent = () => {
      this.setState({ isButtonClicked: true });
      setTimeout(() => this.setState({ isButtonClicked: false }), 1000);
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isButtonClicked: false }), 1500);
  }

  render() {
    let className = "mainScrollBar";
    if (this.state.isButtonClicked) className += " mainScrollBarClicked";
    return (
      <div onClick={this.ClickEvent} className={className}>
        {this.props.setsData.map((item) => (
          <Link activeClassName="active__set" to={`MainSet${item.id}`}>
            <MainScrollDot
              activeClass={
                window.location.pathname === `/MainSet${item.id}`
                  ? "active"
                  : ""
              }
              id={item.id}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default MainScrollBar;
