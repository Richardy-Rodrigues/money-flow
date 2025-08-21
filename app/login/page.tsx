import { DollarSign, LogInIcon } from 'lucide-react'
import { Button } from '../_components/ui/button'
import { SignInButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
    const { userId } = await auth();
    if (userId) {
        // If the user is already authenticated, redirect to the home page
        redirect('/');
    }
    return (
        <div className="center flex flex-col items-center justify-center min-h-screen">
            {/* Icon and Title */}
            <div className="flex flex-col items-center space-y-4">
                <DollarSign className="h-8 w-8 text-green-700" />
                <h1 className="text-2xl font-bold">Login Page</h1>
            </div>
            {/* Description */}
            <div className='mt-5'>
                <p className="text-center text-gray-600 ">
                    Faça login para acessar suas transações e assinatura.
                    <br />
                </p>

            </div>
            {/* Login Button */}
            <div className="center mt-6">
                <SignInButton >
                    <Button variant  ='outline'>
                        <LogInIcon className='mr-2' />
                        Fazer login ou criar conta
                    </Button>
                </SignInButton>
            </div>
        </div>
    )
}
 
export default LoginPage;