import React from 'react'
import "./sidebar.css";
import {Home,LibraryBooks,People,MenuBook,LocalLibrary,ExitToApp} from "@material-ui/icons";

export default function Sidebar() {
  return (
      <div className="sidebar">
       <div className="sidebarWrapper">
         <div className="sidebarMenu">
           <h3 className="sidebarTitle">Tableau de bord</h3>
           <ul className="sidebarList">
             <li className="sidebarListItem">
               <Home/>
               Home
             </li>
             <li className="sidebarListItem">
               <MenuBook className="sidebarIcon"/>
               Ouvrages
             </li>
             <li className="sidebarListItem">
               <People  className="sidebarIcon"/>
               Lecteurs
             </li>
             <li className="sidebarListItem">
             <LibraryBooks  className="sidebarIcon"/>
               Mémoires
             </li>
             <li className="sidebarListItem">
             <People  className="sidebarIcon"/>
               Inventaires
             </li>
             <li className="sidebarListItem">
               <LocalLibrary  className="sidebarIcon"/>
               Bibliothécaires
             </li>
             <li className="sidebarListItem">
               <ExitToApp  className="sidebarIcon"/>
               Déconnecter
             </li>
           </ul>
         </div>
       </div>
    </div>
  )
}