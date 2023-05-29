import React from 'react';
import Logo from '../../assets/images/logo.png';
import Profile from '../../assets/images/profile.webp';

const Header = () => {
	return (
		<div className='relative h-[72px] w-full flex items-center justify-between px-[32px] border-b-[1px]'>
			<img src={Logo} className='h-8' alt='' />
			<div className='flex gap-10 relative h-full'>
				<div className='flex items-center text-sm text-[#000] font-semibold border-b-[3px] border-[#FF385C]'>
					<span>Stays</span>
				</div>
				<div className='flex items-center py-4 text-sm text-[#717171]'>
					<span>Experiences</span>
				</div>
				<div className='flex items-center py-4 text-sm text-[#717171]'>
					<span>Online Experiences</span>
				</div>
			</div>
			<img src={Profile} alt='' className='h-10 rounded-full' />
		</div>
	);
};

export default Header;
