import React, { useEffect, useState } from 'react';

function Updatwd() {
	const [data, setData] = useState('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	async function handleFetch() {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch('https://dog.ceo/api/breeds/image/random');

			if (!response.ok) {
				throw new Error('Failed to fetch dog image');
			}

			const result = await response.json();

			setData(result.message);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		handleFetch();
	}, []);

	return (
		<div>
			{loading && <h1>Loading...</h1>}

			{error && <h1>Cannot fetch the data: {error}</h1>}

			{data && <img src={data} alt="Dog" width="400" />}

			<br />

			<button onClick={handleFetch}>Fetch</button>
		</div>
	);
}

export default Updatwd;
