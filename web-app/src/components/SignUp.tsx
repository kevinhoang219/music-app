'use client';
import { useState } from 'react';

interface formData {
    name: string;
    username: string;
    password: string;
    imageUrl: string;
}

interface signUpProps {
    onAddUser: (user : formData) => void;
}

const SignUp = ({ onAddUser } : signUpProps) => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    username: "",
    password: "",
    imageUrl: "",
  });

  // initialize setError
  const [error, setError] = useState('');

  const updateData = (data : React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [data.target.name]: data.target.value});
  };

  const handleSubmission = (submission : React.FormEvent) => {
    submission.preventDefault();

    // require username or password
    if (!formData.username || !formData.password) {
      setError('Username and password are required!');
      return;
    }

    // passing form input
    onAddUser(formData);

    // clear form
    setFormData({name: "", username: "", password: "", imageUrl: ""});

    setError(''); // reset error message
  };

    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white py-3">
       <h1 className="text-4xl font-bold mb-4 text-center">Signup</h1>
        <form onSubmit={handleSubmission} className='flex flex-col gap-2 border border-black rounded p-3'>
         <label htmlFor="name">Name</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="name"
            type="text"
            value={formData.name}
            onChange={updateData}
            placeholder="Enter your name"            
          />
          <label htmlFor="username">Username</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="username"
            type="text"
            value={formData.username}
            onChange={updateData}
            placeholder="Enter your username"
          />
          <label htmlFor="password">Password</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="password"
            type="password"
            value={formData.password}
            onChange={updateData}
            placeholder="Enter your password"
          />
          <label htmlFor="imageUrl">Image Link</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="imageUrl"
            type="url"
            value={formData.imageUrl}
            onChange={updateData}
            placeholder="Enter image URL"
          />
  
          <button type="submit" disabled={!formData.username || !formData.password} className="mt-4 bg-orange-500 text-white hover:bg-orange-300 hover:text-white p-2 rounded">Sign Up</button>
        </form>
      </div>
  );
}

export default SignUp;