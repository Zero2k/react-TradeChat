import React from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

const Root = styled.div`
  grid-column: 3;
  grid-row: 3;
  background-color: #fff;
`;

const Inputx = styled.div`
  margin: 20px;
`;

export default ({ companyName }) => (
  <Root>
    <Inputx>
      <Input fluid placeholder={`Talk about $${companyName}`} icon={{ name: 'smile', link: true }} />
    </Inputx>
  </Root>
);
