import { useEffect, useState } from 'react';

export const useIsCompactDisplay = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window?.scrollY;
		setScrollPosition(position);
	};

	const isCompactDisplay = scrollPosition > 20;

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return {
		isCompactDisplay
	};
};
