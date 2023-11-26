import { DarkModeToggle } from '@/components/toggles/dark-mode';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { ArrowRight } from 'lucide-react';

export const Nav = () => {
	return (
		<nav className='flex max-h-min w-full rounded-b-md border-x border-b border-border px-20 py-[30px] shadow-sm'>
			<div className='inline-flex max-h-min w-full items-center justify-between'>
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
