import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiOutlineSearch } from 'react-icons/hi'
import UserMe from './users/me.jpg';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import classNames from 'classnames'
import UserProfile from '../Modals/UserProfileModal';

export default function Header() {
	const navigate = useNavigate()

	const [showUserModal, setShowUserModal] = useState(false);
	const handleClose = () => setShowUserModal(false);
	

	return (
		<div className="bg-[#3C8DBC]  h-14  px-1 flex items-center border-b border-gray-200 justify-between">
			<div className="relative left-2/3">
				<HiOutlineSearch fontSize={20} className="focus:bg-white text-gray-400 sm:absolute sm:top-1/2 sm:left-40 -translate-y-1/2" />
				<input
					type="text"
					placeholder="Search Document"
					className="bg-[#374850] focus:bg-white text-sm -none  active:outline-none  w-48 h-8 pl-5 pr-4 rounded-md"
				/>
			</div>
			<div className="flex items-center gap-2 mr-2">
				<Menu as="div" className="sticky right-7">
					<div className=''>
						<Menu.Button className="ml- flex text-sm rounded-none focus:outline-none focus:ring-[#3C8DBC]">
							<div
								className="h-8 w-8 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
							>
								<img src={UserMe} alt="" className='h-8 w-8 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center' />
								
							</div>
							<span className="text-white text-base py-1" >Jeyllou Maru</span>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className=" origin-top-right z-10 absolute right-0 mt-3 w-64 rounded-sm shadow-md p-1 bg-[#3C8DBC] ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className='h-auto '>
									<Menu.Item>
									{({ active }) => (
										<div
											className={classNames(
												active && '',
												'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
											)}
										>
											<img src={UserMe} alt="" className='rounded-full w-20 ml-16' />
											<span className='ml-16 text-white'>Jeyllou Maru</span><br/>
											<span className='text-[13px] text-white font-normal sm:ml-16 self-auto'>Administrator</span>
										</div>
										)}
									</Menu.Item>
								</div>	
							<div className='flex justify-between bg-white '>
								<div>
									<Menu.Item>
										{({ active }) => (
											<div
											onClick={() => setShowUserModal(true)}
												className={classNames(
													active && '',
													'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
												)}
											>
												<button type='submit' className='border hover:border-gray-400 w-20 hover:bg-gray-200'>Profile</button>
											</div>
										)}
									</Menu.Item>
								</div>
								<div>
									<Menu.Item>
										{({ active }) => (
											<div
												onClick={() => navigate('/logout')}
												className={classNames(
													active && '',
													'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
												)}
											>
												<button  type='submit' className='border w-20 hover:border-gray-400 hover:bg-gray-200'>Logout</button>
											</div>
										)}
									</Menu.Item>				
								</div>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
			<UserProfile onClose={handleClose} visible={showUserModal}/>
		</div>
	)
}