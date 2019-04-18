import { createContext } from 'react';

const context = createContext({ cart: [], updateCart: () => {}, user: {} });
export default context;
