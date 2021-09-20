import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { App } from '@client/components/app/app';
import { GameServiceProvider } from '@client/providers/game-service';

ReactDOM.render(
  <React.StrictMode>
    <GameServiceProvider>
      <App />
    </GameServiceProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
