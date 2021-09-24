/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAll, getTeams } from '../../store/modules/teams';

export default function Soccer() {
  const teams = useSelector(selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    if (teams.length === 0) populateScreen();
  }, []);

  async function populateScreen() {
    dispatch(getTeams('2021'));
  }

  return (
    <React.Fragment>
      <h1>Futebol</h1>
      {teams.map((team, index) => (
        <h2 key={index}>{team.name}</h2>
      ))}
    </React.Fragment>
  );
}
