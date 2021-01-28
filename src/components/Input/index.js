import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const InputBase = styled.input`
width: 100%;
padding: 15px;
font-size: 14px;
border: 1px solid ${({ theme }) => theme.colors.secondary};
color: ${({ theme }) => theme.colors.contrastText};
background-color: ${({ theme }) => theme.colors.mainBg};
border-radius: ${({ theme }) => theme.borderRadius};
outline: 0;
margin-bottom: 25px;
`;

export default function Input({ onChange, placeholder }){
    return (
        <div>
            <InputBase
            placeholder={placeholder} 
            onChange={onChange}/>
        </div>
    );
}


Input.defaultProps = {
    value: '',
};


Input.propType = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};