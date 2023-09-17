import React, { useState, useEffect } from 'react'
import { CollegeData } from '../data/collegeData';
import { useParams } from 'react-router-dom';
import HighlightedText from '../components/HighlightedText';
function Dashboard(){
    const [college, setCollege] = useState({
        name:"",
        id: "",
        established: "",
        monthly_rank: "",
        previous_ratings: [],
        most_liked_projects: [],
    })
    let {id} = useParams();
    useEffect(()=>{
        CollegeData.forEach((collegeObj)=>{
            if(collegeObj.id === id){
                setCollege({...collegeObj});
            }
        })
    }, [id])
    console.log(college);
    return (
        <div className='bg-white w-screen min-h-screen overflow-x-hidden overflow-y-auto py-4'>
            <div className='text-center'>
                <span className={'text-md font-bold text-slate-500'}>{college.name}</span>
            </div>
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div className='w-[65%] flex flex-col justify-between py-4'>
                    <div className='flex flex-col gap-2 justify-between'>
                        <div className='text-slate-700'>NAME: <span className='text-slate-500'>{college.name}</span></div>
                        <div className='text-slate-700'>ESTABLISHED: <span className='text-slate-500'>{college.established}</span></div>
                        <div className='text-slate-700'>DESCRIPTION: <span className='text-slate-500'>{college.description}</span></div>
                        <div className='text-slate-700 flex items-center gap-4'>RANK: <span className='bg-gradient-to-b from-[#1FA2FF] to-[#12D8FA] bg-clip-text text-transparent text-2xl font-bold'>{college.monthly_rank}</span></div>
                        <div className='text-slate-700 flex items-center gap-4'>RATING: <span className='bg-gradient-to-b from-[#1FA2FF] to-[#12D8FA] bg-clip-text text-transparent text-2xl font-bold'>{college.monthly_rating}</span></div>
                    </div>
                </div>
                <div className='w-[30%] flex flex-col items-center'>
                    <div className='text-center text-slate-700 font-bold '>PAST RATING RECORD</div>
                    <div className='flex items-end gap-4'>
                        {
                            college.previous_ratings.map((bar, index) => {
                                return (
                                    <div key={index} className='flex flex-col items-center'>
                                        <div className='text-sm text-slate-500'>{bar.rating}</div>
                                        <div style={{ height: `${bar.rating*4}px`, 
                                                      width: '50px',
                                                      background:'linear-gradient(118deg, #1FA2FF -2.4%, #12D8FA 52.25%)' }} ></div>
                                        <div className='text-sm text-slate-500'>{bar.month}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard;
