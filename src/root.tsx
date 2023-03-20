import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyles } from './config';

const ROOT_ELEMENT = document.getElementById('root')!;
ReactDOM.createRoot(ROOT_ELEMENT).render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>
);
