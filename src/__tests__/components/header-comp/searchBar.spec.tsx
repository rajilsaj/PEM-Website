import React from 'react';
import { SearchBarComponent } from '../../../components/header-comp/searchBar.tsx';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

describe('<SearchBarComponent />', () => {
    let container;

    const getInitialProps = () => ({
        eventContext: 'SearchBar',
    });

    let props = null;

    describe('The main component', () => {
        beforeEach(() => {
            props = getInitialProps();
            container = document.createElement('div');
            document.body.appendChild(container);
        });

        afterEach(() => {
            document.body.removeChild(container);
            container = null;
        });

        it('renders SearchBarComponent', () => {
            act(() => {
                ReactDOM.createRoot(container).render(<SearchBarComponent />);
            });
        });
    });
});
