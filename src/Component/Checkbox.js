import React, { useState, useEffect } from 'react';

const Checkbox = ({ options, selectedOptions, onChange }) => {
  const [allSelected, setAllSelected] = useState(false);
  const [individualOptions, setIndividualOptions] = useState([]);

  useEffect(() => {
    if (allSelected) {
      setIndividualOptions(options.map(option => option.name));
    } else {
      setIndividualOptions(selectedOptions);
    }
  }, [allSelected, options, selectedOptions]);

  const handleAllSelect = (event) => {
    const { checked } = event.target;
    setAllSelected(checked);
    onChange(checked ? options.map(option => option.name) : []);
  };

  const handleChange = (event, option) => {
    const { checked } = event.target;
    let updatedOptions;
    if (checked) {
      updatedOptions = [...individualOptions, option];
    } else {
      updatedOptions = individualOptions.filter(selectedOption => selectedOption !== option);
    }
    setIndividualOptions(updatedOptions);
    setAllSelected(updatedOptions.length === options.length);
    onChange(updatedOptions);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="all"
          checked={allSelected}
          onChange={handleAllSelect}
        />
        <label htmlFor="all">Select All</label>
      </div>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={option.name}
            value={option.name}
            checked={individualOptions.includes(option.name)}
            onChange={(event) => handleChange(event, option.name)}
          />
          <label htmlFor={option.name} className="text-lg">{option.name}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
