import React from 'react';
const Option = (props) => {
        return (
            <div>
                <button 
                    onClick={ () => {
                        props.handleDeleteOption(props.optionText);
                    }}>
                        Remove
                </button>
                { props.optionText }
            </div>
        );
    };
export default Option;