import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Root = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;
  background-color: #1f232d;
`;

const CompanyList = styled.ul`
  width: 100%;
  padding-left: 0px;
  list-style: none;
`;

const CompanyItem = styled.li`
  height: 50px;
  width: 50px;
  background-color: #676066;
  color: #fff;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 7px;
  &:hover {
    border-style: solid;
    border-width: thick;
    border-color: #767676;
  }
`;

const Company = ({ id, symbol }) => <CompanyItem key={`company-${id}`}>{symbol}</CompanyItem>;

export default ({ companies, onFindCompanyClick }) => (
  <Root>
    <CompanyList>{companies.map(Company)}</CompanyList>
    <CompanyList>
      <CompanyItem onClick={onFindCompanyClick} >
        <Icon style={{ margin: '0' }} name="search" />
      </CompanyItem>
    </CompanyList>
  </Root>
);
