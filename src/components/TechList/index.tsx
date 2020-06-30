import React, { useState } from 'react';

const TechList: React.FC = () => {
  const [techs, setTechs] = useState<string[]>([]);
  const [newTech, setNewTech] = useState('');

  function handleAddTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">
        Tech
        <input
          id="tech"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleAddTech}>
        Adicionar
      </button>
    </form>
  );
};

export default TechList;
