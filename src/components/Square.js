import React from 'react';

const styles = {
    background: '#400D85',
    border: '5px solid #B30CC2',
    fontSize: '120px',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({value, onClick }) => (
    <button style={styles} onClick={onClick}>
        {value}
    </button>
)

export default Square;