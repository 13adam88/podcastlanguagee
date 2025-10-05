import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import { AIExtension } from './extensions/ai/aiExtension';

const aiExtension = new AIExtension();

const App = () => {
    React.useEffect(() => {
        aiExtension.initializeAI();
    }, []);

    return (
        <div>
            <Header />
            <h1>Welcome to the Test Site Project</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));