import React, { Component } from 'react'
import './Filter.css';
var arr = [ 'Select Program Details','Industry Skill']
function Filter(props)
{
    return <div className="filter">
    <p className="filterby">FILTER BY</p>
    {arr.map(arritem=>
        <input className="filter1" placeholder={arritem}></input>
    )}

    </div>
}

export default Filter;