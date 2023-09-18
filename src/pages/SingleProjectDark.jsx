import Sidebar from "../sections/Sidebar";
import logo1 from '../assets/fi-sr-badge.svg';
import girlStudying from "../assets/girlStudying.mp4";
import ProjectBox from "../components/ProjectBox";
import { youmaylike } from "../data/youmaylike";
import titlebg from "../assets/titlebg.png" 
const SingleProjectDark = () => {
    return (  
        <div className="relative flex w-full h-full text-black bg-[rgb(246,255,252)]"> 
            <Sidebar bg={"rgb(66,87,77)"}/>
            
            <div className=" relative w-full shrink-1 space-y-10" >
                <div className="text-white p-5 bg-[rgb(44,43,43)] font-mono">
                    <h1 className="my-5">Title</h1>
                </div>
                <div className="text-white px-5 p-2 bg-[rgb(44,43,43)] font-mono ml-5 my-5 w-3/4 rounded-full">
                    <h3 >Published by xyz student under abc college</h3>
                </div>
                <div className="flex text-2xl justify-around py-3 bg-[rgb(44,43,43)] font-mono rounded-full w-[90%] ml-5" >
                    <p className="bg-white px-2"><a className="visited:text-black unvisited:text-black" href = "#images">Images</a></p>
                    <p className="bg-white px-2"><a href = "#details" className="visited:text-black unvisited:text-black">Details</a></p>
                    <p className="bg-white px-2"><a href = "#code" className="visited:text-black unvisited:text-black">Source Code</a></p>
                    <p className="bg-white px-2"><a href = "#videos" className="visited:text-black unvisited:text-black">Videos</a></p>
                    <p className="bg-white px-2"><a href = "#tech" className="visited:text-black unvisited:text-black">Technologies Used</a></p>
                </div>
                <div >
                    <div className="text-white px-5 p-2 bg-[rgb(44,43,43)] font-mono my-5 w-3/4 rounded-r-2xl">
                        <h2 className="text-4xl">Developing Team</h2>
                        <hr className="w-3/4 bg-black"/>
                    </div>
                    <div className="flex justify-around mx-10">
                        <div className="flex m-5 w-[70px] h-20 hover:h-auto text-sm hover:w-[30%] hover:text-sm overflow-hidden border-1 rounded-xl hover:scale-x-150 hover:scale-y-150 duration-500 easeInOut hover:shadow-2xl p-2">
                            
                            <img src = {logo1} className="border-black border-4 border-solid aspect-square rounded-full bg-red-200 h-14 w-14" />
                            <p className="whitespace-normal ml-2">
                                Devansh Arora<br/>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quos unde hic labore iure quod, laudantium temporibus necessitatibus. Incidunt, consectetur!
                            </p>
                        </div>
                        <div className="flex m-5 w-[70px] h-20 hover:h-auto text-sm hover:w-[30%] hover:text-sm overflow-hidden border-1 rounded-xl hover:scale-x-150 hover:scale-y-150 duration-500 easeInOut hover:shadow-2xl p-2">
                            
                            <img src = {logo1} className="aspect-square rounded-full bg-red-200 h-14 w-14 border-black border-4 border-solid" />
                            <p className="whitespace-normal ml-2">
                                Devansh Arora<br/>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quos unde hic labore iure quod, laudantium temporibus necessitatibus. Incidunt, consectetur!
                            </p>
                        </div>
                        <div className="flex m-5 w-[70px] h-20 hover:h-auto text-sm hover:w-[30%] hover:text-sm overflow-hidden border-1 rounded-xl hover:scale-x-150 hover:scale-y-150 duration-500 easeInOut hover:shadow-2xl p-2">
                            
                            <img src = {logo1} className="aspect-square rounded-full bg-red-200 h-14 w-14 border-black border-4 border-solid" />
                            <p className="whitespace-normal ml-2">
                                Devansh Arora<br/>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quos unde hic labore iure quod, laudantium temporibus necessitatibus. Incidunt, consectetur!
                            </p>
                        </div>
                        <div className="flex m-5 w-[70px] h-20 hover:h-auto text-sm hover:w-[30%] hover:text-sm overflow-hidden border-1 rounded-xl hover:scale-x-150 hover:scale-y-150 duration-500 easeInOut hover:shadow-2xl p-2">
                            
                            <img src = {logo1} className="aspect-square rounded-full bg-red-200 h-14 w-14 border-black border-4 border-solid" />
                            <p className="whitespace-normal ml-2">
                                Devansh Arora<br/>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quos unde hic labore iure quod, laudantium temporibus necessitatibus. Incidunt, consectetur!
                            </p>
                        </div>
                    </div>  
                </div>
                <div>
                    <div id="images">
                        <div  className="text-white px-5 p-2 bg-[rgb(44,43,43)] font-mono my-5 w-3/4 rounded-r-2xl">
                            <h2 className="text-4xl">Images</h2>
                            <hr className="w-3/4 bg-black h-[1.5px]"/>
                        </div>
                        <div className="px-10">
                            <img src={logo1} className="w-[35%] h-20 align-center mt-10"/>
                        </div>
                        
                    </div>
                    <div id = "details">
                        <div  className="text-white px-5 p-2 bg-[rgb(44,43,43)] font-mono my-5 w-3/4 rounded-r-2xl">
                            <h2 className="text-4xl">Details</h2>
                            <hr className="w-3/4 bg-black h-[1.5px]"/>
                        </div>
                        <div className="px-10">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta! Provident necessitatibus at dolor cupiditate id velit fugiat doloribus, repellat excepturi in illo, eius pariatur obcaecati accusamus veritatis veniam recusandae! Nulla eos, nesciunt eveniet excepturi consequatur, unde est beatae esse quam voluptates atque iusto? Cum earum officia quasi necessitatibus eum explicabo, mollitia molestiae eos ducimus quas expedita exercitationem quibusdam odio, sunt, beatae incidunt facere maiores ex dolor itaque iure optio repudiandae! Deleniti distinctio obcaecati odio beatae ipsum, nobis corrupti suscipit? Animi optio excepturi earum accusamus! Asperiores ad praesentium minima id, dolorem ex accusantium numquam, nam eius aliquam in ratione harum?</p>
                            <ul className="list-disc pl-5">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus optio vel dolorum rerum nulla placeat, eligendi mollitia voluptate ut id?</p>
                        </div>
                    </div>
                    <div id="code" className="my-5">
                        <div  className="text-white px-5 p-2 bg-[rgb(44,43,43)] font-mono my-5 w-3/4 rounded-r-2xl">
                            <h2 className="text-4xl">Source Code</h2>
                            <hr className="w-3/4 bg-black h-[1.5px]"/>
                        </div>

                        <p className="px-10">While we develop our own Code playground, you can browse the code at GitHub, <a href = "#">Click Here</a> to visit the GitHub repository.</p>
                    </div>
                    <div id="videos" className="my-5">
                        <div  className="text-white px-5 p-2 bg-[rgb(44,43,43)] font-mono my-5 w-3/4 rounded-r-2xl">
                            <h2 className="text-4xl">Videos</h2>
                            <hr className="w-3/4 bg-black h-[1.5px]"/>
                        </div>
                        <video
                            autoPlay
                            loop
                            muted
                            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
                            className="w-full my-12 px-10"
                        >
                            <source src={girlStudying}></source>
                        </video>
                    </div>
                    <div id="tech" className="my-5">
                        <div  className="text-white px-5 p-2 bg-[rgb(44,43,43)] font-mono my-5 w-3/4 rounded-r-2xl">
                            <h2 className="text-4xl">Technologies Used</h2>
                            <hr className="w-3/4 bg-black h-[1.5px]"/>
                        </div>
                        <p className="px-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate minima recusandae at obcaecati, deserunt placeat, in eum voluptate quia blanditiis aliquam. Voluptates blanditiis voluptatibus vel doloremque necessitatibus vitae voluptatem eum culpa, ipsa, rem sed, repellat quis minima! Eius consequatur, qui, quae autem harum delectus consequuntur, repellat pariatur amet perspiciatis ducimus!</p>
                    </div>
                    <div className="w-full text-center mt-10">
                        <h1 className="bg-[rgb(163,188,176)] py-2">You may also like</h1>
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
        </div>
    );
}
 
export default SingleProjectDark;