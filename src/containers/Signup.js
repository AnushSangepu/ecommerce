import React from "react";
import { Button, Form, Grid, Header, Message, Segment, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { authSignup } from "../store/actions/auth";

class RegistrationForm extends React.Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password1, password2 } = this.state;
    this.props.signup(username, email, password1, password2);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, password1, password2 } = this.state;
    const { error, loading, token } = this.props;

    if (token) {
      return <Redirect to="/" />;
    }

    return (
      <Grid
        textAlign="center"
        style={{
          height: "100vh",
          background: "#282c34",
        }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header
            as="h2"
            textAlign="center"
            style={{
              color: "#4CAF50",
              fontFamily: "Arial, sans-serif",
              marginBottom: "20px",
            }}
          >
            <Icon name="signup" />
            Signup to your account
          </Header>
          {error && (
            <Message negative>
              <Message.Header>Error</Message.Header>
              <p>{error.message}</p>
            </Message>
          )}

          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                onChange={this.handleChange}
                value={username}
                name="username"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                style={{
                  fontFamily: "Arial, sans-serif",
                  marginBottom: "15px",
                  color: "#4CAF50",
                }}
              />
              <Form.Input
                onChange={this.handleChange}
                value={email}
                name="email"
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                style={{
                  fontFamily: "Arial, sans-serif",
                  marginBottom: "15px",
                  color: "#4CAF50",
                }}
              />
              <Form.Input
                onChange={this.handleChange}
                fluid
                value={password1}
                name="password1"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                style={{
                  fontFamily: "Arial, sans-serif",
                  marginBottom: "15px",
                  color: "#4CAF50",
                }}
              />
              <Form.Input
                onChange={this.handleChange}
                fluid
                value={password2}
                name="password2"
                icon="lock"
                iconPosition="left"
                placeholder="Confirm password"
                type="password"
                style={{
                  fontFamily: "Arial, sans-serif",
                  marginBottom: "15px",
                  color: "#4CAF50",
                }}
              />

              <Button
                color="green"
                fluid
                size="large"
                loading={loading}
                disabled={loading}
                style={{
                  fontFamily: "Arial, sans-serif",
                  background: "#4CAF50",
                }}
              >
                Signup
              </Button>
            </Segment>
          </Form>

          <Message>
            Already have an account?{" "}
            <NavLink
              to="/login"
              style={{
                color: "#4CAF50",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Login
            </NavLink>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (username, email, password1, password2) =>
      dispatch(authSignup(username, email, password1, password2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
