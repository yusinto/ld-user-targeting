import { createContext } from 'react';

export const contextValue = { cart: [], setCart: () => '', user: {}, setUser: () => '' };
const context = createContext(contextValue);
export default context;
