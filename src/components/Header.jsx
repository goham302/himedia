import React, { useState } from 'react'
const header_Nav =[
	{
		title:"intro",
		url:"#intro"
	},
	{
		title:"skill",
		url:"#skill"
	},
	{
		title:"site",
		url:"#site"
	},
	{
		title:"portfolio",
		url:"#port"
	},
	{
		title:"contact",
		url:"#contact"
	},
]

const Header = () => {

	
		const [show,setShow]=useState(false);
		const toggleMenu=()=>{
			setShow(pShow => !pShow);
		}
	
	return (
		<header id='header'>
        <div className="header_inner">
          <div className="header_logo">
            <a href="/">portfolio <em>MM</em></a>
          </div>
          <div className={`header_nav ${show ? "show": ""}`} role='navigation' aria-label='메인메뉴'>
              <ul>
				{header_Nav.map((nav,key)=>(
						<li key={key}><a href={nav.url}>{nav.title}</a></li>	
					))}
                {/* <li><a href="#intro">intro</a></li> */}
              </ul>
          </div>
          <div className="header_mobile"
            id="headerToggle"
            aria-controls="primary-menu"
            aria-expanded={show ? "true" : "false"}
            role='button'
            tabIndex="0"
			onClick={toggleMenu}
          >
            <span></span>
          </div>
        </div>
    </header>
	)
}

export default Header