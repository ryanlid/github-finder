import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    <nav className="navbar bg-primary">
      <i className={props.icon}></i>
      &nbsp;
      <span>{props.title}</span>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

export default Navbar;
