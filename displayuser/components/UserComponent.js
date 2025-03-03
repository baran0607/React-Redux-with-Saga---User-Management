// UserComponent.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart, createUserThunk, fetchUserStart, fetchUserThunk } from '../actions/userActions';
import './UserComponent.css';


const UserComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Handle creating a user
    const handleCreateUser = () => {
        const userData = { name, email };
        dispatch(createUserStart());  // Dispatch start action for user creation
        dispatch(createUserThunk(userData)); // Thunk action to create user
    };

    // Fetch user data on component mount
    useEffect(() => {
        dispatch(fetchUserStart()); // Dispatch start action to fetch user data
        dispatch(fetchUserThunk()); // Dispatch the thunk action to fetch user data
    }, [dispatch]);

    return (
        <>
            <div>
                <h2>Create User</h2>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {user && (
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                )}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCreateUser();
                    }}
                >
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Create User</button>
                </form>
            </div>
            <div>
                <h2>User Info</h2>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {user && (
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserComponent;
