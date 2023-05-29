import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GridIcon from './assets/icons/grid.svg';
import DownArrowIcon from './assets/icons/down-arrow.svg';
import CalendarIcon from './assets/icons/calendar.svg';
import FIlterIcon from './assets/icons/filter.svg';
import MapIcon from './assets/icons/map.svg';
import MenuContainer from './components/MenuContainer';
import Image1 from './assets/images/1st.webp';
import Image2 from './assets/images/2nd.webp';
import Image3 from './assets/images/3rd.webp';
import Image4 from './assets/images/4th.webp';
import Image5 from './assets/images/5th.webp';
import Image6 from './assets/images/6th.webp';
import Image7 from './assets/images/7th.webp';
import Image8 from './assets/images/8th.webp';
import Image9 from './assets/images/9th.webp';
import Image10 from './assets/images/10th.webp';
import Image11 from './assets/images/11th.webp';

function App() {
	const placeMenu = [
		{
			image: Image1,
			title: 'Whitefish Estate',
			place: 'Whitefish, Montana, United States',
			amount: '10,000',
			rating: '5.0',
		},
		{
			image: Image2,
			title: 'Luxury stay in Weston, Saint James, Barbados',
			place: 'Weston, Saint James, Barbados',
			amount: '1,500',
			rating: '5.00',
		},
		{
			image: Image3,
			title: 'Numero 22 - Lake Como - Design Living & Lake View',
			place: 'Laglio, Lombardia, Italy',
			amount: '359',
			rating: '4.99',
		},
		{
			image: Image4,
			title: '7,500 sq ft Private Beachfront Estate',
			place: 'Dubai, United Arab Emirates',
			amount: '2,478',
			rating: '4.73',
		},
		{
			image: Image5,
			title: 'Bohemian & Spacious / Private Pool and Garden',
			place: 'Tulum, Quintana Roo, Mexico',
			amount: '199',
			rating: '4.97',
		},
		{
			image: Image6,
			title: 'Designer A-Frame Cabin in the Trees',
			place: 'Lake Arrowhead, California, United States',
			amount: '225',
			rating: '4.93',
		},
		{
			image: Image7,
			title: 'Fully Renovated 2 BR on River w/ Pool - Walk to To',
			place: 'Aspen, Colorado, United States',
			amount: '546',
			rating: '5.00',
		},
		{
			image: Image8,
			title: `Magnolia's Hillcrest Cottage`,
			place: 'Waco, Texas, United Statess',
			amount: '500',
			rating: '4.97',
		},
		{
			image: Image9,
			title: `Unique Architecture Cave House by Cycladica`,
			place: 'Oia, South Aegean, Greece',
			amount: '930',
			rating: '4.95',
		},
		{
			image: Image10,
			title: 'ATELIER ArtVillas Costa Rica',
			place: 'Uvita, Osa, Puntaneras, Costa Rica',
			amount: '830',
			rating: '4.80',
		},
		{
			image: Image11,
			title: 'Mountainside Luxury Cabin with Batulao View',
			place: 'Calaca, Calabarzon, Philippines',
			amount: '483',
			rating: '4.87',
		},
	];
	return (
		<div className='font-inter'>
			<Header />
			<div className='sticky h-[72px] top-0 bg-white z-50 w-full flex items-center justify-between px-8 py-4 border-b-[1px]'>
				<div className='flex items-center bg-[#F3F3F2] rounded-lg'>
					<div className='flex justify-center items-center bg-black w-12 h-12 rounded-lg'>
						<img src={GridIcon} alt='' />
					</div>
					<div className='w-12 h-12 flex items-center justify-center'>
						<img src={MapIcon} alt='' />
					</div>
				</div>
				<div className='flex gap-3 items-center'>
					<div className='h-12 flex items-center px-4 py-3 bg-[#F3F3F2] rounded-lg gap-4 lg:gap-0'>
						<span className='text-[#111] text-sm lg:w-[188px]'>Anywhere</span>
						<img src={DownArrowIcon} alt='' />
					</div>
					<div className='h-12 flex items-center px-4 py-3 text-[#111] bg-[#F3F3F2] rounded-lg gap-3'>
						<img src={CalendarIcon} alt='' />
						<span className='text-sm'>June 14 - 21</span>
					</div>
					<div className='h-12 flex items-center px-2 py-3 text-[#111] bg-[#F3F3F2] rounded-lg gap-4'>
						<div className='h-8 w-8 rounded-lg flex items-center justify-center bg-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.7'
								stroke='#CC3333'
								class='w-5 h-5'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M18 12H6'
								/>
							</svg>
						</div>
						<span className='text-sm'>4 guests</span>
						<div className='h-8 w-8 rounded-lg flex items-center justify-center bg-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.7'
								stroke='#CC3333'
								class='w-5 h-5'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M12 6v12m6-6H6'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center w-12 h-12 bg-[#F3F3F2] rounded-lg'>
					<img src={FIlterIcon} alt='' />
				</div>
			</div>
			<div className='flex'>
				<Sidebar />
				<div className='p-8 w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
					{placeMenu.map((data, idx) => (
						<MenuContainer key={idx} data={data} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
