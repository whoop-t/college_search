import React, { useState } from 'react';

const App = () => {
	const SEARCH_URL = '/api/v1/college-search';
	const [value, setValue] = useState('');

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

            const data = await response.json()
        } catch (error) {
            // Handle this better
            console.log(error);
        }
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
					className='college-searches__input'
					value={value}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};

export default App;
