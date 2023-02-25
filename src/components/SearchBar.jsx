import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import { Container, InputContainer, Input } from "../styles/SearchBarStyles";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos",
    };
    const getData = async () => {
      try {
        const apiData = await axios.request(options);
        const reducedData = await apiData.data.slice(0, 15);

        setData(reducedData);
      } catch (error) {
        console.log(error.message);
      }
    };

    return () => {
      getData();
    };
  }, []);

  const handleChange = useCallback((e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
  }, []);

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search"
        />
      </InputContainer>
      <SearchResults data={data} searchTerm={searchTerm} />
    </Container>
  );
};

export default SearchBar;
