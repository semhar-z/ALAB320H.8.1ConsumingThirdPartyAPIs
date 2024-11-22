const URL = 'https://swapi.dev/api';

export async function getAllStarships() {
  const response = await fetch(`${URL}/starships/`);
  if (!response.ok) throw new Error('Network response was not ok');
  const data = await response.json();
  return data.results; // SWAPI returns starships in a `results` array
}
