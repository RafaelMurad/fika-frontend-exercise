const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false`
  );
  const data = await response.json();

  const movies = await loadGenres(data);

  return { results: movies };
};

const findMovie = async (searchTerm) => {
  if (!searchTerm) {
    return fetchMovies();
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&query=${searchTerm}&page=1&include_adult=false`
  );
  const data = await response.json();

  const movies = await loadGenres(data);
  return { results: movies };
};

const loadGenres = async (data) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US`
  );
  const genreData = await response.json();

  const movies = data.results.map((movie) => {
    const genreNames = movie.genre_ids.map((id) => {
      const genre = genreData.genres.find((genre) => genre.id === id);
      return genre.name;
    });
    return { ...movie, genreNames };
  });

  return movies;
};

export { fetchMovies, findMovie };
