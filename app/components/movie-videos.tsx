import styles from "../../styles/movie-videos.module.css";
import { API_URL } from "../constants";

async function getVideo(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function movieVideo({ id }: { id: string }) {
  const video = await getVideo(id);
  return (
    <div className={styles.container}>
      {video.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
