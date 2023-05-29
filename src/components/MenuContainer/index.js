import React from 'react';
import StarIcon from '../../assets/icons/star';

const MenuContainer = ({ data }) => {
	return (
		<div className='relative w-full h-min border-[1px] rounded-3xl cursor-pointer hover:shadow-xl duration-200 transition-shadow ease-in-out'>
			<img
				src={data.image}
				alt=''
				className='h-[200px] w-full rounded-t-3xl object-cover'
			/>
			<div className='flex flex-col justify-between w-full p-5 h-[180px]'>
				<div className='flex flex-col w-full gap-2'>
					<span className='text-[#111] font-medium text-lg'>{data.title}</span>
					<p className='p-0 m-0 text-[#717171] text-sm'>{data.place}</p>
				</div>
				<div className='flex justify-between items-center w-full'>
					<div className='text-sm'>
						<span className='text-[#111] font-semibold'>${data.amount}</span> /
						night
					</div>
					<div className='flex gap-2'>
						<StarIcon />
						<span className='text-sm text-[#111]'>{data.rating}</span>
					</div>
				</div>
			</div>
			<div className='group h-9 w-9 rounded-full bg-white absolute flex items-center justify-center right-3 top-3 z-10 hover:bg-black transition ease-in-out duration-300'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='#000'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
					className='h-4 group-hover:stroke-[#fff]'
				>
					<path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
				</svg>
			</div>
		</div>
	);
};

export default MenuContainer;
