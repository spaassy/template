import React from 'react';
import ReactDom from 'react-dom';
import App from '@views/app';
import { SpaAssyProvider } from '@commonComponents'

import 'lodash'

import './common';

const appEle = document.getElementById('app');
const namespace = process.env.SYSTEMNAME

ReactDom.render(
    <SpaAssyProvider namespace={namespace} mainProject>
        <App />
    </SpaAssyProvider>,
    appEle
);

if (module.hot) {
    console.log('启用热加载更新！')
    module.hot.accept();
}