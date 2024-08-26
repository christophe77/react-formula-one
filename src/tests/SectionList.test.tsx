import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import NewsList from '../components/SectionList/SectionList';

test('renders news articles', () => {
    render(
        <Provider store={store}>
            <NewsList />
        </Provider>
    );

    const articles = screen.getAllByRole('heading', { level: 5 });
    expect(articles.length).toBeGreaterThan(0);
});