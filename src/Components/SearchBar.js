import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { menuActions } from '../app/menuSlice';
import classes from './SearchBar.module.css';

const SearchBar = () => {


  const dispatch = useDispatch();
const [term,setTerm]= useState('');

  const submithandler=(e)=>{
    e.preventDefault();
    console.log(e.target[0].value);
    dispatch(menuActions.setSearchTerm(e.target[0].value));
    console.log('submitted');
    setTerm('')
  }


  return (



    <div className={classes.search}>
    <div className={classes.first}></div>
    <div className={classes.third}></div>
    <form onSubmit={submithandler}>
      <input type="text" placeholder='click me to search' value={term} onChange={(e)=>setTerm(e.target.value)} >
      </input>

 
      </form>
    </div>
  )
}

export default SearchBar