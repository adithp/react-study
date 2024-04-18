import LazyLoad from 'react-lazy-load';
import { useState,memo,useCallback,useMemo } from 'react';
import './App.css';

function App() {
  return (
    <div className='app'>
      
            
            <LazyLoad height={200}>
              <img src="https://placedog.net/500/280" />
            </LazyLoad>
            <LazyLoad height={200}>
              <img src="https://placedog.net/500/281" />
            </LazyLoad>
            <LazyLoad height={200}>
              <img src="https://placedog.net/500/282" />
            </LazyLoad>
            <LazyLoad height={200}>
              <img src="https://placedog.net/500/283" />
            </LazyLoad>
            <LazyLoad height={200}>
              <img src="https://placedog.net/500/284" />
            </LazyLoad>
    </div>
  );
}



export default App;
