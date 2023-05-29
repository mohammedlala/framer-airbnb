import React, { useState } from 'react';
import AirbnbIcon from '../../assets/icons/airbnb';
import ViewsIcon from '../../assets/icons/views';
import HomesIcon from '../../assets/icons/homes';
import KitchenIcon from '../../assets/icons/kitchen';
import SurfingIcon from '../../assets/icons/surfing';
import MantionIcon from '../../assets/icons/mantion';
import LuxeIcon from '../../assets/icons/luxe';
import TreehousesIcon from '../../assets/icons/treehouses';
import CampingIcon from '../../assets/icons/camping';
import BeachIcon from '../../assets/icons/beach';
import FarmsIcon from '../../assets/icons/farms';
import CastleIcon from '../../assets/icons/castle';
import IslandIcon from '../../assets/icons/island';
import VineyardIcon from '../../assets/icons/vineyard';
import PoolsIcon from '../../assets/icons/pools';
import SkiingIcon from '../../assets/icons/skiing';
import DesertIcon from '../../assets/icons/desert';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMouseEnter = () => {
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		setIsOpen(false);
	};

	const menu = [
		{
			icon: <AirbnbIcon />,
			title: 'All Homes',
		},
		{
			icon: <ViewsIcon />,
			title: 'Amazing Views',
		},
		{
			icon: <HomesIcon />,
			title: 'Tiny Homes',
		},
		{
			icon: <KitchenIcon />,
			title: `Chef's Kitchen`,
		},
		{
			icon: <SurfingIcon />,
			title: 'Surfing',
		},
		{
			icon: <MantionIcon />,
			title: 'Mansions',
		},
		{
			icon: <LuxeIcon />,
			title: 'Luxe',
		},
		{
			icon: <TreehousesIcon />,
			title: 'Treehouses',
		},
		{
			icon: <CampingIcon />,
			title: 'Camping',
		},
		{
			icon: <BeachIcon />,
			title: 'Beachfront',
		},
		{
			icon: <FarmsIcon />,
			title: 'Farms',
		},
		{
			icon: <CastleIcon />,
			title: 'Castles',
		},
		{
			icon: <IslandIcon />,
			title: 'Islands',
		},
		{
			icon: <VineyardIcon />,
			title: 'Vineyards',
		},
		{
			icon: <PoolsIcon />,
			title: 'Amazing Pools',
		},
		{
			icon: <SkiingIcon />,
			title: 'Skiing',
		},
		{
			icon: <DesertIcon />,
			title: 'Desert',
		},
	];

	return (
		<div
			className={`h-auto border-r-[1px] duration-300 ${
				isOpen ? 'w-56' : 'w-[88px]'
			}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<ul className='py-4 flex flex-col gap-y-[8px]'>
				{menu.map((item, idx) => (
					<>
						<li
							key={idx}
							className={`text-sm h-[48px] flex items-center gap-x-4 py-2 px-8 ${
								idx === 0 ? 'border-r-[3px] border-[#FF385C]' : ''
							} text-[#717171] hover:bg-[#F3F3F2]`}
						>
							<span className={`text-2xl block float-left`}>
								{item.icon}
								{/* <img src={item.icon} alt='' className='h-5' /> */}
							</span>
							<span
								className={`w-full ${
									idx === 0 ? 'text-[#000] font-semibold' : ''
								} text-[#717171] text-sm flex-1 duration-200 whitespace-nowrap ${
									!isOpen ? 'hidden' : ''
								}`}
							>
								{item.title}
							</span>
						</li>
					</>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
