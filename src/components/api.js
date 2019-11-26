import React from 'react';
import {
    FormattedMessage,
    FormattedDate,
    FormattedTime,
    FormattedRelativeTime,
    injectIntl,
} from 'react-intl';

const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
};

const timeOptions = {
    hour12: true,
};

const relativeTimeOptions = {
    numeric: 'auto',
};

const Comp = (props) => {
    return (
        <div>
            <h1>{props.intl.formatMessage({ id: 'app.title' })}</h1>

            <span>{props.intl.formatDate(new Date(), dateOptions)}</span>

            <br />

            <span>{props.intl.formatTime(new Date(Date.now() + (1000 * 60 * 60 * 10)), timeOptions)}</span>

            <br />

            <span>{props.intl.formatRelativeTime(0, 'second', relativeTimeOptions)}</span>
        </div>
    );
};

const App = injectIntl(Comp);

export { App };
