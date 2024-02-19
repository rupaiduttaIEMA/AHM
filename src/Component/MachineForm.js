import React, { useState } from 'react';

const MachineForm = () => {
  const [machineType, setMachineType] = useState('');
  const [machineID, setMachineID] = useState('');

  const handleMachineTypeChange = (event) => {
    setMachineType(event.target.value);
  };

  const handleMachineIDChange = (event) => {
    setMachineID(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (machineType && machineID) {
      // console.log('Machine Type:', machineType);
      // console.log('Machine ID:', machineID);
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="machine-container px-4 py-2">
        <label htmlFor="machineType">Machine Type: </label>
        <select id="machineType" value={machineType} onChange={handleMachineTypeChange} className="border border-gray-400 ">
          <option value="">Select</option>
          <option value="Type A">Type A</option>
          <option value="Type B">Type B</option>
          <option value="Type C">Type C</option>
        </select>
      </div>
     
      <div className="  ">
        <label htmlFor="machineID">Machine ID: </label>
        <input type="text" id="machineID" value={machineID} onChange={handleMachineIDChange} className="border border-gray-400 " />
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default MachineForm;
