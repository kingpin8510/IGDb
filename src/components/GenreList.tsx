import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return <p>Loading genres...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {data &&
        data.map((gen: Genre) => <li key={gen.id}>{gen.name}</li>)}
    </ul>
  );
};

export default GenreList;
