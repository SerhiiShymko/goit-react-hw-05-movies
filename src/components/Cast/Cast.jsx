import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../services/Api/api';

const Cast = () => {
  const [castsList, setCastsList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => setCastsList(data.cast));
  }, [movieId]);

  return (
    <div className="list">
      {castsList.length > 0
        ? castsList.map(({ original_name, character, profile_path, id }) => (
            <div className="item" key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <div className="name">{original_name}</div>
              <div className="character">Character:{character}</div>
            </div>
          ))
        : "Sorry, there isn't any info :("}
    </div>
  );
};

export default Cast;
