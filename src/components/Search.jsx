import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useActions } from "../helpers/hooks/useActions";

const Search = () => {
  const [search, setSearch] = useState("");
  const { getUsers } = useActions();

  const handleSubmit = () => {
    getUsers({ search });
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSubmit}>Search</Button>
    </InputGroup>
  );
};

export default Search;
