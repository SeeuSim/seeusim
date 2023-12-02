import { Hero } from '@/components/sections/home/hero';
import { Nav } from '@/components/sections/common/nav';

import { cn } from '@/lib/utils';

export default function Home() {
	return (
		<main className={cn('relative z-0 mx-auto flex min-h-screen max-w-screen-2xl flex-col')}>
			<Nav />
			<div
				className={cn(
					'translate-y-[100px] transition-transform ease-in-out'
					// isCompactDisplay && 'translate-y-[72px]'
				)}
			>
				<Hero />
				{Array(100)
					.fill('Random Text')
					.map((val, index) => (
						<div key={index} className='flex w-full'>
							<span className='mx-auto -translate-x-1/4 text-center'>{val}</span>
						</div>
					))}
			</div>
		</main>
	);
}
