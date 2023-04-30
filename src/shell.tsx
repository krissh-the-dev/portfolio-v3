import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles } from '@config';
import { ThemeEngine } from '@root';

import { Page } from './Page';

const ROOT_ELEMENT = document.getElementById('root')!;
ReactDOM.createRoot(ROOT_ELEMENT).render(
	<React.StrictMode>
		<ThemeEngine>
			<GlobalStyles />
			<Page />
		</ThemeEngine>
	</React.StrictMode>
);
