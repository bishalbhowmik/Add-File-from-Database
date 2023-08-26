import React, { useEffect, useState } from 'react';
import person from '../../Images/person.jpg';
import person1 from '../../Images/person1.jpeg';
import person2 from '../../Images/person2.jpg';
import person3 from '../../Images/person3.jpg';
import person4 from '../../Images/person4.jpg';
import axios from 'axios';
import './CardOne.css';

const CardOne = ({ info }) => {
    const { title, name, description } = info;

    const [personInfo, setPersonInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/upload')
            .then(res => setPersonInfo(res))
            .catch(err => console.log(err));
    }, [])


    return (
        <div className='bg-white w-[300px] h-32 mb-2 rounded-[2px] p-2'>
 
            <div className='flex justify-between mb-5'>
                <div className='flex items-center'>
                    <span >
                        <img className='w-5 h-5 rounded-full mr-1' src={person1} alt="" />
                    </span>
                    <span>
                        <p className='text-xs font-semibold'>{title}</p>
                    </span>
                </div>

                <div className='flex items-center'>
                    <span >
                        <img className='w-5 h-5 rounded-full mr-1' src={person2} alt="" />
                    </span>
                    <span>
                        <p className='text-xs font-semibold'>{name}</p>
                    </span>
                </div>


            </div>
            <div className='flex items-center justify-between'>
                <span className='flex items-center'>
                    <i className="fa-regular fa-calendar-days text-xs mr-2"></i>
                    <p className='text-[11px] font-semibold'>{description}</p>
                </span>
                <span className='flex items-center bg-[#F3F4F7] px-[6px] py-1 rounded-sm'>
                    <i className="fa-regular fa-calendar-days text-xs mr-1"></i>
                    <p className='text-xs font-semibold'>1/2</p>
                </span>
            </div>

            <div className='flex items-center gap-[6px] mt-4 justify-evenly'>
                <span className='flex items-center'>
                    <img className='w-5 h-5 rounded-full mr-1' src={person3} alt="" />

                </span >
                <span >
                    <img className='w-5 h-5 rounded-full mr-1' src={person4} alt="" />
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