'use client';

import { createContext, useContext } from 'react';

// Nav AltStyle
interface INavCompactDisplayState {
	isCompactDisplay: boolean;
}

const useNavCompactDisplayContext = createContext<INavCompactDisplayState>({
	isCompactDisplay: false
});

export const NavCompactDisplayStateProvider = useNavCompactDisplayContext.Provider;
export const useNavCompactDisplayState = () => useContext(useNavCompactDisplayContext);
