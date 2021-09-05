import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { App } from './components/app/app';
import { darkTheme } from './components/shared/themes.ts/themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <div
        style={{ backgroundColor: '#2B3A67', height: '100vh', width: '100vw' }}>
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
