import React, { useState } from 'react';
import GoogleMap from './google-map/GoogleMap';
import SimpleMarker from './google-map/markers/SimpleMarker';

const App = () => {
	const SEARCH_URL = '/api/v1/college-search';
	const [value, setValue] = useState('');
	const [schools, setSchools] = useState([]);

	const handleChange = e => {
		setValue(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (!value) return;

		try {
			const response = await fetch(`${SEARCH_URL}?s=${value}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const parsed = await response.json();

			if (parsed?.success) {
                if (parsed.data?.length < 1){
                    alert("No Results")
                    setSchools([]);
                } else {
                    setSchools(parsed?.data);
                }
			}
		} catch (error) {
			// Handle this better
			console.log(error);
		}
	};

	const createMarkers = () => {
		if (schools?.length < 0) return;

		return schools.map(school => {
			return (
				<SimpleMarker
                    key={school["id"]}
					lat={school['location.lat']}
					lng={school['location.lon']}
					schoolName={school["school.name"]}
				/>
			);
		});
	};

	return (
		<div className='college-searches'>
			<form onSubmit={handleSubmit} className='college-searches__form'>
				<label className='college-searches__label' htmlFor='college-search'>
					College Search
				</label>
				<input
					type='text'
					name='college-search'
					id='college-search'
					placeholder='Search schools...'
					className='college-searches__input'
					value={value}
					onChange={handleChange}
				/>
			</form>

			<GoogleMap>{createMarkers()}</GoogleMap>
		</div>
	);
};

export default App;
