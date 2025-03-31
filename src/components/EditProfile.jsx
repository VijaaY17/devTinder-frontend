import axios from 'axios';

import UserCard from './UserCard';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useState } from 'react';

const EditProfile = ({ user }) => {
  console.log(user?.firstName);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [toast,setToast] = useState(false)
  
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
       "http://localhost:3000/profile/edit",
        { firstName, lastName, gender, age },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      setToast(true)
      setTimeout(() => {
        setToast(false)

      },3000)
      console.log(res.data.data);
    } catch (err) {
      if (err.response) {
        console.log('Server Response Error:', err.response.data);
        console.log('Status Code:', err.response.status);
        console.log('Headers:', err.response.headers);
      } else if (err.request) {
        console.log('No Response from Server:', err.request);
      } else {
        console.log('Error Message:', err.message);
      }
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div>
        <div className="flex justify-center">
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Edit Profile</h2>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <div className="label">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />

                <div className="label">
                  <span className="label-text">Gender</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>

              <div className="card-actions justify-end">
                <button className="btn btn-primary my-2" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, gender, age }} />
      {toast && (<div className="toast toast-top toast-center">
    
  <div className="alert alert-success">
      <span>Profile saved successfully.</span>
    </div>
  </div>
      )}
    
    </div>
  
    
  );
};

export default EditProfile;
