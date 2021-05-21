import { React, useState  } from "react";
import './reactPhone.css';
import PhoneInput from 'react-phone-number-input';
 

const ReactPhone = () => {  
const [value, setValue] = useState()
    

    return (
        <div>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}/>
        {value}
        </div>
    )
  
};

export default ReactPhone;