import React, {useState} from 'react';
import './queryEditor.css';
function QueryEditor({runQuery}){

    const [queryText, setQueryText] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        runQuery(queryText);
    }

    return (
        <div className="query-editor">
            <h2>SQL Query Editor</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    className='query-input'
                    value={queryText}
                    onChange={ (e) => setQueryText(e.target.value)}
                    rows={4}
                    placeholder='Enter Your SQL Query'
                />
                <br />
                <button type="submit" className='run-button'> 
                    Run
                </button>
            </form>
        </div>
    );
}

export default QueryEditor;