import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CardOne from './components/CardOne/CardOne';
import HalfCircle from './components/HalfCircle/HalfCircle';
import Files from './components/Files/Files';
import '../src/style/style.css';
import Modal from './components/Modal/Modal';
import Signup from './components/Signup/Signup';

function App() {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setInformation(data))
  }, [])




  return (
    
    <div className='max-w-[90%] mx-auto mt-6'>
      <div className='flex items-center gap-2  h-[100vh]'>
        <div className='bg-[#F2F4F7] text-[#687084] w-20 h-[700px] overflow-x-auto border min-w-[320px] flex flex-col justify-center items-center'>
          <div className='flex justify-between items-center w-[300px] mt-8 py-4'>
            <div className='flex items-center'>
              <div className='right mr-2'></div>
              <div>
                <p className='text-[13px] font-bold '>Incomplete</p>
              </div>
            </div>
            <div className='bg-[#EAEEF3] rounded-sm py-1 px-2'>
              <p className='text-[13px] font-bold'>0</p>
            </div>
          </div>
          <div>
            {
              information.map(info => <CardOne
                key={info.id}
                info={info}
              ></CardOne>)
            }
          </div>
        </div>

        <div className='bg-[#F2F4F7] text-[#687084] w-20 h-[700px] overflow-x-auto border min-w-[320px] flex flex-col justify-center items-center'>
          <div className='flex justify-between items-center w-[300px] mt-8 py-4'>
            <div className='flex items-center'>
              <div className='right mr-2' id="two"></div>
              <div>
                <p className='text-[13px] font-bold '>To Do</p>
              </div>
            </div>
            <div className='bg-[#EAEEF3] rounded-sm py-1 px-2'>
              <p className='text-[13px] font-bold'>0</p>
            </div>
          </div>
          <div>
            {
              information.map(info => <CardOne
                key={info.id}
                info={info}
              ></CardOne>)
            }
          </div>
        </div>


        <div className='bg-[#F2F4F7] text-[#687084] w-20 h-[700px] overflow-x-auto border min-w-[320px] flex flex-col justify-center items-center'>
          <div className='flex justify-between items-center w-[300px] mt-8 py-4'>
            <div className='flex items-center'>
              <div className='right mr-2' id="three"></div>
              <div>
                <p className='text-[13px] font-bold '>Doing</p>
              </div>
            </div>
            <div className='bg-[#EAEEF3] rounded-sm py-1 px-2'>
              <p className='text-[13px] font-bold'>0</p>
            </div>
          </div>
          <div>
            {
              information.map(info => <CardOne
                key={info.id}
                info={info}
              ></CardOne>)
            }
          </div>
        </div>

        <div className='bg-[#F2F4F7] text-[#687084] w-20 h-[700px] overflow-x-auto border min-w-[320px] flex flex-col justify-center items-center'>
          <div className='flex justify-between items-center w-[300px] mt-8 py-4'>
            <div className='flex items-center'>
              <div className='' id="four"></div>
              <div>
                <p className='text-[13px] font-bold '>Under Review</p>
              </div>
            </div>
            <div className='bg-[#EAEEF3] rounded-sm py-1 px-2'>
              <p className='text-[13px] font-bold'>0</p>
            </div>
          </div>
          <div>
            {
              information.map(info => <CardOne
                key={info.id}
                info={info}
              ></CardOne>)
            }
          </div>
        </div>


        <div className='bg-[#F2F4F7] text-[#687084] w-20 h-[700px] overflow-x-auto border min-w-[320px] flex flex-col justify-center items-center'>
          <div className='flex justify-between items-center w-[300px] mt-8 py-4'>
            <div className='flex items-center'>
              <div className='' id="five"></div>
              <div>
                <p className='text-[13px] font-bold '>Completed</p>
              </div>
            </div>
            <div className='bg-[#EAEEF3] rounded-sm py-1 px-2'>
              <p className='text-[13px] font-bold'>0</p>
            </div>
          </div>
          <div>
            {
              information.map(info => <CardOne
                key={info.id}
                info={info}
              ></CardOne>)
            }
          </div>
        </div>
        <div className='bg-[#F2F4F7] text-[#687084] w-20 h-[700px] overflow-x-auto border min-w-[320px] flex flex-col justify-center items-center'>
          <div className='flex justify-between items-center w-[300px] mt-8 py-4'>
            <div className='flex items-center'>
              <div className=''></div>
              <div>
                <p className='text-[13px] font-bold '>Incomplete</p>
              </div>
            </div>
            <div className='bg-[#EAEEF3] rounded-sm py-1 px-2'>
              <p className='text-[13px] font-bold'>0</p>
            </div>
          </div>
          <div>
            {
              information.map(info => <CardOne
                key={info.id}
                info={info}
              ></CardOne>)
            }
          </div>
        </div>
        <div className='bg-[#F2F4F7] text-[#687084] w-20 h-[700px] overflow-x-auto border min-w-[320px] flex flex-col justify-center items-center'>
          <div className='flex justify-between items-center w-[300px] mt-8 py-4'>
            <div className='flex items-center'>
              <div className=''></div>
              <div>
                <p className='text-[13px] font-bold '>Incomplete</p>
              </div>
            </div>
            <div className='bg-[#EAEEF3] rounded-sm py-1 px-2'>
              <p className='text-[13px] font-bold'>0</p>
            </div>
          </div>
          <div>
            {
              information.map(info => <CardOne
                key={info.id}
                info={info}
              ></CardOne>)
            }
          </div>
        </div>
        <div className='bg-[#F2F4F7] text-[#687084] w-20 h-[700px] overflow-x-auto border min-w-[320px] flex flex-col justify-center items-center'>
          <div className='flex justify-between items-center w-[300px] mt-8 py-4'>
            <div className='flex items-center'>
              <div className=''></div>
              <div>
                <p className='text-[13px] font-bold '>Incomplete</p>
              </div>
            </div>
            <div className='bg-[#EAEEF3] rounded-sm py-1 px-2'>
              <p className='text-[13px] font-bold'>0</p>
            </div>
          </div>
          <div>
            {
              information.map(info => <CardOne
                key={info.id}
                info={info}
              ></CardOne>)
            }
          </div>
        </div>









      </div>



      {/* **************************** */}


      <div>
        <Modal>

        </Modal>
      </div>




    </div>
  );
}

export default App;
