import React from 'react';
import { Grid } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const user = ({ id, username }) => <h1 key={id}>{username}</h1>;

const Auth = ({ data: { allUsers = [] } }) => (
  <div>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>{allUsers.map(user)}</Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

const query = gql`
  {
    allUsers {
      id
      username
    }
  }
`;

export default graphql(query)(Auth);
