import { Lato } from 'next/font/google';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavCompactDisplayState } from '@/lib/contexts';

const font = Lato({ subsets: ['latin'], weight: '700' });

export const Logo = () => {
	const { isCompactDisplay } = useNavCompactDisplayState();

	return (
		<Link href='/'>
			<Button
				variant='link'
				className='static left-0 hover:text-muted-foreground hover:no-underline'
			>
				<span
					className={cn(
						'fixed left-20 text-2xl font-bold tracking-wide transition-all duration-300 ease-in-out',
						font.className,
						isCompactDisplay && 'text-xl'
					)}
				>
					SeeuSim
				</span>
			</Button>
		</Link>
	);
};
