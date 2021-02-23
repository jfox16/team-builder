
import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {

  const { addMember } = props;

  const [ formData, setFormData ] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addMember(formData);
    setFormData({});
  }

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' value={formData.name || ''} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type='text' name='email' value={formData.email || ''} onChange={handleInputChange} />
        </label>
        <label>
          Role:
          <input type='text' name='role' value={formData.role || ''} onChange={handleInputChange} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Form;