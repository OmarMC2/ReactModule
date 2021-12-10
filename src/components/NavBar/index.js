import React, {useState, useEffect} from "react";
import "./NavBar.css"
export default function NavBar() {
	

     const [stateClass, setClass] = useState('unactive');
	
    let changeClass = 'unactive'

    
    
    
    return (
		<div className="content">
			<ul className='navBarContent'>
				<li className={changeClass} onClick={() => setClass(changeClass='acitve')} >Item 1 </li>
				<li className={changeClass} onClick={() => setClass(changeClass='active')}>Item 2 </li>
                <li className={changeClass} onClick={() => setClass(changeClass='active')}>Item 3 </li>
			</ul>
		</div>
	);
}
