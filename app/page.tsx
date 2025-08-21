import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    // If the user is already authenticated, redirect to the dashboard
    redirect('/login');
  }
  return (
    <div>
      <UserButton showName />
    </div>
  );
}
 
export default Home;