import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import SearchResults from "./SearchResults";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 50%;
  border-style: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
`;

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
