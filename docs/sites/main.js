import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@common/style/web/index.less';
import '@common/style/web/docs.less';

import 'tdesign-site-components';
import 'tdesign-site-components/lib/styles/style.css';
import 'tdesign-site-components/lib/styles/prism-theme.less';
import 'tdesign-site-components/lib/styles/prism-theme-dark.less';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
