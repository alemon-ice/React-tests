import React, { useState, useEffect } from 'react';

const TechList: React.FC = () => {
  const [techs, setTechs] = useState<string[]>([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const techsStorage = localStorage.getItem('techs');

    if (techsStorage) {
      setTechs(JSON.parse(techsStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

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
