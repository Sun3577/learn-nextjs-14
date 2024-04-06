import { API_URL } from "../(home)/page";

async function getVideo(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function movieVideo({ id }: { id: string }) {
  const video = await getVideo(id);
  return <h5>{JSON.stringify(video)}</h5>;
}
