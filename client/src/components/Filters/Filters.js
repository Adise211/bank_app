import React from 'react';
import { useState } from 'react';
import './style.css';
import { useDispatch, useSelector} from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { balanceFilter, cityFilter, mortgageFilter, cardsFilter, twoFilters, threeFilters } from '../../actions/filters';
import { getPosts } from  '../../actions/posts';





const Filters = () => {
  const [ start,setStart ] = useState('');
  const [ end,setEnd ] = useState('');
  const [ cards, setCards ] = useState(null);
  const [ radioValue, setRadioValue ] = useState('None');
  const [ list, setList ] = useState([]);
  const [ selected] = useState('');
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();


  const addCity = (e) => {
      if (list === []) {
        setList(e.target.value)
      } else if (list.length > 4) {
        alert('Please choose up to 5 cities!')
      } else {
        setList([...list,e.target.value])
      }
  };





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
  };


  const clearFilters = () => {
    setStart('')
    setEnd('')
    setCards(null)
    setRadioValue('None')
    setList([])
    dispatch(getPosts())

  };




  return (
    <div className='container'>
      <p className='title'>Filters</p>
        <form onSubmit={handleSubmit}>

          <div className='c-dropdown-list'>
            <div className='c-list'>
                <p>City:</p>
                <select onChange={addCity} multiple>
                  <option></option>
                  {
                    posts.map(item => {
                      return  <option key={item._id}>{item.city}</option>
                    })
                  }
                </select>
            </div>
            <div className='c-selected'>
              <p>{selected}</p>
              {
                list
                ? list.map((item,i) => {
                  return <p key={i} value={item} className='cards'>{item}</p>
                })
                : []
              }
            </div>
          </div><hr/>


          <div className='b-balance'>
            <h4>OR</h4>
            <p>Balance:</p>
            <TextField style={{m:1,margin:4}} type='number' label='From' color='primary' variant='filled' size="small" onChange={(e) => setStart(e.target.value)}/>
            <TextField style={{m:1}} type='number' label='Up to' color='primary' variant='filled' size="small" onChange={(e) => setEnd(e.target.value)}/>
          </div>


            <div className='m-mortgage'>
              <p>Mortgage:</p>
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
              <p># Of Cards:</p>
              <TextField
                sx={{m:1}}
                type='number'
                label='Credit Cards'
                color='primary'
                variant='filled'
                size="small"
                onChange={(e) => setCards(e.target.value)}
                />
            </div>

          <Button
              type='submit'
              variant="contained"
              color='primary'
              style={{margin:10}}>
              Search
          </Button>

          <Button
              type='button'
              variant="contained"
              color='secondary'
              onClick={clearFilters}
              style={{}}>
              Clear Filters
          </Button>
        </form>


    </div>
  )
}



export default Filters;
