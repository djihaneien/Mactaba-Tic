import React from 'react'
import "./lesouvrages.css" 



/*
React.useEffect(() => {
  Axios.get("http://localhost:8090").then((res) => setImage(res.image))
    .catch((err) => console.log(err, "it has an error"));
});*/

export default function Lesouvrages() {
  return (
    <div className="lesouvrages">
        <div className="ouvrages">
            <span className="ouvragesTitle">Data Science</span>
            <div className="Image">
            <span className="image">image here</span>
             </div>
        </div>
        <div className="ouvrages">
            <span className="ouvragesTitle">Data Science</span>
            <div className="Image">
            <span className="image">image here</span>
             </div>
        </div>
        <div className="ouvrages">
            <span className="ouvragesTitle">Data Science</span>
            <div className="Image">
            <span className="image">image here</span>
             </div>
        </div>
        <div className="ouvrages">
            <span className="ouvragesTitle">Data Science</span>
            <div className="Image">
            <span className="image">image here</span>
             </div>
        </div>
        <div className="ouvrages">
            <span className="ouvragesTitle">Data Science</span>
            <div className="Image">
            <span className="image">image here</span>
             </div>
        </div>
        <div className="ouvrages">
            <span className="ouvragesTitle">Data Science</span>
            <div className="Image">
            <span className="image">image here</span>
             </div>
        </div>
    </div>
    
  )
}