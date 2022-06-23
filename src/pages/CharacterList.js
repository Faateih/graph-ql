import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";
import { NavLink } from "react-router-dom";

const CharacterList = () => {
  const { error, loading, data } = useCharacters();
  console.log({ error, loading, data });
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Error happened</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <NavLink to={`./${character.id}`}>
              <img src={character.image} />
              <h2>{character.name}</h2>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
