import React, { useEffect, useState } from 'react';

function App() {
	let [data, setData] = useState('');
	let [error, setError] = useState(null);
	let [loading, setLoading] = useState(false);

	async function handleFetch() {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch('https://dog.ceo/api/breeds/image/random');
			if (!response.ok) {
				throw new Error('Not Found');
			}

			let data = await response.json();

			setData(() => data.message);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error.message);
		}
	}
	// console.log(data);

	useEffect(() => {
		handleFetch();
	}, []);

	return (
		<div>
			<div>
				<h1>Random Dogs Picture it will generate </h1>
				<h1>
					if you will tap <b>Fetch</b>
				</h1>
				{loading && <h1>loading...</h1>}
				{error && <h1>can not fatching the data{error}</h1>}
				{data && <img src={data} alt="Dog" />}
			</div>
			<br />
			<button onClick={handleFetch}> Fetch</button>
		</div>
	);
}

export default App;
