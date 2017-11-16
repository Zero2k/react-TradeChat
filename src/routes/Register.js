import React from 'react';
import { Link } from 'react-router-dom';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      username: '',
      email: '',
      password: '',
      errors: {},
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const { username, email, password } = this;
    const response = await this.props.mutate({
      variables: { username, email, password },
    });

    console.log(response);

    const { success, errors } = response.data.register;
    if (success) {
      this.props.history.push('/');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });
      this.errors = err;
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this[name] = value;
  };

  render() {
    const {
      username,
      email,
      password,
      errors: { usernameError, emailError, passwordError },
    } = this;

    const errorList = [];

    if (usernameError) {
      errorList.push(usernameError);
    }
    if (emailError) {
      errorList.push(emailError);
    }
    if (passwordError) {
      errorList.push(passwordError);
    }

    return (
      <div className="login-form">
        {/*
                Heads up! The styles below are necessary for the correct render of this example.
                You can do same with CSS, the main idea is that all the elements up to the `Grid`
                below must have a height of 100%.
            */}
        <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                height: 100%;
                }
            `}</style>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image size="mini" src="https://react.semantic-ui.com/logo.png" /> Create your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Field error={!!usernameError}>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                  />
                </Form.Field>
                <Form.Field error={!!emailError}>
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="E-mail"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                  />
                </Form.Field>
                <Form.Field error={!!passwordError}>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </Form.Field>

                <Button color="teal" fluid size="large" onClick={this.onSubmit}>
                  Login
                </Button>
              </Segment>
            </Form>
            {errorList.length ? (
              <Message error header="There was some errors with your submission" list={errorList} />
            ) : null}
            <Message>
              Already have an account?{' '}
              <Link as={Link} to="/login">
                Sign In
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      success
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(mutation)(observer(Register));
