//import                          "../App.css"             ;
import React, { useState }   from            'react'; // the {} works as a hook
import   *    as FaIcons     from   'react-icons/fa';
import   *    as AiIcons     from   'react-icons/ai';
import            { Link }   from 'react-router-dom';
import     { SidebarData }   from    './sidebarData';
import                                "./Navbar.css";
import     { IconContext }   from      'react-icons'; /* Use this to directly alter the value of your items/objects. */

function Navbar() {
    const  [sidebar, setSidebar] = useState(false)   ;
    const           showSidebar  = () => setSidebar(!sidebar);
    //* html kinda thing starting below*//
    return (
        <>
            <IconContext.Provider value={{ color: 'black' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars 
                        onClick={showSidebar}
                        style={{color: '#611f2b'}}
                        />
                    </Link>
                    <div className='navbar-container'>
                        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                            <ul className="nav-menu-items" onClick={showSidebar}>
                                <li className="navbar-toggle">
                                    <Link to='#' className="menu-bars">
                                        <IconContext.Provider value={{color:'#611f2b'}}>
                                        <AiIcons.AiOutlineClose />
                                        </IconContext.Provider>
                                    </Link>
                                </li>
                                {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                <IconContext.Provider value={{color:'#611f2b',size: '25px'}}>
                                                    {item.icon}
                                                </IconContext.Provider>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;