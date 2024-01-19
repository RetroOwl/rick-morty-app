import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import CharacterList from './components/CharacterList';
import './App.css';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {

  return (
    <Router>
      <Container>
        <h1>Rick and Morty Characters</h1>
        <Routes>
          <Route path="/" element={<CharacterList />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;