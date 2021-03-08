import React, { useEffect, useState } from 'react';
import {Button} from '@material-ui/core';
import './App.css';
import { formatMs } from '@material-ui/core';
import News from './Components/News/News';
import axios from 'axios';

function App() {
  const [articles,setArticles] = useState([]);
  // useEffect(()=>{
  //   const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ea1f9f52f6fe43a1b73b88490ba7d677'
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data=>setArticles(data.articles))
  // },[])
  useEffect(()=>{
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ea1f9f52f6fe43a1b73b88490ba7d677"
    axios(url)
    .then(data => setArticles(data.data.articles));
  },[])
  return (
    <div >
      <h2>Headlines :{articles.length}</h2>
      {
        articles.map(article =>  <News article={article}></News>)
      }
    </div>
  );
}

export default App;
