import React from 'react';
import styled from 'styled-components';

const Main = styled.div``;

const Layout = ({ children }) => (
  <div>
    <Main>{children}</Main>
  </div>
);

export default Layout;
