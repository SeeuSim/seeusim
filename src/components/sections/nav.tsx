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

	const isAltStyle = scrollPosition > 14;

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={cn(
				'fixed top-0 z-50 max-h-min w-full max-w-screen-2xl rounded-b-md border-x border-b border-border px-20 py-[30px] shadow-sm transition-all duration-300 ease-in-out',
				isAltStyle &&
					'-translate-y-1/4 scale-y-50 rounded-b-2xl bg-blend-color-burn backdrop-blur-md'
			)}
		>
			<div
				className={cn(
					'inline-flex max-h-min w-full items-center justify-between transition-transform duration-300 ease-in-out',
					isAltStyle && 'scale-y-[2]'
				)}
			>
				<Logo />
				<Badge
					variant='outline'
					className={cn(
						'hidden w-min !py-1 px-4 text-base font-bold md:flex',
						isAltStyle && 'bg-secondary'
					)}
				>
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
