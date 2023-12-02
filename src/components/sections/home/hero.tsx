import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const Hero = () => {
	return (
		<section className='flex min-h-[calc(100vh-196px)] w-full'>
			<div className='flex w-full'>
				<Card className='m-3 flex w-full flex-col gap-4 p-16'>
					<CardTitle
						className={cn('mt-auto text-5xl', 'lg:max-w-[calc(300%/4)]', 'xl:max-w-[calc(200%/3)]')}
					>
						Hi, I&apos;m Seeu Sim, and I enjoy{' '}
						<span className='font-black'>experimenting with software.</span>
					</CardTitle>
					<CardDescription className='text-2xl'>
						Currently a Software Engineer Intern at GovTech Singapore, and a <b>penultimate</b> NUS
						CS undergraduate.
					</CardDescription>
				</Card>
			</div>
		</section>
	);
};
