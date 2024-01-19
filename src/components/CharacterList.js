import React, { useState, useEffect } from 'react';
import { getCharacters } from '../api';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter(character => {
    if (nameFilter && !character.name.toLowerCase().includes(nameFilter.toLowerCase())) {
      return false;
    }
    if (statusFilter && character.status !== statusFilter) {
      return false;
    }
    if (genderFilter && character.gender !== genderFilter) {
      return false;
    }
    if (speciesFilter && character.species !== speciesFilter) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <div>
        <input
          type="text"
          style={{ width: '200px', height: '30px', marginRight: '10px', color: '#fad82f', backgroundColor: '#3b2aa881', fontSize: '20px' }}
          placeholder="Filter by name"
          value={nameFilter}
          onChange={e => setNameFilter(e.target.value)}
        />
        <select 
          value={statusFilter} 
          onChange={e => setStatusFilter(e.target.value)}
          style={{ width: '170px', height: '30px', marginRight: '10px', color: '#fad82f', backgroundColor: '#3b2aa881', fontSize: '20px', cursor: 'pointer' }}
          >
          <option value="">Filter by status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select 
          value={genderFilter} 
          onChange={e => setGenderFilter(e.target.value)}
          style={{ width: '170px', height: '30px', marginRight: '10px', color: '#fad82f', backgroundColor: '#3b2aa881', fontSize: '20px', cursor: 'pointer' }}
          >
          <option value="">Filter by gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <select 
          value={speciesFilter} 
          onChange={e => setSpeciesFilter(e.target.value)}
          style={{ width: '170px', height: '30px', marginRight: '10px', color: '#fad82f', backgroundColor: '#3b2aa881', fontSize: '20px', cursor: 'pointer' }}
          >
          <option value="">Filter by species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Humanoid">Humanoid</option>
          <option value="Cronenberg">Cronenberg</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {filteredCharacters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;