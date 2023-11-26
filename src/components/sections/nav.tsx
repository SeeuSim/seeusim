import { DarkModeToggle } from '@/components/toggles/dark-mode';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Nav = () => {
	return (
		<nav className='flex max-h-min w-full rounded-b-md border-x border-b border-border px-20 py-[30px] shadow-sm'>
			<div className='flex w-full justify-between'>
				<Button variant='secondary' className='font-semibold'>
					<span>Logo</span>
				</Button>
				<Badge variant='outline' className='hidden !py-1 px-4 text-lg font-black md:flex'>
					<span>About</span>
				</Badge>
				<div className='inline-flex items-center gap-2'>
					<DarkModeToggle />
					<Button variant='destructive' className='font-semibold'>
						<span>Connect</span>
					</Button>
				</div>
			</div>
		</nav>
	);
};
