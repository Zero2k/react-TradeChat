import React from 'react';
import { Form, Input, Button, Modal } from 'semantic-ui-react';
// import { withFormik } from 'formik';
// import gql from 'graphql-tag';
// import { compose, graphql } from 'react-apollo';
// import findIndex from 'lodash/findIndex';

const FindCompanyModal = ({
  open,
  onClose,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Modal open={open} onClose={onClose}>
    <Modal.Header>Search Company</Modal.Header>
    <Modal.Content>
      <Form>
        <Form.Field>
          <Input
          />
        </Form.Field>
        <Form.Group widths="equal">
          <Button disabled={isSubmitting} fluid onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={isSubmitting} onClick={handleSubmit} fluid>
            Find Company
          </Button>
        </Form.Group>
      </Form>
    </Modal.Content>
  </Modal>
);

export default FindCompanyModal;