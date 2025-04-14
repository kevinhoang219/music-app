'use client';
// This is from my Nextjs resources, Navbar_basic
import {useState} from 'react';
// import profileDefault from '@/assets/images/profile.png';

const Navbar = () => {
  const [isLoggedIn,setIsLoggedIn ] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(prev => !prev);
  }

  return (
    <nav className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* App Name */}
      <div className="text-lg font-bold">TuneTribe</div>

      {/* Leaderboard Button */}
      <div className="flex gap-4 items-center">
        <a className="hover:underline font-bold">Home</a>
      </div>

      { !isLoggedIn && (
        <div className='hidden md:block md:ml-6'>
          <div className='flex items-center'>
            <button onClick = {handleLogin} className='flex items-center text-orange-600 bg-neutral-50 hover:bg-orange-300 hover:text-white rounded-md px-3 py-2'>
              <span>Login</span>
            </button>
          </div>
        </div>
      )}

      { isLoggedIn && (
        <div className='hidden md:block md:ml-6'>
          <div className='flex items-center'>
            <button onClick = {handleLogin} className='flex items-center text-orange-600 bg-neutral-50 hover:bg-orange-300 hover:text-white rounded-md px-3 py-2'>
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
