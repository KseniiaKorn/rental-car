import React from 'react';
import Select from 'react-select';
import s from './CustomSelect.module.css';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#f7f7f7',
        borderRadius: '12px',
        padding: '12px 16px',
        fontSize: '16px',
        fontWeight: 500,
        boxShadow: 'none',
        cursor: 'pointer',
        height: '44px',
        border: 'none',
        textAlign: 'left',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#E5E5E5' : '#FFFFFF',
        color: state.isSelected ? '#101828' : '#8d929a',
        padding: '10px 16px',
        fontSize: '16px',
        cursor: 'pointer',
        textAlign: 'left',
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: '12px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        zIndex: 100,
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#101828',
        fontWeight: 500,
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#101828',
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        transition: 'transform 0.3s ease',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        color: '#101828',
        padding: '0 6px',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
};

const CustomSelect = ({ name, options, value, onChange, onBlur, placeholder }) => {
    return (
        <div className={s.wrapper}>
            <Select
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                options={options}
                styles={customStyles}
                placeholder={placeholder}
                className={s.select}
                classNamePrefix="react-select"
                isSearchable={false}
            />
        </div>
    );
};

export default CustomSelect;
