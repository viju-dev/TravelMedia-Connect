
import { IconName } from "react-icons/lu";
import {FiHome,FiBell,FiBookmark,FiUser } from "react-icons/fi";

const Header = () => {
    return (
        <div className="headerContainer">
           <div className="title">
           <p>TravelMedia.in</p>
           </div>
            <div className="iconContainer">
            
                <FiHome/>
                <FiBell/>
                <FiBookmark/>
                <FiUser/>
            
            </div>
        </div>
    )
}

export default Header;