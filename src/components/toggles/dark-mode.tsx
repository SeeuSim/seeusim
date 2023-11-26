'use client';

import { MoonStar, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LS_DARK_MODE_KEY = 'darkMode';
const DARK_MODE_QUERY = '(prefers-color-scheme: dark)';

export const DarkModeToggle = () => {
	const [isDarkMode, _setIsDarkMode] = useState(false);

	const setIsDarkMode = (_isDarkMode: boolean) => {
		const root = document.documentElement;
		if (_isDarkMode) {
			root.classList.add('dark');
			localStorage.setItem(LS_DARK_MODE_KEY, 'true');
		} else {
			root.classList.remove('dark');
			localStorage.setItem(LS_DARK_MODE_KEY, 'false');
		}
		_setIsDarkMode(_isDarkMode);
	};

	useEffect(() => {
		if (window) {
			window.matchMedia(DARK_MODE_QUERY).addEventListener('change', (event) => {
				setIsDarkMode(event.matches);
			});
			if (
				localStorage.getItem(LS_DARK_MODE_KEY) === 'true' ||
				window.matchMedia(DARK_MODE_QUERY).matches
			) {
				setIsDarkMode(true);
			}
		}
	}, []);

	return (
		<Button
			id='DarkModeToggle'
			variant='outline'
			className={cn(
				'group h-9 w-9 overflow-hidden rounded-md border p-0 transition-colors ease-in-out hover:border-2',
				'border-violet-600 text-violet-600 dark:border-yellow-600 dark:text-yellow-600',
				'hover:bg-violet-600 hover:text-violet-100 dark:hover:bg-yellow-600 dark:hover:text-yellow-100'
			)}
			onClick={() => {
				setIsDarkMode(!isDarkMode);
			}}
		>
			<div
				id='IconSlider'
				className={cn(
					'inline-flex items-center transition-transform duration-500 ease-in-out ',
					'translate-x-[22px] gap-[19px] dark:translate-x-[-22px]'
				)}
			>
				<MoonStar className='stroke-[1.5] group-hover:stroke-2' />
				<Sun className='stroke-[1.5] group-hover:stroke-2' />
			</div>
			<span className='sr-only' id='ScreenReaderLabel'>
				Toggle Dark Mode
			</span>
		</Button>
	);
};
