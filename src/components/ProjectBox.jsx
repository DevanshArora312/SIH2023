const ProjectBox = ({source,title}) => {
    return (  
        <div className="h-[150px] w-1/4 m-7 bg-red-200 flex-col flex justify-around items-center">
            <img src={source} />
            <p>{title}</p>
        </div>
    );
}
 
export default ProjectBox;