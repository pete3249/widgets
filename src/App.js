import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: "What is React?",
        content: "React is a front end JavaScript framework"
    },
    {
        title: "Why use React?",
        content: "React is a favorite among Javascript engineers"
    },
    {
        title: "How do you use components?",
        content: "You use React by creating components"
    }
];

const App = () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};

export default App;