'use client';

import { ArrowRight } from 'lucide-react';

import { DarkModeToggle } from '@/components/toggles/dark-mode';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { NavCompactDisplayStateProvider } from '@/lib/contexts';
import { useIsCompactDisplay } from '@/lib/hooks';
import { cn } from '@/lib/utils';

import { Logo } from './logo';

export const Nav = () => {
	const { isCompactDisplay } = useIsCompactDisplay();

	return (
		<NavCompactDisplayStateProvider
			value={{
				isCompactDisplay
			}}
		>
			<nav
				className={cn(
					'fixed top-0 z-50 max-h-min w-full max-w-screen-2xl rounded-b-md border-x border-b border-border px-20 py-[30px] shadow-sm transition-all ease-in-out',
					'transition-all duration-300 ease-in-out',
					isCompactDisplay && 'rounded-b-2xl py-1 bg-blend-color-burn backdrop-blur-md'
				)}
			>
				<div
					className={cn(
						'flex max-h-min w-full flex-row items-center gap-4 transition-transform ease-in-out'
					)}
				>
					{/* Left */}
					<Logo />
					{/* Middle */}
					<div className='grid w-full place-items-center'>
						<Badge
							variant='outline'
							className={cn(
								'hidden w-min -translate-x-1/2 !py-1 px-4 text-base font-bold md:block',
								'transition-all duration-300 ease-in-out',
								isCompactDisplay && 'bg-secondary'
							)}
						>
							<span>About</span>
						</Badge>
					</div>
					{/* Right Group */}
					<div
						className={cn(
							'fixed right-20 inline-flex items-center gap-4',
							'transition-all duration-300 ease-in-out',
							isCompactDisplay && 'gap-2'
						)}
					>
						<DarkModeToggle />
						<Button
							variant='default'
							className={cn(
								'group inline-flex h-min gap-1 rounded-[10px] px-4 py-1.5 font-semibold',
								'transition-all duration-300 ease-in-out',
								isCompactDisplay && 'px-3'
							)}
						>
							<span>Connect</span>
							<ArrowRight className='h-4 w-4 shrink-0 ease-in-out group-hover:translate-x-0.5' />
						</Button>
					</div>
				</div>
			</nav>
		</NavCompactDisplayStateProvider>
	);
};
