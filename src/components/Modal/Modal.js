import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Modal = () => {
    const [file, setFile] = useState();

    const [person, setPerson] = useState();

    const handleUpload = () => {
        
        window.location.reload();
    }



    useEffect(() => {
        axios.get('https://task-server2-f0pe.onrender.com/files')
            .then(res => setPerson(res))
            .catch(err => console.log(err));
    }, [])






    console.log(person?.data?.file)
    return (
        <>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer text-center">
                <label className="modal-box relative" htmlFor="my-modal-4">
                    <div className='h-[100vh]'>
                        <h3 className="text-lg font-bold">File upload here</h3>
                        <span className='mb-3'>
                            < hr />
                        </span>

                        <form action="https://task-server2-f0pe.onrender.com/upload" method="POST" enctype="multipart/form-data">
                            <div className='my-3 mb-6'>
                                <input type="file" name="file" id="file" className="custom-file-input" />
                                <input type="submit" onClick={handleUpload} value="Submit" className='btn btn-sm btn-primary' />
                            </div>

                        </form>

                        <h3 className="text-lg font-bold mt-3">File List here</h3>
                        <span className=''>
                            < hr />
                        </span>

                        {person?.data?.file.map((p, i) => <p className='mb-1 border border-b-orange-50'>{i + 1}.   {p.filename}</p>)}
                    </div>
                </label>
            </label>


        </>
    );
};

export default Modal;