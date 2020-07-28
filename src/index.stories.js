import React from 'react';
import { Button } from '@storybook/react/demo';
import Book from '../src/components/Book';
import { stories } from '../.storybook/main';
import { storiesOf } from '@storybook/react';
import './App.css';

storiesOf('Book', module)
    .add(
        'Book-Item',
        () => (
            <div className="container">
                <div className="book-story">
                    <Book
                        title="đắc nhân tâm"
                        description="first new"
                        index="1"
                    />
                </div>
            </div>
        )
    )
export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
    <Button>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
    </span>
    </Button>
);