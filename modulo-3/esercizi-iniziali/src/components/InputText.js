import { useState } from 'react';

export default function InputText() {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    const [filledCount, setFilledCount] = useState(0);
    const [combinedText, setCombinedText] = useState('');

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);

        // Calcolare il conteggio delle caselle con testo
        const newFilledCount = newInputValues.filter((text) => text.trim() !== '').length;
        setFilledCount(newFilledCount);

        // Combinare il testo in una stringa
        const newCombinedText = newInputValues.join(' ');
        setCombinedText(newCombinedText);
    };

    return (
        <div>
            <h1>Caselle di Input Testo</h1>
            {inputValues.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder={`Casella ${index + 1}`}
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                />
            ))}

            <div>
                <p>Caselle con Testo: {filledCount}</p>
                <p>Testo Combinato: {combinedText}</p>
            </div>
        </div>
    );
}