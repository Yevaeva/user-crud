import React, { useState } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { useActions } from "../helpers/hooks/useActions";

const Search = () => {
  const [search, setSearch] = useState("");
  const { getUsers } = useActions();

  const handleSubmit = () => {
    getUsers({ search });
  };
  return (
    <Row>
      <Col md="6" sm="12" className="m-auto">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={handleSubmit}>Search</Button>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Search;
