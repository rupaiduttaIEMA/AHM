import React, { useState } from 'react';


const RemarksForm = () => {
  const [remarks, setRemarks] = useState('');

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (remarks) {
      alert('Please check everything before submitting the form');
      console.log('Remarks:', remarks);
      // You can perform further actions like submitting the remarks to a server here
    } else {
      alert('Please enter your remarks');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="remark-outer flex items-center justify-center ">
      <label htmlFor="remarks" className="remark-text px-2 font-medium">Remarks: </label>
      <textarea id="remarks" value={remarks} onChange={handleRemarksChange} className="remark-text-area border border-gray-400 px-2 py-1" style={{ minWidth: '200px' }} />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded">
        Done
      </button>
    </form>
  );
};

export default RemarksForm;
