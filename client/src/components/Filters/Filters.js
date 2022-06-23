import React from 'react';
import { useState } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { balanceFilter } from '../../actions/posts';

const Filters = () => {
  const [ start,setStart ] = useState('');
  const [ end,setEnd ] = useState('');
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    // console.log(start,end);
    e.preventDefault();

    if (start && end ) dispatch(balanceFilter(start,end))

  }

  return (
    <div className='container'>
      <h3>Filters:</h3>
        <form>
          <p>1.Balance</p>
          From <input type='number' placeholder='0' name='from' onChange={(e) => setStart(e.target.value)}/>
          Up to <input type='number' placeholder='20,000' name='upto' onChange={(e) => setEnd(e.target.value)}/>
          <p>2.City</p>
          <p>3.Mortgage</p>
          <p>4.of cards</p>
          <button type='submit' onClick={handleClick}>Click here</button>
        </form>
    </div>
  )
}

export default Filters;
