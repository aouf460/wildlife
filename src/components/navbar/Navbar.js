import React from 'react'
import './Navbar.css'
import HomeIcon from "../../assets/home.png"
import User from "../../assets/User.png"
import Like from "../../assets/like.png"
import Settings from "../../assets/setting.png"
import Vector from "../../assets/vector.png"

function Navbar() {
    return (
        <div className="nav">
            <div className="icons">
            <input type="image" src={HomeIcon}/>
         
            </div>
            <div className="hra">
            <hr/>
            </div>
            <div className="user">
            <input type="image" src={User}/>
            </div>
            <div className="like">
            <input type="image" src={Like}/>
            </div>
            <div className="settings">
            <input type="image" src={Settings}/>
            </div>
            <div className="pn">
                <div className="o1">
                    01
                </div>
                <div className="o">
                    /
                </div>
                <div className="o4">
                    04
                </div>
            </div>
            <div className="arrowcont">
            <div className="contr">
            <div className="rarrow">
              
            <input type="image" src={Vector}/>
            </div>
            </div>
            <div className="contl">
            <div className="larrow">
            <input type="image" src={Vector}/>
            </div>

            </div>
            </div>
        </div>
    )
}

export default Navbar
