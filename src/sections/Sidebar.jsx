import {AiOutlineHome} from "react-icons/ai"
import {FaSchool,FaChalkboardTeacher} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import {MdOutlineLeaderboard} from "react-icons/md"
import {RiMedalLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'
const Sidebar = () => {
    return (  
        <>
        <div className="text-xl w-[40px] shrink-0 overflow-hidden hover:w-1/6 duration-500 easeInOut bg-[rgb(255,214,10)] sticky top-0 left-0 h-screen flex-col flex justify-around">
            <Link className="m-5 flex text-black p-2 border-black rounded-md hover:shadow-xl " to = '/'>
                <AiOutlineHome className="my-[3px] mr-2"/>Home
            </Link>
            <Link className="m-5 flex text-black p-2 border-black rounded-md hover:shadow-xl " to = '/'>
                <MdOutlineLeaderboard className="my-[3px] mr-2 block"/> Weekly Leaderboard
            </Link>
            <Link className="m-5 flex text-black p-2 border-black rounded-md hover:shadow-xl " to = '/'>
                <RiMedalLine className="my-[3px] mr-2"/> All time Top
            </Link>
            <Link className="m-5 flex text-black p-2 border-black rounded-md hover:shadow-xl " to = '/'>
                <FaSchool className="my-[3px] mr-2"/>Your College
            </Link>
            <Link className="m-5 flex text-black p-2 border-black rounded-md hover:shadow-xl " to = '/'>
                <CgProfile className="my-[3px] mr-2"/> Profile
            </Link>
            <Link className="m-5 flex text-black p-2 border-black rounded-md hover:shadow-xl " to = '/'>
                <FaChalkboardTeacher className="my-[3px] mr-2"/>Mentors
            </Link>
        </div>
        </>
    );
}
 
export default Sidebar;