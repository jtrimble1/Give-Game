import React, { useState } from 'react'
import '../RolePage.css'
import { useParams } from 'react-router-dom'


function DynamicSignup() {

    const {role} = useParams();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        emails: [''],
        team_name: '',
        ein: '',
        organization: '',
        level: '',
        goal: '',
        strategy: '',
        bank_account: '',
        routing_number: '',
      });

    const handleChange = (field, value, index) => {
        if (field === 'emails') {
            const updatedEmails = [...formData.emails];
            updatedEmails[index] = value;
            setFormData({ ...formData, emails: updatedEmails });
        } else {
            setFormData({ ...formData, [field]: value });
        }
    };

    const addEmailField = () => {
        setFormData({ ...formData, emails: [...formData.emails, '']})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting:', formData);
    };

    if (role !== 'coach') {
        return <div className='signup-wrapper'>{role} signup page coming soon</div>
    }



    return (

        <div className="signup-wrapper">
        <h2 className="signup-title">Coach / Team Sign-Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
  
          <div className="input-group">
            <label>First Name</label>
            <input value={formData.first_name} onChange={(e) => handleChange('first_name', e.target.value)} />
          </div>
  
          <div className="input-group">
            <label>Last Name</label>
            <input value={formData.last_name} onChange={(e) => handleChange('last_name', e.target.value)} />
          </div>
  
          <div className="input-group">
            <label>Primary Email(s)</label>
            {formData.emails.map((email, index) => (
              <input
                key={index}
                value={email}
                onChange={(e) => handleChange('emails', e.target.value, index)}
                placeholder={`Email ${index + 1}`}
              />
            ))}
            <button type="button" onClick={addEmailField} className="add-email-btn">+ Add Email</button>
          </div>
  
          <div className="input-group">
            <label>Team Name / School Name</label>
            <input value={formData.team_name} onChange={(e) => handleChange('team_name', e.target.value)} />
          </div>
  
          <div className="input-group">
            <label>EIN / TAX ID</label>
            <input value={formData.ein} onChange={(e) => handleChange('ein', e.target.value)} />
          </div>
  
          <div className="input-group">
            <label>Higher League / Company / Gym / School</label>
            <input value={formData.organization} onChange={(e) => handleChange('organization', e.target.value)} />
          </div>
  
          <div className="input-group">
            <label>League Level / Grade Level (optional)</label>
            <input value={formData.level} onChange={(e) => handleChange('level', e.target.value)} />
          </div>
  
          <div className="input-group">
            <label>Fundraising Goal</label>
            <input value={formData.goal} onChange={(e) => handleChange('goal', e.target.value)} />
          </div>
  
          <div className="input-group">
            <label>How are you intending to raise money?</label>
            <textarea rows={4} value={formData.strategy} onChange={(e) => handleChange('strategy', e.target.value)} />
          </div>
  
          <div className="input-group">
            <label>Bank Account (optional)</label>
            <input value={formData.bank_account} onChange={(e) => handleChange('bank_account', e.target.value)} />
          </div>
  
          <div className="input-group">
            <label>Routing Number (optional)</label>
            <input value={formData.routing_number} onChange={(e) => handleChange('routing_number', e.target.value)} />
          </div>
  
          <button type="submit" className="next-button">Submit</button>
        </form>
      </div>
    )
}

export default DynamicSignup