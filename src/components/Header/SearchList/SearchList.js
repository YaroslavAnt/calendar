import React from "react";
import Wrapper from "../../Wrapper";

import "./SearchList.css";

const Search = props => {
  const { inputValue, onChangeHandler, onClickHandler, events } = props;
  const list = (
    <ul className="mainBG">
      {events
        .sort((a, b) => a.date.split("-").join("") - b.date.split("-").join(""))
        .map(
          el =>
            (el.title.toLowerCase().includes(inputValue) ||
              el.notes.toLowerCase().includes(inputValue) ||
              el.date
                .split("-")
                .sort()
                .join("")
                .includes(
                  inputValue
                    .split(/[^0-9]/)
                    .sort()
                    .join("")
                )) && (
              //  ===
              // inputValue
              //   .split(/[^0-9]/)
              //   .sort()
              //   .join("")
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
    <Wrapper>
      <i className="fas fa-search" />
      <input
        value={inputValue}
        type="text"
        name="search"
        onChange={onChangeHandler}
        id="search"
        placeholder="Событие, дата или участник"
      />
      {inputValue && list}
    </Wrapper>
  );
};

export default Search;
