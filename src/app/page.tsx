import { Nav } from '@/components/sections/nav';

export default function Home() {
	return (
		<main className='relative z-0 mx-auto mt-[100px] flex min-h-screen max-w-screen-xl flex-col items-start'>
			<Nav />
			{Array(100)
				.fill('Random Text')
				.map((val, index) => (
					<div key={index} className='flex w-full'>
						<span className='mx-auto -translate-x-1/4 text-center'>{val}</span>
					</div>
				))}
		</main>
	);
}
