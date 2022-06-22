import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { findBalance } from '../../actions/posts';

const Filters = () => {
  const state = useSelector((state) => state);
  console.log('state from filters',state);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e.target.value);
  }


  return (
    <div className='container'>
      <h3>Filters:</h3>
        <form>
          <p>1.Balance</p>
          From <input type='number' placeholder='0' name='from' onChange={handleChange}/>
          Up to <input type='number' placeholder='20,000' name='upto' onChange={handleChange}/>
          <p>2.City</p>
          <p>3.Mortgage</p>
          <p>4.of cards</p>
        </form>
        <button onClick={() =>dispatch(findBalance())}>Click here</button>
    </div>
  )
}

export default Filters;
