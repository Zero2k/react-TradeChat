import React from 'react';
import styled from 'styled-components';

import Channels from '../components/Channels';
import Companies from '../components/Companies';
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
        <Companies companies={[{ id: 1, symbol: 'TGT' }, { id: 2, symbol: 'AAP' }]} />
        <Channels
          companyName="Apple"
          username="Username"
          channels={[{ id: 1, name: 'general' }, { id: 2, name: 'news' }]}
          users={[{ id: 1, name: 'Bob' }, { id: 2, name: 'Boba' }]}
        />
        <Header companyName="Apple" />
        <Messages>
          <ul className="message-list">
            <li />
            <li />
          </ul>
        </Messages>
        <MessageInput companyName="Apple" />
      </Root>
    );
  }
}

export default Home;
