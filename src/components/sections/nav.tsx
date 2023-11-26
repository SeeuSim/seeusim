import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Nav = () => {
	return (
		<nav className="flex max-h-min w-full border-b border-border px-20 py-[30px]">
			<div className="flex w-full justify-between">
				<Button variant="secondary">
					<span>Logo</span>
				</Button>
				<Badge variant="outline" className="hidden !py-1 px-4 text-lg font-black md:flex">
					<span>About</span>
				</Badge>
				<Button variant="default">
					<span>Connect</span>
				</Button>
			</div>
		</nav>
	);
};
