'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [toogleDropdown, setToogleDropdown] = useState(false);
  const isUserLoggedIn = true;

  //   useEffect(() => {
  //     const setProvidersList = async () => {
  //       const providersList = await getProviders();
  //       setProviders(providersList as any);
  //     };
  //     setProvidersList();
  //     console.log(providers);
  //   }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Nav  */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="orange_btn">
              Create Prompt
            </Link>
            <button onClick={() => signOut()} className="outline_red_btn">
              Sign Out
            </button>

            <Link href="/profile" className="flex gap-2 flex-center">
              <Image
                src="/assets/images/logo.svg"
                alt="Profile"
                width={30}
                height={30}
                className="object-contain rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="outline_btn"
                >
                  Sign in with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Nav  */}
      <div className="sm:hidden relative flex gap-3">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/icons/menu.svg"
              alt="Profile"
              width={30}
              height={30}
              className="object-contain rounded-full"
              onClick={() => setToogleDropdown((prevState) => !prevState)}
            />
            {toogleDropdown && (
              <div className="dropdown text-center">
                <div className="flex gap-2">
                  <Image
                    src="/assets/icons/copy.svg"
                    alt="Profile"
                    width={20}
                    height={20}
                    className="object-contain rounded-full"
                  />
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToogleDropdown(false)}
                  >
                    Profile
                  </Link>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/assets/icons/tick.svg"
                    alt="Profile"
                    width={20}
                    height={20}
                    className="object-contain rounded-full"
                  />
                  <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => setToogleDropdown(false)}
                  >
                    Create Prompt
                  </Link>
                </div>

                <button
                  onClick={() => {
                    setToogleDropdown(false);
                    signOut();
                  }}
                  className="outline_red_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="outline_btn"
                >
                  Sign in with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
