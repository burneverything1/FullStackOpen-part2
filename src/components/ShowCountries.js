import React from 'react'

const ShowCountries = ({ countries, displayMode }) => {


    if (displayMode === 3){
        return (
            <ul>
                {countries.map(country => <li key={country.alpha2Code}>{country.name}</li>)}
            </ul>
        )
    } else if (displayMode === 2) {
        return <p>Too many matches, specify another filter</p>
    } else {
        let country = countries[0]
        return (
            <>
                <h1>{country.name}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h2>languages</h2>
                <ul>
                    {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
                </ul>
                <img src={country.flag} alt={country.name} width="200" height="200"/>
            </>
        )
    }
}

export default ShowCountries