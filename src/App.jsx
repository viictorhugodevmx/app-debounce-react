import { useState, useEffect } from 'react';

const DATA = [
  'React',
  'Angular',
  'Vue',
  'Svelte',
  'Next.js',
  'Node',
  'JavaScript',
  'TypeScript',
  'Redux',
  'Zustand',
];

const App = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    // cleanup: se ejecuta antes del siguiente effect
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  const filtered = DATA.filter(item =>
    item.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Buscador con debounce</h1>

      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Buscar..."
      />

      <ul>
        {filtered.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
