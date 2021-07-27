import React, { Component } from 'react'
import CourseDomain from './CourseDomain'



function Courses(props)
{
    return <div>

   {CourseDomain.map((Course)=>
   <div>
<a>{Course.name}</a>
       <ul>
           <li>
               {
                   Course.courses.map((subcourse)=>
                   <a>{subcourse}</a>
                   )
               }
           </li>
       </ul>
   </div>
   )}  
    </div>
}
export default Courses;