import React, { Component } from 'react';
import {
  Container,
  Jumbotron,
  Image,
  Row,
  Col,
  Spinner
} from 'react-bootstrap';
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getUserInfo();
  };

  render() {
    console.log(this.props.userInfo[0]);
    if (this.props.userInfo[0]) {
      var {
        firstname,
        lastname,
        city,
        state,
        hobbies,
        profilePic,
        profileBanner
      } = this.props.userInfo[0];
    }

    return this.props.isLoading ? (
      <Container
        style={{
          minHeight: '100vh',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Spinner
          animation='border'
          style={{ width: '100px', height: '100px' }}
        />
      </Container>
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
          <Col style={{ textAlign: 'center' }}>
            <h3>
              {firstname} {lastname}
            </h3>
            <h5>
              {city}, {state}
            </h5>
            <h5>About:</h5> <p>{hobbies}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { getUserInfo }
)(Profile);
