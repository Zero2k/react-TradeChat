import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  background-color: #272c38;
`;

const CompanyNameHeader = styled.h1`
  padding-top: 10px;
  color: #fff;
  font-size: 20px;
`;

const SideBarList = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0px;
`;

const paddingLeft = `
  padding-left: 10px; 
  color: #fffff0;
`;

const SideBarListItem = styled.li`
  padding: 2px;
  ${paddingLeft};
  &:hover {
    background: #f2711c;
  }
`;

const SideBarListHeader = styled.li`
  ${paddingLeft};
`;

const PushLeft = styled.div`
  ${paddingLeft};
`;

const Green = styled.span`
  color: #38978d;
`;

const Bubble = ({ on = true }) => (on ? <Green>●</Green> : '○');

const Channel = ({ id, name }) => <SideBarListItem key={`channel-${id}`}># {name}</SideBarListItem>;

const User = ({ id, name }) => (
  <SideBarListItem key={`user-${id}`}>
    <Bubble /> {name}
  </SideBarListItem>
);

export default ({ companyName, username, channels, users }) => (
  <Root>
    <PushLeft>
      <CompanyNameHeader>${companyName}</CompanyNameHeader>
      {username}
    </PushLeft>
    <div>
      <SideBarList>
        <SideBarListHeader style={{ fontWeight: '600' }}>Channels</SideBarListHeader>
        {channels.map(Channel)}
      </SideBarList>
    </div>
    <div>
      <SideBarList>
        <SideBarListHeader style={{ fontWeight: '600' }}>Direct Messages</SideBarListHeader>
        {users.map(User)}
      </SideBarList>
    </div>
  </Root>
);
