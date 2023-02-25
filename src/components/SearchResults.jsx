import React from "react";
import {
  Container,
  Album,
  Title,
  Thumbnail,
} from "../styles/SearchResultsStyles";

function SearchResults(props) {
  const { data, searchTerm } = props;
  const filteredData = data.filter((items) =>
    JSON.stringify(items).match(searchTerm)
  );

  return (
    <Container>
      {filteredData.map((item) => (
        <Album key={item.id}>
          <Thumbnail
            src={item.thumbnailUrl}
            alt={`Artwork for ${item.title}. © 2023`}
          />
          <Title>{item.title.toUpperCase()}</Title>
        </Album>
      ))}
    </Container>
  );
}

export default SearchResults;
