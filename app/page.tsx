import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    // If the user is already authenticated, redirect to the dashboard
    redirect("/login");
  }
  return <Navbar />;
};

export default Home;
