import * as React from 'react';
import PropTypes from 'prop-types';
import "./jobComp.css"

export default function Job({title, company, year, context}) {
    return (
    <div className='job'>
    <div className='other'> 
        <a className='marker'>✦</a>
         <div className="vertical-line"></div>
    </div>
    <div className="jobContent">
        <h6 className='jobtitle'> {title} </h6>
        <h6 className='comp'> {company} </h6>
        <h6 className='year'> {year} </h6>
        <h6 className='context'> {context} </h6>

    </div>
    </div>
    );
}

