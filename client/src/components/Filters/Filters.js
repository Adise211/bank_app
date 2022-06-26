import React from 'react';
import { useState } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { balanceFilter, getCities, mortgageFilter, cardsFilter, twoFilters } from '../../actions/filters';
// import SelectCity from './SelectCity';

const Filters = () => {
  const [ start,setStart ] = useState('');
  const [ end,setEnd ] = useState('');
  const [ cards, setCards ] = useState(null);
  const [ radioValue, setRadioValue ] = useState('None');


  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
      e.preventDefault();

      if (start && end && cards === null && radioValue === 'None') {
        dispatch(balanceFilter(start,end))

      } else if (cards && start === '' && end === '' && radioValue === 'None') {
        dispatch(cardsFilter(cards))

      } else if (radioValue !== 'None' && cards === null && start === '' && end === '') {
        dispatch(mortgageFilter(radioValue))

      } else if (start && end && radioValue !== 'None' && cards === null) {
        dispatch(twoFilters(start,end,radioValue))

      } else if (start && end && cards && radioValue === 'None') {
        dispatch(twoFilters(start,end,cards))
      }
      else {
        console.log(null);
      }



  }




  return (
    <div className='container'>
      <h3>Filters:</h3>
        <form>
          <p>1.Balance</p>
          From <input type='number' placeholder='0' name='from' onChange={(e) => setStart(e.target.value)} />
          Up to <input type='number' placeholder='20,000' name='upto' onChange={(e) => setEnd(e.target.value)} />
          <p>2.City</p>
            <div className='mortgage'>
              <p>Mortgage</p>
              <input
                type='radio'
                value='None'
                checked={'None' === radioValue}
                onChange={e => setRadioValue('None')}
                /> None

              <input
                type='radio'
                value='Yes'
                checked={'Yes' === radioValue}
                onChange={e => setRadioValue('Yes')}
                /> Yes

              <input
                type='radio'
                value='No'
                checked={'No' === radioValue}
                onChange={e => setRadioValue('No')}
                /> No

            </div>
          Credit Cards <input type='number' placeholder='0' onChange={(e) => setCards(e.target.value)} />
          <button type='submit' onClick={handleSubmit}>Click here</button>
        </form>
    </div>
  )
}

export default Filters;



// <select multiple>
//   {
//     posts.map(item => {
//       return (
//         <>
//           <option key={item._id} onClick={handleSelect}>{item.city}</option>
//         </>
//       )
//     })
//   }
// </select>
//
// <SelectCity />
