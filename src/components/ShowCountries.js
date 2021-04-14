import React, { useState } from 'react'

const SingleCountry = ({ country }) => {
    return (
        <>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt={country.name} height="200"/>
        </>
    )
}

const ShowCountries = ({ countries, displayMode }) => {
    const [ singleCountry, setSingleCountry ] = useState({})

    let display;

    const displaySingleCountry = (country) => {
        setSingleCountry(country.name)
    }

    if (displayMode === 3){
        display =
            <ul>
                {countries.map(country => <li key={country.alpha2Code}>{country.name}<button onClick={() => displaySingleCountry(country)}>show</button></li>)}
            </ul>
    } else if (displayMode === 2) {
        display = <p>Too many matches, specify another filter</p>
    } else {
        let country = countries[0]
        display = <SingleCountry country={country} />
    }

    return display
}

export default ShowCountries