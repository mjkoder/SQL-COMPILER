import React, { useState, Suspense, lazy } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {queriesData} from './data/queries';

const QueryEditor = lazy(() => import('./components/queryEditor'));
const QuerySelector = lazy(() => import('./components/querySelector'));
const QueryResult = lazy(() => import('./components/queryResult'));


function App() {
  const [currentQuery, setCurrentQuery] =  useState('');
  const [currentResult, setCurrentResult] = useState([]);

  const runQuery = (query) =>{
    const queryData = queriesData.find(q => q.query === query);
    setCurrentResult(queryData ? queryData.result : []);
    setCurrentQuery(query);
  }
  return (
    <>
      <div className='app-container'>
        <h1>Professional SQL Query Application</h1>
        <Suspense fallback={
          <div>Loading Query Selector ....</div>
        }>
          <QuerySelector queries={queriesData} onSelectQuery={runQuery} />
        </Suspense>
        <Suspense fallback={
          <div>Loading Query Editor ....</div>
        }>
          <QueryEditor runQuery={runQuery} />
        </Suspense>

        {currentQuery && (
          <div className='current-query'>
            <strong> Current Query: </strong> {currentQuery}
          </div>
        )}
        <Suspense fallback={
          <div>Loading Query Selector ....</div>
        }>
          <QueryResult resultData={currentResult} query={currentResult} />
        </Suspense>
      </div>
    </>
  )
}

export default App
