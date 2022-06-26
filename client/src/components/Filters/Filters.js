import React from 'react';
import { useState } from 'react';
import './style.css';
import { useDispatch, useSelector} from 'react-redux';
import { balanceFilter, cityFilter, mortgageFilter, cardsFilter, twoFilters, threeFilters } from '../../actions/filters';





const Filters = () => {
  const [ start,setStart ] = useState('');
  const [ end,setEnd ] = useState('');
  const [ cards, setCards ] = useState(null);
  const [ radioValue, setRadioValue ] = useState('None');
  const [ list, setList ] = useState([]);
  const [ selected, setSelected ] = useState('');
  const [ filters, setFilters ] = useState([]);
  const posts = useSelector((state) => state.posts);


  const addCity = (e) => {
      if (list === []) {
        setList(e.target.value)
      } else if (list.length > 4) {
        alert('Please choose up to 5 cities!')
      } else {
        setList([...list,e.target.value])
      }
  }






  const dispatch = useDispatch();


  const handleSubmit = (e) => {
      e.preventDefault();

      if (start && end && cards === null && radioValue === 'None') {
        dispatch(balanceFilter(start,end))

      } else if (cards && start === '' && end === '' && radioValue === 'None') {
        dispatch(cardsFilter(cards))

      } else if (radioValue !== 'None' && cards === null && start === '' && end === '') {
        dispatch(mortgageFilter(radioValue))

      } else if (list !== [] && start === '' && end === '' && radioValue === 'None' && cards === null) {
        dispatch(cityFilter(list))

      } else if (cards && radioValue !== 'None' && start && end ) {
        dispatch(threeFilters(start,end,radioValue,cards))

      } else {
        dispatch(twoFilters(start,end,radioValue,cards))
      }



  }




  return (
    <div className='container'>
      <h3>Filters:</h3>
        <form>
          <div className='b-balance'>
            From <input type='number' placeholder='0' name='from' onChange={(e) => setStart(e.target.value)} />
            Up to <input type='number' placeholder='20,000' name='upto' onChange={(e) => setEnd(e.target.value)} />
          </div>

          <div className='c-dropdown-list'>
            <div className='c-selected'>
              <p>{selected}</p>
              {
                list
                ? list.map((item,i) => {
                  return <p key={i} value={item}>{item}</p>
                })
                : []
              }
            </div>
            <div className='c-list'>
                <select onChange={addCity} multiple>
                  <option></option>
                  {
                    posts.map(item => {
                      return  <option key={item._id}>{item.city}</option>
                    })
                  }
                </select>
            </div>
          </div>


            <div className='m-mortgage'>
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

            <div className='c-credits'>
              Credit Cards <input type='number' placeholder='0' onChange={(e) => setCards(e.target.value)} />
            </div>

          <button type='submit' onClick={handleSubmit}>Click here</button>
        </form>
    </div>
  )
}



export default Filters;
