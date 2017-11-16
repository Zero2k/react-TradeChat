import React from 'react';
import { Link } from 'react-router-dom';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Login extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      email: '',
      password: '',
      errors: {},
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const { email, password } = this;
    const response = await this.props.mutate({
      variables: { email, password },
    });

    console.log(response);

    const { success, token, refreshToken, errors } = response.data.login;
    if (success) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      this.props.history.push('/auth');
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
    const { email, password, errors: { emailError, passwordError, bannedError } } = this;

    const errorList = [];

    if (emailError) {
      errorList.push(emailError);
    }
    if (passwordError) {
      errorList.push(passwordError);
    }
    if (bannedError) {
      errorList.push(bannedError);
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
              <Image size="mini" src="https://react.semantic-ui.com/logo.png" /> Log-in to your
              account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Field error={!!emailError || !!bannedError}>
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="E-mail"
                    type="email"
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
              Don't have an account?{' '}
              <Link as={Link} to="/sign-up">
                Sign Up
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      success
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(mutation)(observer(Login));
