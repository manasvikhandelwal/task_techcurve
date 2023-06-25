import React, { useState } from 'react';
import { FaBars} from "react-icons/fa";
import { AiOutlineProject,AiFillProject,AiOutlineLogout } from "react-icons/ai";
import { VscProject} from "react-icons/vsc";
    

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
      
        {
            path:"/Projects",
            name:"Projects",
            icon:<AiOutlineProject/>
        },
         {
            path:"/opportunity",
             name:"opportunity",
            icon:<AiFillProject/>
        },
         {
           path:"/CustomerDetails",
           name:"CustomerDetails",
             icon:<VscProject/>
         },
         {
             path:"/Logout",
             name:"Logout",
             icon:<AiOutlineLogout/>
         }
       
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Vendor Dashboard</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;