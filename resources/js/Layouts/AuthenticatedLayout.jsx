import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
             <div className="min-h-screen bg-black text-white font-hanken">
                <header className="px-10">
                    <nav className="flex justify-between items-center py-4 border-b  border-white/10 ">
                        <div >
                            <NavLink href="/">
                                <img
                                    className="w-14 h-14 rounded-2xl "
                                    src="https://www.shutterstock.com/image-vector/job-logo-design-magnifying-glass-260nw-715130101.jpg"
                                    alt=""
                                />
                            </NavLink>
                        </div>
                        <div className="space-x-5   font-bold text-sm   ">
                            <NavLink href="/" className=" hover:text-green-500 hover:text-lg transition duration-[300ms] ">Jobs</NavLink>
                           <NavLink href="#" className=" hover:text-green-500 hover:text-lg  transition duration-[300ms]  ">Careers</NavLink>
                            <NavLink href="#" className=" hover:text-green-500 hover:text-lg  transition duration-[300ms] ">Salaries</NavLink>
                            <NavLink href="#" className=" hover:text-green-500 hover:text-lg  transition duration-[300ms]  ">Companies</NavLink>
                        </div>
                        <div >
                           {user ? (
                                <div className='space-x-6  font-bold flex items-center  '>
                                    <NavLink href="/jobs/create">post a job</NavLink>
                                    <form action="logout" method="post">
                                    <input type="hidden" name="_token" value={csrfToken} />
                                    <button className='text-sm text-gray-400'>Logout</button>
                                    </form>
                                </div>
                            ) : (
                               <div className='space-x-6' >
                                <NavLink href="/login">Log in</NavLink>
                                <NavLink href="/register">Register</NavLink>
                               </div>
                            )}
                        </div>
                    </nav>
                </header>
                <main className="mt-6  max-w-[986px]  mx-auto">{children}</main>
            </div>
    );
}
