import React from 'react';
import './queryResult.css'

function QueryResult({resultData}){
    if(!resultData || resultData.length === 0){
        return <div className='no-results'> No Results to Display </div>
    }

    const headers = Object.keys(resultData[0]);

    return(
        <div className="result-table-container">
            <h2>Query Result</h2>
            <table className='result-table'>
                <thead>
                    <tr>
                        {
                            headers.map(header =>(
                                <th key={header}>{header.toUpperCase}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {resultData.map((row, index) => (
                        <tr key={index}>
                            {headers.map(header =>(
                                <td key={header}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default QueryResult;