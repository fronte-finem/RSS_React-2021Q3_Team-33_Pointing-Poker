import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { App } from '@client/components/app/app';
import { StateServiceProvider } from '@client/providers/state-service';

ReactDOM.render(
  <React.StrictMode>
    <StateServiceProvider>
      <App />
    </StateServiceProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
