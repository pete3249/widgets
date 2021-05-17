import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('')

    useEffect(() => {
        
    }, [term])

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
        </div>
    )
}

export default Search;