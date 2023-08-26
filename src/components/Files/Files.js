import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal';

const Files = () => {
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

    console.log(person.data)


    return (
        <div>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>

            <h2 >{person.data?.length}</h2>


            

            <div>
                {
                    person.data?.map(p => p.originalname)
                }
            </div>

            {/* <div>
                {
                    person.data?.map(p => <Modal
                        key={p._id}
                        p={p}
                    ></Modal>)
                }
            </div> */}

            <div className="mt-5">
                <label htmlFor="my-modal-4" className="btn bg-primary text-white">Book Appointment</label>

            </div>
        </div>
    );
};

export default Files;