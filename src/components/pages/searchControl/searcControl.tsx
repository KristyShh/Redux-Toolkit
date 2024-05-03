// SearchControl.tsx
import { useState } from 'react';
import { TextInput } from '@mantine/core';

interface SearchControlProps {
    onChange: (value: string) => void; // Изменено на строку вместо массива
}

export const SearchControl = ({ onChange }: SearchControlProps) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(newValue); // Передаем текущее значение запроса в родительский компонент
    };

    return (
        <TextInput
            value={value}
            onChange={handleChange}
            placeholder="Search"
            rightSection={value.length > 0 && <i className="fa fa-times" onClick={() => setValue('')} />}
        />
    );
};

