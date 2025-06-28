import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import './Profile.css'

function Profile () {
    const { user } = useUser();
    const [ dbUser, setDbUser ] = useState(null);

    useEffect(() => {
        if (!user) return;

        const email = user.primaryEmailAddress.emailAddress;

        fetch(`/api/users/${email}`)
            .then(res => {
                if(res.status === 404) {
                    return fetch('/api/users', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            email,
                            first_name: user.firstName,
                            last_name: user.lastName,
                            photo_url: user.imageUrl,
                            phone: user.phoneNumbers?.[0]?.phoneNumber || null,
                            method: user.externalAccounts.length > 0
                            ? user.externalAccounts[0].provider
                            : 'local',
                        }),
                    }).then(res => res.json());
                } else {
                    return res.json()
                }
            })
            .then(data => setDbUser(data))
            .catch(err => console.error(err))
    }, [user]);

    if (!user || !dbUser) return <div>Loading profile...</div>

    return (
        <div className='profile-page'>
            
            <img src={dbUser.photo_url || user.imageUrl} alt="Profile Pic" className='profile-pic' />
            <h2>Welcome, {dbUser.first_name}!</h2>

            <div className='profile-info'>
                <p><strong>First Name:</strong> {dbUser.first_name}</p>
                <p><strong>Last Name:</strong> {dbUser.last_name}</p>
                <p><strong>Email:</strong> {dbUser.email}</p>
                <p><strong>Phone:</strong> {dbUser.phone || 'N/A'}</p>
                <p><strong>Card on file:</strong> Visa ending in **** {dbUser.card_last_four || '----'}</p>
                <p><strong>Current Teams:</strong> Team Example</p>
            </div>
        </div>

    )
}

export default Profile;