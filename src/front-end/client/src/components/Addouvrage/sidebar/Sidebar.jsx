import React from 'react'
import "./sidebar.css";
import {Home,LibraryBooks,People,MenuBook,LocalLibrary,ExitToApp} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className='Menu'>
      <div className="sidebar">
       <div className="sidebarWrapper">
         <div className="sidebarMenu">
           <h2 className="sidebarTitle">Tableau de bord</h2>
           <ul className="sidebarList">
             <li className="sidebarListItem1">
               <Home/>
               Home
             </li>
             <li className="sidebarListItem1">
               <MenuBook/>
               Ouvrages
             </li>
             <li className="sidebarListItem1">
               <People className="sidebarIcon"/>
               Lecteurs
             </li>
             <li className="sidebarListItem1">
             <LibraryBooks  />
               Mémoires
             </li>
             <li className="sidebarListItem1">
             <People  />
               Inventaires
             </li>
             <li className="sidebarListItem1">
               <LocalLibrary  />
               Bibliothécaires
             </li>
             <li className="sidebarListItem1">
               <ExitToApp />
               Déconnecter
             </li>
           </ul>
         </div>
       </div>
    </div>
    </div>
  )
}