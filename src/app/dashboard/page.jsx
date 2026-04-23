import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const DashBoardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session);
  const user =session?.user;
  if(!user){
    redirect('/auth/singin')
//   return  <div>Please sing in to access the dashboard .</div>
  }
  return <div>DashBoardPage</div>;
};

export default DashBoardPage;
