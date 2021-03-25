import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const onInputChnage = event => {
    setInput(event.target.value);
  };

  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };

  const onKeyDown = event => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChnage}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
