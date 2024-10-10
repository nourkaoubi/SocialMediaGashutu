import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Profile (){
    return (
             <>
        <Topbar/>
        <div className="profile">
           <Sidebar/>
           <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src="assests/posts/rain.jpg" alt="" />
                <img className="profileUserImg" src="assests/profilepicture/2.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Ross Geller</h4>
                    <span className="profileInfoDesc">I'm fine ! </span>
                </div>
                

            </div>
            <div className="profileRightBottom">
            <Feed/>
           <Rightbar profile/>
            </div>
           </div>
           
        </div>
       
        </>
    );
}
export default Profile ; 