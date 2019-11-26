import React from 'react';
import {FormattedMessage, FormattedDate, FormattedTime, FormattedRelativeTime} from 'react-intl';

const App = () => {
    return (
        <div>
            <FormattedMessage id="app.title">
                {(message) => <h1>{message}</h1>}
            </FormattedMessage>

            <FormattedDate
                value={new Date()}
                year="numeric"
                month="long"
                day="2-digit"
            />

            <br />

            <FormattedTime hour12 value={new Date(Date.now() + (1000 * 60 * 60 * 10))} />

            <br />

            <FormattedRelativeTime value={0} numeric="auto" updateIntervalInSeconds={10} />
        </div>
    );
};

export { App };
