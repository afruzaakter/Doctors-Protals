import React from 'react';
import {useQuery} from 'react-query';
import Loading from '../../Pages/Shared/Loading';
import UserRow from './UserRow';
const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
      method: 'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    

   
    return (
        <div>
            <h2>All users: {users.length}</h2>

            <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    
    {
        users?.map((user, index) =>
            <UserRow key={user._id}
             user={user}
             index={index}
             refetch={refetch}
             >

            </UserRow>
            )
    }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;