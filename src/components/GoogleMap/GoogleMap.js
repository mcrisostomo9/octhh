import React from "react";
import GoogleMapReact from "google-map-react";

// interface IProps {}

// interface IState {}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  render() {
    return (
      <div style={{ height: "500px", width: "800px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyA4ZytJbBo5FEQILV8-DD4uPW7Iyga6U_8` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
