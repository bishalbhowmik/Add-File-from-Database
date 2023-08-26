import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Modal = () => {
    const [file, setFile] = useState();

    const [person, setPerson] = useState([]);

    const handleUpload = e => {
        const formData = new FormData();
        formData.append('file', file)
        axios.post('http://localhost:3001/upload', formData)
            .then(res => {
                console.log(res)
                window.location.reload();

            })

            .catch(err => console.log(err))


        console.log(file)
    }

    useEffect(() => {
        axios.get('http://localhost:3001/upload')
            .then(res => setPerson(res))
            .catch(err => console.log(err));
    }, [])



    
   
    // console.log(p);
    console.log(person.data)
    return (
        <>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer text-center">
                <label className="modal-box relative" htmlFor="my-modal-4">
                    <div className='h-[100vh]'>
                        <h3 className="text-lg font-bold">File list and File upload here</h3>
                        <input type="file" onChange={e => setFile(e.target.files[0])} />
                        <button onClick={handleUpload}>Upload</button>

                        {person.data?.map(p=><p>{p.originalname}</p>)}
                    </div>
                </label>
            </label>


        </>
    );
};

export default Modal;