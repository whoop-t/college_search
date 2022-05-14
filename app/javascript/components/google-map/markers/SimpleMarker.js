import React, { useState } from 'react';

const SimpleMarker = ({ schoolName }) => {
	const [active, setActive] = useState(false);

	const show = () => {
		setActive(true);
	};

	const hide = () => {
		setActive(false);
	};

	return (
		<>
			{active && <p className='simple-marker__tooltip'>{schoolName}</p>}
			<div
				onMouseEnter={show}
				onMouseLeave={hide}
				className='simple-marker'
			></div>
		</>
	);
};

export default SimpleMarker;
