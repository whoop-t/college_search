import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ children }) => {
	// ! Google Maps api requires billing, not enabling for this project
	// Api Key should be restricted
	const API_KEY = 'AIzaSyD5GriDir3NQ3oBiemRDeCafehPquLR5RU';
	const CENTER_OF_USA = {
		lat: 37.0902,
		lng: -95.7129
	};

	return (
		<div style={{ height: '700px', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: API_KEY }}
				defaultCenter={CENTER_OF_USA}
				defaultZoom={5}
			>
				{children}
			</GoogleMapReact>
		</div>
	);
};

export default GoogleMap;
