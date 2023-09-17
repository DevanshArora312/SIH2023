import Sidebar from "../sections/Sidebar";
import logo1 from '../assets/fi-sr-badge.svg';
import girlStudying from "../assets/girlStudying.mp4";
import ProjectBox from "../components/ProjectBox";
import { youmaylike } from "../data/youmaylike";
const SingleProject = () => {
    return (  
        <div className="relative flex w-full h-full text-black"> 
            <Sidebar/>
            <div className="my-5 mx-10 relative w-full shrink-1 space-y-10">
                <h1 >Title</h1>
                <h3 className="ml-5 ">Published by xyz student under abc college</h3>
                <div className="flex sticky text-black text-2xl justify-around">
                    <p><a href = "#images">Images</a></p>
                    <p><a href = "#details">Details</a></p>
                    <p><a href = "#code">Source Code</a></p>
                    <p><a href = "#videos">Videos</a></p>
                    <p><a href = "#tech">Technologies Used</a></p>
                    
                </div>
                <hr className="w-full bg-black "/>
                <div>
                    <h2 className="text-4xl mb-5">Developing Team</h2>
                    <div className="flex">
                        <div className="flex-col flex m-5">
                            <img src = {logo1} className="aspect-square rounded-full bg-red-200 w-14 h-14" />
                            <p>Member1</p>
                        </div>
                        <div className="flex-col flex m-5">
                            <img src = {logo1} className="aspect-square rounded-full bg-red-200 w-14 h-14" />
                            <p>Member1</p>
                        </div>
                        <div className="flex-col flex m-5">
                            <img src = {logo1} className="aspect-square rounded-full bg-red-200 w-14 h-14" />
                            <p>Member1</p>
                        </div>
                    </div>
                    
                </div>
                <div id="images">
                    <h2 className="text-4xl">Images</h2>
                    <hr className="w-3/4 bg-black my-5 h-[1.5px]"/>
                    <img src={logo1} className="w-[35%] h-20 align-center mt-10"/>
                </div>
               
                <div id = "details">
                    <h2 className="text-4xl">Details</h2>
                    <hr className="w-3/4 bg-black my-5 h-[1.5px]"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta! Provident necessitatibus at dolor cupiditate id velit fugiat doloribus, repellat excepturi in illo, eius pariatur obcaecati accusamus veritatis veniam recusandae! Nulla eos, nesciunt eveniet excepturi consequatur, unde est beatae esse quam voluptates atque iusto? Cum earum officia quasi necessitatibus eum explicabo, mollitia molestiae eos ducimus quas expedita exercitationem quibusdam odio, sunt, beatae incidunt facere maiores ex dolor itaque iure optio repudiandae! Deleniti distinctio obcaecati odio beatae ipsum, nobis corrupti suscipit? Animi optio excepturi earum accusamus! Asperiores ad praesentium minima id, dolorem ex accusantium numquam, nam eius aliquam in ratione harum?</p>
                    <ul className="list-disc pl-5">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus optio vel dolorum rerum nulla placeat, eligendi mollitia voluptate ut id?</p>
                </div>
                <div id="code">
                    <h2 className="text-4xl">Source Code</h2>
                    <hr className="w-3/4 bg-black my-5 h-[1.75px]"/>
                    <p>While we develop our own Code playground, you can browse the code at GitHub, <a href = "#">Click Here</a> to visit the GitHub repository.</p>
                </div>
                <div id="videos">
                    <h2 className="text-4xl">Videos</h2>
                    <hr className="w-3/4 bg-black my-5 h-[1.75px]"/>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
                        className="w-full my-12"
                    >
                        <source src={girlStudying}></source>
                    </video>
                </div>
                <div id="tech">
                    <h2 className="text-4xl">Technologies used</h2>
                    <hr className="w-3/4 bg-black my-5 h-[1.5px]"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate minima recusandae at obcaecati, deserunt placeat, in eum voluptate quia blanditiis aliquam. Voluptates blanditiis voluptatibus vel doloremque necessitatibus vitae voluptatem eum culpa, ipsa, rem sed, repellat quis minima! Eius consequatur, qui, quae autem harum delectus consequuntur, repellat pariatur amet perspiciatis ducimus!</p>
                </div>
                <div className="w-full">
                    <h1>You may also like</h1>
                    <div className="flex">
                        {
                            youmaylike.map((project,index)=>{
                                return (
                                    <ProjectBox source={project.source} title = {project.title}/>
                                )
                            })
                        }
                        
                    </div>

                </div>
            </div>
            
        </div>
    );
}
 
export default SingleProject;