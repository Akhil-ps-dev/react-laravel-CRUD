import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import http from '../axios/http'

export default function Home() {

    const [users, setUser] = useState([

    ]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('/users').then(res => {
            setUser(res.data);
        })

    }

    return (
        <div>
            <h2>Users listing.....</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>




                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (

                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className='btn btn-info' to={{ pathname: '/edit/' + user.id }}>Edit</Link>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    )
}
