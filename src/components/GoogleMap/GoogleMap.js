import React from "react";
import GoogleMapReact from "google-map-react";
import logo from "../../img/logo.png";
import styled from "styled-components";
import mq from "../../utils/mq";

const Marker = styled.img`
  height: 30px;
  width: auto;
`;

const Container = styled.div`
  height: 300px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  ${mq.a1200} {
    height: 400px;
  }

  ${mq.a1400} {
    height: 450px;
  }

  ${mq.a1600} {
    height: 500px;
  }
`;

const AnyReactComponent = ({ text }) => (
  <div>
    <Marker src={logo} />
  </div>
);

class GoogleMap extends React.Component {
  render() {
    const { latitude, longitude } = this.props.coordinates;
    const cd = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
    return (
      <Container>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyA4ZytJbBo5FEQILV8-DD4uPW7Iyga6U_8` }}
          defaultCenter={cd}
          defaultZoom={17}
        >
          <AnyReactComponent lat={cd.lat} lng={cd.lng} text="My Marker" />
        </GoogleMapReact>
      </Container>
    );
  }
}

export default GoogleMap;
