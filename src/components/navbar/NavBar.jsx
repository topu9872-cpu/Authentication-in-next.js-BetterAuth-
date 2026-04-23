"use client";
import { signOut, useSession } from "@/lib/auth-client";

import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { data, isPending } = useSession();
  if (isPending) {
    return <div className="mx-auto">Loading........</div>;
  }
  const user = data?.user;
  console.log(data);
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">ACME</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div>
            {user ? (
              <div>
                <p>Welcome {user.name}</p>
                <button onClick={() => signOut()}>singOut</button>{" "}
              </div>
            ) : (
              <div>
                <Link href="/auth/singin">Sing In</Link>
              </div>
            )}
          </div>
        </header>
      </nav>
    </div>
  );
};

export default NavBar;
