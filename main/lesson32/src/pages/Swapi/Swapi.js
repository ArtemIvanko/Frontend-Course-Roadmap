import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData } from "./swapiSlice";

export const Swapi = () => {
  const dispatch = useDispatch();
  const swapiData = useSelector((state) => state.swapi.data);

  useEffect(() => {
    dispatch(fetchSwapiData());
  }, [dispatch]);


  return (
    <div>
      <h1>Swapi Data</h1>
      <ul>
        {swapiData.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
