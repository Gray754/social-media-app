import React, { Component } from 'react';
import {
  Container,
  Jumbotron,
  Image,
  Row,
  Col,
  Spinner,
  Button
} from 'react-bootstrap';
import { logoutUser } from '../../ducks/reducer';
import { connect } from 'react-redux';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  logout = async () => {
    await this.props.logoutUser();
    this.props.history.push('/');
  };

  render() {
    const {
      fname,
      lname,
      city,
      state,
      hobbies,
      profilePic,
      profileBanner
    } = this.props.userSession;

    console.log(this.props.userSession);

    return this.props.isLoading ? (
      <LoadingSpinner />
    ) : (
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Image rounded src={profileBanner} fluid />
          <Image
            roundedCircle
            src={profilePic}
            thumbnail
            width='50%'
            style={{ marginTop: '-5em' }}
            onClick={() => this.changeProfileImg}
          />
        </div>
        <Row noGutter='true'>
          <Col
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              margintop: '10em'
            }}
          />
          <Col>
            <span style={{ textAlign: 'center' }}>
              <h3>
                {fname} {lname}
              </h3>
              <h5>
                {city}, {state}
              </h5>
            </span>
            <h5>Bio:</h5> <p>{hobbies}</p>
          </Col>
        </Row>
        <Button
          block
          onClick={() => {
            this.logout();
          }}
        >
          Logout
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);
