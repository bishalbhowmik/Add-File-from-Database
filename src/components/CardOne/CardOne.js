import React, { useEffect, useState } from 'react';
import person from '../../Images/person.jpg';
import axios from 'axios';

const CardOne = ({ info }) => {
    const { title, name, description } = info;

    const [personInfo, setPersonInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/upload')
            .then(res => setPersonInfo(res))
            .catch(err => console.log(err));
    }, [])


    return (
        <div className='bg-white w-[300px] mb-2 h-[auto] rounded-[2px] p-2 scroll overflow-y-auto h-32'>
            <div className='flex justify-between mb-5'>
                <div className='flex items-center'>
                    <span className='w-4 h-4 rounded-full mr-1'>
                        <img src={person} alt="" />
                    </span>
                    <span>
                        <p className='text-xs font-semibold'>{title}</p>
                    </span>
                </div>

                <div className='flex items-center'>
                    <span className='w-4 h-4 rounded-full mr-1'>
                        <img src={person} alt="" />
                    </span>
                    <span>
                        <p className='text-xs font-semibold'>{title}</p>
                    </span>
                </div>


            </div>
            <div className='flex items-center justify-between'>
                <span className='flex items-center'>
                    <i className="fa-regular fa-calendar-days text-xs mr-2"></i>
                    <p className='text-xs'>{description}</p>
                </span>
                <span className='flex items-center'>
                    <i className="fa-regular fa-calendar-days text-xs mr-1"></i>
                    <p className='text-xs'>1/2</p>
                </span>
            </div>

            <div className='flex items-center gap-[6px] mt-4 justify-evenly'>
                <span className='flex items-center'>
                    <img className='w-4 h-4 rounded-full mr-1' src={person} alt="" />

                </span >
                <span >
                    <img className='w-4 h-4 rounded-full mr-1' src={person} alt="" />
                </span>
                <span>
                    <p className='text-xs'>12+</p>
                </span>
                <span>
                    <i className="fa-regular fa-comments text-xs"></i>
                </span>
                <span>
                    <p className='text-xs'>15</p>
                </span>
                <span>

                    <label htmlFor="my-modal-4" className="cursor-pointer"><i className="fa-solid fa-link text-xs"></i></label>



                </span>
                <span>
                    <p className='text-xs'> {personInfo.data?.length}</p>
                </span>
                <span className='flex items-center gap-2'>
                    <i className="fa-regular fa-calendar-days text-xs "></i>
                    <p className='text-xs'>30-12-2022</p>
                </span>
                <span>

                </span>

            </div>
        </div>

    );
};

export default CardOne;