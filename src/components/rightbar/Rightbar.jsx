import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../online/Online" ;

function Rightbar({profile}){
    const HomeRightbar=()=>{
        return (
            <>
            <div className="birthdayContainer">
                    <img src="assests/gift3.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Rachel Green</b> and <b>other friends</b> have a birthday today 
                    </span>
                </div>
                <img src="/assests/add.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                {Users.filter(u=>u.id>1).map((u)=>(  <Online key={u.id} user={u}/>))}
                </ul>
            </>
        );
    };
    const ProfileRightbar=()=>{
        return (
            <>
            <h4 className="rightbarTitle">User information 
            </h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">
                    City:
                </span>
                <span className="rightbarInfoValue">
                    New York
                </span>
                </div>
                <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">
                    From:
                </span>
                <span className="rightbarInfoValue">
                    Madrid
                </span>
                </div>
                <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">
                    Relationship:
                </span>
                <span className="rightbarInfoValue">
                    Single
                </span>
                </div>
           
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assests/profilepicture/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Monica Geller</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assests/profilepicture/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Monica Geller</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assests/profilepicture/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Monica Geller</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assests/profilepicture/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Monica Geller</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assests/profilepicture/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Monica Geller</span>
                </div>
            </div>

            </> 
            );

    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightbar/>
            </div>

        </div>
    );
}

export default Rightbar;