import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyles } from './config';
import { ThemeEngine } from './root/ThemeEngine';

const ROOT_ELEMENT = document.getElementById('root')!;
ReactDOM.createRoot(ROOT_ELEMENT).render(
	<React.StrictMode>
		<ThemeEngine>
			<GlobalStyles />
			<App />
		</ThemeEngine>
	</React.StrictMode>
);
