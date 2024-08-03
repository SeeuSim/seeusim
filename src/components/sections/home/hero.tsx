import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const _copyText = `
Hi, I'm Seeu Sim, and I enjoy *experimenting*
with software.

I'm currently a *final-year* Computer Science
undergraduate at the National University of Singapore.
`;

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
						Currently {/*a Software Engineer at JPMorganChase, and*/}a <b>final-year</b> NUS CS
						undergraduate.
					</CardDescription>
				</Card>
			</div>
		</section>
	);
};
