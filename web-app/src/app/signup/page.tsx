'use client';
import SignUp from "../../components/SignUp";
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
    const router = useRouter();
    const handleAddUser = (userData : any) => {
        console.log('User signed up: ', userData);
        router.push('/');
    };

    return <SignUp onAddUser={handleAddUser}/>;
};

export default SignUpPage;