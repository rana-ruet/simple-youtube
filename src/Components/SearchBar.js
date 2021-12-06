import React, { useState } from 'react';
import { Form, Button, Icon, Segment } from 'semantic-ui-react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <Segment>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <Button type="submit">
            <Icon name="search" size="large" />
          </Button>
        </Form.Group>
      </Form>
    </Segment>
  );
};

export default SearchBar;
