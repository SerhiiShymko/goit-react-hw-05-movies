import React from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from '../../services/Api/api';

const Movies = name => {
  return (
    <li>
      <Link>{name.title}</Link>
    </li>
  );
};

export default Movies;
