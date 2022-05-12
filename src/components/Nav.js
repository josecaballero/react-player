import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav className="nav">
      <h1 className="nav__title">Waves</h1>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        className="nav__button"
      >
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
