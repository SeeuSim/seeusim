import { Lato } from 'next/font/google';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const font = Lato({ subsets: ['latin'], weight: '700' });

export const Logo = () => {
	return (
		<Link href='/'>
			<Button variant='link' className='hover:text-muted-foreground hover:no-underline'>
				<span className={cn('text-xl font-bold tracking-wide', font.className)}>SeeuSim</span>
			</Button>
		</Link>
	);
};
