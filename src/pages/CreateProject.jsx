import Sidebar from "../sections/Sidebar";
const CreateProject = () => {
    return (  
        <div className="relative flex w-screen h-full text-black bg-[rgb(246,255,252)]"> 
            <Sidebar bg={"rgb(66,87,77)"}/>
            <div className=" relative w-full shrink-1 space-y-10 flex flex-col items-center" >
                <div className=" w-full text-white p-5 bg-[rgb(44,43,43)] font-mono flex justify-center">
                    <h1 className="my-5">Request to Add Your Project</h1>
                </div>
                <form className="bg-blue-300/60 rounded-lg p-10 flex-col flex items-center w-[70%]">
                    <div className="flex text-xl">
                        <label htmlFor="title" className="pt-2 mr-3">
                            Title:
                        </label>
                        <input id = "title" placeholder="Title" maxlength = "30" className="rounded-xl p-2 h-10 focus:outline-none"/>
                        <p className="text-sm items-end p-4">(Max. 30 characters)</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default CreateProject;