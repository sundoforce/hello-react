import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames]  = useState([
        { id: 1, text: '눈사람'},
        { id: 2, text: '얼금'},
        { id: 3, text: '눈'},
        { id: 4, text: '바랍'}
    ]);
    const [inputText, setInputext] = useState('');
    const [nextId, setNextId] = useState(5);

    const nameList = names.map(name => <li key={name.id}>{name.text}</li>)
    return <ul>{nameList}</ul>;
}

export default IterationSample;