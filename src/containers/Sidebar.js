import React from 'react';

import Companies from '../components/Companies';
import Channels from '../components/Channels';
import FindCompanyModal from '../components/FindCompanyModal';

export default class Sidebar extends React.Component {
  state = {
    openFindCompanyModal: false,
  };

  toggleFindCompanyModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState(state => ({ openFindCompanyModal: !state.openFindCompanyModal }));
  };

  render() {
    // const {  } = this.props;
    const { openFindCompanyModal } = this.state;

    return [
      <Companies 
        key="companies-sidebar" 
        companies={[{ id: 1, symbol: 'TGT' }, { id: 2, symbol: 'AAP' }]}
        onFindCompanyClick={this.toggleFindCompanyModal}
      />,
      <Channels
        key="channels-sidebar" 
        companyName="Apple"
        username="Stevie Feliciano"
        channels={[{ id: 1, name: 'general' }, { id: 2, name: 'news' }]}
        users={[{ id: 1, name: 'Bob' }, { id: 2, name: 'Boba' }]}
      />,
      <FindCompanyModal
        key="find-company-modal"
        onClose={this.toggleFindCompanyModal}
        open={openFindCompanyModal}
    />
    ];
  }
}