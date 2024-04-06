import { API_URL } from "../(home)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function movieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h5>{JSON.stringify(movie)}</h5>;
}
