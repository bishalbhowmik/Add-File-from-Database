import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CardOne from './components/CardOne/CardOne';
import HalfCircle from './components/HalfCircle/HalfCircle';
import Files from './components/Files/Files';

function App() {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setInformation(data))
  }, [])




  return (
    <div>
      <div className='bg-[#F2F4F7]'>
        {
          information.map(info => <CardOne
            key={info.id}
            info={info}
          ></CardOne>)
        }
      </div>

      <div>
        <Files></Files>
      </div>

    </div>
  );
}

export default App;
