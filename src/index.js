import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
import './index.css';
import {ThemeProvider} from '@emotion/react';

const theme = {
  colors: {
    fontColor: "#010101",    
    online: "rgb(235, 47, 47)",
    offline: "rgb(47, 235, 72)",
  },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>   
  </React.StrictMode>
);
