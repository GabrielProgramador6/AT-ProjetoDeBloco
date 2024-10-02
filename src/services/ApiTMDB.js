// const private_key = process.env.REACT_APP_PRIVATE_API_TOKEN;
const urlBase = 'https://api.themoviedb.org/';

export async function getStreams() {
	try {
		const response = await fetch(
			`${urlBase}3/tv/popular?language=en-US&page=1`,
			{
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDUyYzJjNDVkOGE1NDY5OTc4YzhjZDVkOTlhMTdiYyIsIm5iZiI6MTcyNzgwNDUxMi42ODc4MzksInN1YiI6IjYyMThlNTg1MzgzZGYyMDA2YzE2MTk5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.myP-bPZPmQacE-QPzYjBc3HdSOk4qL42AHhFHXK4-M4`,
				},
			}
		);

		if (!response.ok) throw new Error('Erro ao buscar Streams!');

		const data = await response.json();
		// console.log(data.results);
		return data.results;
	} catch (e) {
		alert(e);
	}
}
