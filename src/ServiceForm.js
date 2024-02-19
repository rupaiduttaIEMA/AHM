import React, { useState } from "react";
import Checkbox from "./Component/Checkbox";
import "./ServiceForm.css";
import MachineForm from "./Component/MachineForm";
import Calendar from "./Component/Calendar";
import RemarksForm from "./Component/RemarksForm";

function ServiceForm() {
  const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);
  const [remarks, setRemarks] = useState('');

  const ServiceData = [
    {
      name: "Lubrication",
      Visual_Inspection: [
        "Check for any oil leaks around the bearings or seals",
        "Ensure proper lubrication levels.",
      ],
      Bearing_Lubrication: [
        "Use the recommended lubricant.",
        "Lubricate bearings according to manufacturer",
      ],
      Oil_Quality: [
        "Replace oil if it shows signs of contamination or degradation.",
        "Check the condition of the lubricating oil.",
      ],
    },
    {
      name: "Overhauling",
      Visual_Inspection: [
        "Inspect motor for wear, damage.",
        "Check for corrosion.",
        
      ],
      Bearing_Lubrication: [
        "Inspect and replace bearings if needed.",
        "Verify rotor integrity.",
      ],
      Rotor_and_Stator_Inspection: [
        "Check windings for wear, overheating, or breakdown.",
        "Check oil condition.",
      ],
      Brush_Inspection_and_Replacement: [
        "Examine brushes thoroughly for signs of wear.",
        "Replace brushes",
      ],
    },
    {
      name: "Electrical_Testing",
      Insulation_Resistance: [
        "Perform insulation resistance test",
        "Record insulation resistance values",
      ],
      Connection_Checks: [
        "Inspect terminal connections for tightness.",
        "Verify proper cable routing and management.",
      ],
    },
    {
      name: "Cooling_System",
      Visual_Inspection: [
        "Ensure proper lubrication levels.",
        "Ensure proper lubrication levels.",
      ],
      Bearing_Lubrication: [
        "Use the recommended lubricant.",
        "Lubricate bearings according to manufacturer",
      ],
      Oil_Quality: [
        "Replace contaminated or degraded oil.",
        "Check lubricating oil condition.",
      ],
    },
    {
      name: "General_Inspection",
      Fan_Inspection: [
        " Check motor frame and housing for cracks or damage.",
        "Check for loose bolts or connections",
      ],
      Noise_and_Vibration: [
        "Listen for abnormal noises during operation.",
        "Check for excessive vibrations",
      ],
    },
  
  ];

  const handleCharacteristicsChange = (updatedCharacteristics) => {
    setSelectedCharacteristics(updatedCharacteristics);
  };

  const handleSubmit = () => {
    if (remarks) {
      alert('Form is successfully submitted!');
    
      setRemarks('');
      setSelectedCharacteristics([]);
      
    } else {
      alert('Please enter your remarks');
    }
  };

  return (
    <div className="container ">
      <nav className="navbar">
        <div className="nav-up underline">
          <h2>Motor Maintenance</h2>
        </div>
        <div className="nav-down">
          <MachineForm />
          <Calendar />
        </div>
      </nav>
      <div className="Body">
  {ServiceData.map((data, index) => (
    <div className="Cards" key={index}>
      <div className="card-heading">
        <div className="card-heading-left"><h7>{data.name}</h7></div><div className="card-heading-right"></div>
      </div>
      <div className="card-bottom flex-col">
      <div className="card-bottom-heading flex items-center justify-evenly h-10">
  {Object.keys(data)
    .filter(key => key !== "name") // Exclude the 'name' key
    .map((key) => (
      <div className="head-box" key={key}>
        <p>{key.replace(/_/g, " ")}</p>
      </div>
  ))}
</div>

        <div className="card-bottom-subpart flex justify-evenly">
          {Object.keys(data)
            .filter(key => key !== "name") // Exclude the 'name' key
            .map((key) => (
              <div className="box" key={key}>
                <Checkbox
                  options={data[key].map(name => ({ name }))} // Convert strings to objects with 'name' property
                  selectedOptions={selectedCharacteristics}
                  onChange={handleCharacteristicsChange}
                />
              </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
      <div className="Footer">
        <RemarksForm />
         <button onClick={handleSubmit} className="bg-blue-500 hover:bg-green-500 text-yellow font-bold py-3 px-6 rounded-lg">Submit</button>
      </div>
    </div>
  );
}

export default ServiceForm;
