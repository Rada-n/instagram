import React from "react";
import styles from './SearchInput.module.css'
import { useState } from "react";
import Search from "../../assets/Search.svg";

const SearchInput = () => {
  const [inputSearch, setInputSearch] = useState("");

  function handleInputSearch(event) {
    setInputSearch(event.target.value);
  }

  return (
    <div className={styles.searchContainer}>
      <img
        src={Search}
        alt=""
        className={`${styles.searchIcon} ${inputSearch ? styles.hide : ""}`}
      />
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        onChange={handleInputSearch}
      />
    </div>
  );
};

export default SearchInput;
