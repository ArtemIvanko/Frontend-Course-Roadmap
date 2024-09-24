import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersRequest } from "./actions";

const CharacterList = () => {
  const dispatch = useDispatch();
  const { characters, loading, error } = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(fetchCharactersRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.name}>{character.name}</li>
      ))}
    </ul>
  );
};

export default CharacterList;
