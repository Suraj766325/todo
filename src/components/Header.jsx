import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/userSlice'
import { userLogout } from '../service/user.service'

function Header() {
    const {status,user}=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const navItems=[
        {name:'Register',slug:'/register',active:!status},
        {name:'Login',slug:'/login',active:!status}
    ]

    const handleLogout=async()=>{
        await userLogout()
        dispatch(logout())
    }

  return (
    <>
        <div className='h-16 w-full bg-[#1e3352] shadow-2xl flex items-center px-4'>
            <header className='w-full'>
                <nav className='flex justify-between items-center'>
                    <div className='font-bold text-2xl text-white'>Manage your Todos</div>
                    <div className='flex gap-3'>
                    {
                        navItems.map((ele,index)=>(ele.active &&
                            <Link to={ele.slug} key={index}>
                                <button className="px-3 py-1 rounded-lg bg-blue-500 text-white">
                                   {ele.name}
                                </button>
                            </Link>
                        ))
                    }
                    {status &&
                        <>
                            <button className='px-3 py-1 rounded-lg bg-red-500 text-white' onClick={handleLogout}>Logout</button>
                            {user.avatar && (
                                <img src={user.avatar} alt="avatar" className='w-10 h-10 rounded-full'/>
                            )
                            }
                        </>
                    }
                    </div>

                </nav>
            </header>

        </div>
    </>
  )
}

export default Header
