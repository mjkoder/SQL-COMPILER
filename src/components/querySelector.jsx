import React from 'react';
import './querySelector.css';

function QuerySelector({queries, onSelectQuery}){
    const handleChange = (e) => {
        onSelectQuery(e.target.value);
    }

    return (
        <div className='query-selector'>
            <h2>Select a Query</h2>
            <select className='selector-dropdown' onChange={handleChange}>
                <option value="">---Choose a Query---</option>
                {queries.map(q =>(
                    <option key={q.id} value={q.query}>{q.query}</option>
                ))}
            </select>
        </div>
    )
}

export default QuerySelector;