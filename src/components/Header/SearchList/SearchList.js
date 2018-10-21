import React from "react";
import Aux from "../../Aux";

import "./SearchList.css";

const Search = props => {
  const { inputValue, onChangeHandler, onClickHandler, events } = props;
  const list = (
    <ul className="mainBG">
      {events.map(
        el =>
          (el.title.toLowerCase().includes(inputValue) ||
            el.notes.toLowerCase().includes(inputValue)) && (
            <li key={JSON.stringify(el)} onClick={() => onClickHandler(el)}>
              <p>Date: {el.date}</p>
              <p>Title: {el.title}</p>
              <p>Notes: {el.notes}</p>
            </li>
          )
      )}
    </ul>
  );
  return (
    <Aux>
      <i className="fas fa-search" />
      <input
        value={inputValue}
        type="text"
        name="search"
        onChange={onChangeHandler}
        id="search"
      />
      {inputValue && list}
    </Aux>
  );
};

export default Search;
