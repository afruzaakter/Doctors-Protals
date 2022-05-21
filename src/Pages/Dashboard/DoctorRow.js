import React from 'react';


const DoctorRow = ({ doctor, index,refetch,setDeletingDoctor}) => {
  const { name, specialty,img} = doctor;

 
  return (

    <tr class="hover">
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      
      <td>
        <label onClick={() =>setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-error">Delete</label>
       
        </td>
    </tr>

  );
};

export default DoctorRow;