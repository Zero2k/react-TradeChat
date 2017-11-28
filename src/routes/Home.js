import React from 'react';
import styled from 'styled-components';

import Sidebar from '../containers/Sidebar';

import Header from '../components/Header';
import Messages from '../components/Messages';
import MessageInput from '../components/MessageInput';

const Root = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 100px 250px 1fr;
  grid-template-rows: auto 1fr auto;
`;

class Home extends React.Component {
  render() {
    return (
      <Root>
        <Sidebar />
        <Header companyName="Apple" />
        <Messages />
        <MessageInput companyName="Apple" />
      </Root>
    );
  }
}

export default Home;
