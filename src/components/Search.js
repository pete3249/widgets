import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])

    // Run anytime term changes (user types)
    useEffect(() => {
        // queue up change to debouncedTerm that is going to execute in 1 sec
        const timerId = setTimeout(()=> {
            setDebouncedTerm(term);
        }, 1000)

        // if user changes term too quickly, will clear and set up another timer
        return () => {
            clearTimeout(timerId);
        };
    }, [term])

    // Run when component first rendered on screen and when there is change to debouncedTerm
    // Call search, take results, update piece of state
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm])

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search term</label>
                    <input 
                        type="text" 
                        onChange={e => setTerm(e.target.value)} 
                        value={term}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}

export default Search;