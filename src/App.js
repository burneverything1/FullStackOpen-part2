import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import ShowCountries from './components/ShowCountries'

const App = () => {
  const [ countrySearch, setCountrySearch ] = useState('')
  const [ countryList, setCountryList ] = useState([])
  const [ filterCountries, setFiltered ] = useState([])

  const searchChangeHandler = (event) => {
    setCountrySearch(event.target.value)
    setFiltered(countryList.filter(country => country.name.toLowerCase().includes(countrySearch)))
  }

  const getCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountryList(response.data)
      })
  }

  let displayMode = 0

  if (filterCountries.length === 1){
    displayMode = 1
  } else if (filterCountries.length > 10){
    displayMode = 2
  } else {
    displayMode = 3
  }

  useEffect(getCountries, [])

  return (
    <>
      <Search value={countrySearch} onChange={searchChangeHandler}/>
      <ShowCountries countries={filterCountries} displayMode={displayMode}/>
    </>
  )
}

export default App