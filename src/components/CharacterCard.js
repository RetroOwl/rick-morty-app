import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const CharacterCard = ({ character }) => {
  const [showPopup, setShowPopup] = useState(false);

  const Card = styled.div`
  border: 1px solid #b33eb59e;
  border-radius: 4px;
  background-color: #3b2aa881;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-family: 'arial';
  ${props => !showPopup && `
    &:hover {
      background-color: #b33eb59e;
      border: 3px solid #3b2aa8;
      transition: 0.4s ease;
      transform: scale(1.01);
    }
  `}
  ${props => showPopup && `
    background-color: #b33eb59e;
    border: 3px solid #3b2aa8;
    `}
`;

  const Popup = styled.div`
    position: fixed;
    right: 5%;
    top: 30%;
    width: 300px;
    background-color: #3b2aa881;
    border: 1px solid #b33eb59e;
    border-radius: 4px;
    transition: 0.9s ease;

    @media (max-width: 768px) {
      right: 10%;
      width: 130px;
    }
  `;

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <Card key={character.id} onClick={handlePopupToggle}>
      <h2 style={{ color: '#fad82f', fontFamily: 'get_schwifty' }}>{character.name}</h2>
      <h3 style={{ color: '#b0c7e8' }}>Gender: {character.gender}</h3>
      <h3 style={character.status === 'Alive' ? { color: '#07b519' } : { color: 'red' }}>{character.status}</h3>
      {showPopup && (
        <Popup key={character.id}>
          <h2 style={{ color: '#fad82f', fontFamily: 'get_schwifty', marginLeft: '10px' }}>{character.name}</h2>
          <h3 style={character.status === 'Alive' ? { color: '#07b519', marginLeft: '10px' } : { color: 'red', marginLeft: '10px' }}>Status: {character.status}</h3>
          <h3 style={{ color: '#b0c7e8', marginLeft: '10px' }}>Gender: {character.gender}</h3>
          <h3 style={{ color: '#b0c7e8', marginLeft: '10px' }}>Origin: {character.origin?.name}</h3>
          <h3 style={{ color: '#b0c7e8', marginLeft: '10px' }}>Species: {character.species}</h3>
          <h3 style={{ color: '#b0c7e8', marginLeft: '10px' }}>Episodes: {character.episode?.length}</h3>
          <h3 style={{ color: '#b0c7e8', marginLeft: '10px' }}>Location: {character.location?.name}</h3>
          <img src={character.image} style={{ width: '100%', height: 'auto' }} />
        </Popup>
      )}
    </Card>
  );
};

export default CharacterCard;