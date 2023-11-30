'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { DarkModeToggle } from '@/components/toggles/dark-mode';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { Logo } from './logo';

export const Nav = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window?.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={cn(
				'fixed top-0 z-50 max-h-min w-full max-w-screen-xl rounded-b-md border-x border-b border-border px-20 py-[30px] shadow-sm transition-transform duration-300 ease-in-out',
				scrollPosition > 14 && '-translate-y-1/4 scale-y-50 bg-primary-foreground bg-opacity-50'
			)}
		>
			<div
				className={cn(
					'inline-flex max-h-min w-full items-center justify-between transition-transform duration-300 ease-in-out',
					scrollPosition > 14 && 'scale-y-[2]'
				)}
			>
				<Logo />
				<Badge variant='outline' className='hidden w-min !py-1 px-4 text-base font-bold md:flex'>
					<span>About</span>
				</Badge>
				<div className='inline-flex items-center gap-4'>
					<DarkModeToggle />
					<Button
						variant='default'
						className='group inline-flex h-min gap-1 rounded-[10px] px-4 py-1.5 font-semibold'
					>
						<span>Connect</span>
						<ArrowRight className='h-4 w-4 shrink-0 duration-300 ease-in-out group-hover:translate-x-0.5' />
					</Button>
				</div>
			</div>
		</nav>
	);
};
