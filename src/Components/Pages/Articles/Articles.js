import React from 'react'
import {useState,useEffect} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Articles() {
    const [query,setQuery] = useState('');
    const [category,setCategory] = useState('');
    const [articles,setArticles] = useState([]);

    const search = (query)=>{
        return fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=00b9d4ad8a8546a69549128f68f509b3`)
        .then((data)=>data.json())
        .then((res)=>{
            setArticles(res.articles)
            console.log(res);
        })
    };

    const searchByCategory = (query,category)=>{
        const paramForQuery = query ? `q=${query}&` : '';
        return fetch(`https://newsapi.org/v2/top-headlines?${paramForQuery}category=${category}&apiKey=00b9d4ad8a8546a69549128f68f509b3`)
        .then((data)=>data.json())
        .then((res)=>{
            console.log({res});
        })
    };

    console.log({articles})
    return (
        <div>
            <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Categories</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel  control={<Radio />} label="buisness" onClick={()=>{setCategory('buisness')}}/>
          <FormControlLabel  control={<Radio />} label="entertainment" onClick={()=>{setCategory('entertainment')}}/>
          <FormControlLabel  control={<Radio />} label="general" onClick={()=>{setCategory('general')}}/>
          <FormControlLabel  control={<Radio />} label="health" onClick={()=>{setCategory('health')}}/>

          <FormControlLabel  control={<Radio />} label="science" onClick={()=>{setCategory('science')}}/>
          <FormControlLabel  control={<Radio />} label="sports" onClick={()=>{setCategory('sports')}}/>
          <FormControlLabel  control={<Radio />} label="technology" onClick={()=>{setCategory('technology')}}/>



          
        </RadioGroup>
      </FormControl>
            <input onChange={(e)=>{setQuery(e.target.value)}}/>
            <button onClick={()=>{search(query)}}>search</button>
            <button onClick={searchByCategory}>searchByCategory</button>
            {articles.map((article)=>{
                return (<div>
                    <h1>{article.title}</h1>
                </div>)

            })}
            
        </div>
    )
}

export default Articles
