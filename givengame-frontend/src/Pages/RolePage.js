import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react'
import './RolePage.css'

function RolePage () {
    const [role, setRole] = useState('');
    const [isUserSaved, setIsUserSaved] = useState(false);
    const { user } = useUser();
    const navigate = useNavigate();
    const handleSubmit = () => {

        console.log('Selected Role:', role);
        navigate('');
    }

    useEffect(() => {
        if (!user || isUserSaved) return;
    
        const saveUser = async () => {
          try {
            const res = await fetch('/api/users', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: user.primaryEmailAddress.emailAddress,
                first_name: user.firstName,
                last_name: user.lastName,
                photo_url: user.imageUrl,
                phone: user.phoneNumbers?.[0]?.phoneNumber || null,
                method:
                  user.externalAccounts.length > 0
                    ? user.externalAccounts[0].provider
                    : 'local',
              }),
            });
    
            const data = await res.json();
            console.log('User saved:', data);
            setIsUserSaved(true);
          } catch (error) {
            console.error('Error saving user:', error);
          }
        };
    
        saveUser();
      }, [user, isUserSaved]);
    
      const handleContinue = () => {

        // if (role === 'coach' || role === 'parent' || role === 'sponsor') {
        //     navigate(`/signup/${role}`);
        //   } else {
        //     navigate('/thank-you');
        //   }
        if (role) {
          navigate('/thank-you');
        }
      };

    


    return (
        <div className="role-page-container">
      <div className="role-card">
        <h2 className="role-title">I want to Give and Game As:</h2>
        <div className="role-options">
          <label className="role-option">
            <input type="radio" name="role" value="coach" onChange={(e) => setRole(e.target.value)} />
            <span>Coach / Team</span>
          </label>

          <label className="role-option">
            <input type="radio" name="role" value="parent" onChange={(e) => setRole(e.target.value)} />
            <span>Parent / Guardian</span>
          </label>

          <label className="role-option">
            <input type="radio" name="role" value="sponsor" onChange={(e) => setRole(e.target.value)} />
            <span>Sponsor / Corporate Sponsor</span>
          </label>
        </div>

        <button
          onClick={handleContinue}
          disabled={!role}
          className={`next-button ${!role ? 'disabled' : ''}`}
        >
          Next
        </button>
      </div>
    </div>

    )
}

export default RolePage