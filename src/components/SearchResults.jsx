import React from "react";
import styled from "styled-components";

const Container = styled.ol``;

const Title = styled.h3`
  font-family: Roboto;
  font-weight: 700;
`;
const Thumbnail = styled.img``;

function SearchResults(props) {
  const { data, searchTerm } = props;
  const filteredData = data.filter((items) =>
    JSON.stringify(items).match(searchTerm)
  );

  return (
    <Container>
      {filteredData.map((item) => (
        <li key={item.id}>
          <Thumbnail
            src={item.thumbnailUrl}
            alt={`Art for ${item.title}. © 2023`}
          />
          <Title>{item.title.toUpperCase()}</Title>
        </li>
      ))}
    </Container>
  );
}

export default SearchResults;
