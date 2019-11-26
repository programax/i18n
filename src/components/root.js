import React from 'react';
import {IntlProvider} from 'react-intl';

import {messages as allMessages} from '../messages';
import {App as AppApi} from './api';
import {App as AppComponent} from './component';

export const Root = () => {
    // const currentLocale = 'en-US';
    // const currentLocale = 'es-MX';
    const currentLocale = 'de-DE';
    const messages = allMessages[currentLocale];

    return (
        <IntlProvider locale={currentLocale} messages={messages}>
            <AppApi />
            <AppComponent />
        </IntlProvider>
    );
};
