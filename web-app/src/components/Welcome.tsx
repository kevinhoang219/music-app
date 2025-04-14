'use client';
import Link from 'next/link';
import Image from 'next/image';
import Pic1 from '../assets/recordswHeadphones.jpg';
import Pic2 from '../assets/coffee.jpg';
import Pic3 from '../assets/girlListening.jpg';

const Welcome = () => { 
    
    return (
        <div>
            <h1 className='p-10 text-4xl font-bold text-yellow-500'>TuneTribe </h1>
            <p className='text-left indent-18'>Have fun connecting over music with your friends and view your favorite artists, genres, and songs!</p>
            <p> add button to sign up</p>
            <h1 className='p-10 text-4xl font-bold text-yellow-500'>Features: </h1>
        <div className="min-h-full flex items-center justify-center">
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center m-4">
                <Image src={Pic1} alt="records and headphones" className='w-max justify-self-center p-5'/>
            <h1 className="text-xl font-bold text-gray-800 text-left">Leaderboard</h1>
            <div className="mt-12">
                <p className='text-left'>See how your listening habits compare to your fellow users</p>
            </div>

            </div>
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center m-4">
            <Image src={Pic2} alt="coffee cup" className='w-max justify-self-center p-5'/>
            <h1 className="text-xl font-bold text-gray-800 text-left">Connect with Friends</h1>
            <div className="mt-12">
            <p className='text-left'>Show off your amazing music taste and compare with friends</p>
            </div>

            </div>
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center m-4">
            <Image src={Pic3} alt="girl listening to music" className='w-max justify-self-center p-5'/>
            <h1 className="text-xl font-bold text-gray-800 text-left">Make playlists</h1>
            <div className="mt-12">
            <p className='text-left'>Create new playlists based on your unique tastes and share them with others</p>
            </div>
            </div>
    </div>
    </div>
    )};
export default Welcome;