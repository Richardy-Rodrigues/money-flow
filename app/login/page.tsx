import { DollarSign, LogInIcon } from 'lucide-react'
import { Button } from '../_components/ui/button'

const LoginPage = () => {
    return (
        <div className="center flex flex-col items-center justify-center min-h-screen">
            {/* Icon and Title */}
            <div className="flex flex-col items-center space-y-4">
                <DollarSign className="h-8 w-8 text-green-700" />
                <h1 className="text-2xl font-bold">Login Page</h1>
            </div>
            {/* Description */}
            <div className=''>
                <p className="text-center text-gray-600 mt-5">
                    Faça login para acessar suas transações e assinatura.
                    <br />
                </p>

            </div>
            {/* Login Button */}
            <div className="center mt-6">
                <Button variant  ='outline'>
                    <LogInIcon className='mr-2' />
                    Fazer login ou criar conta</Button>
            </div>
        </div>
    )
}
 
export default LoginPage;