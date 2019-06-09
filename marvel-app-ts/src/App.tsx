import React from 'react'
import './App.css'
import {CharacterList} from "./views/CharacterList"
import {LeftPanel} from "./views/LeftPanel"

const App: React.FC = () => {
  return (
    <div className="App">
       <LeftPanel />
      <CharacterList />
    </div>
  );
};

export default App;
