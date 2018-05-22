import React from 'react';
import IndecisionApp from './Option'

const Options = (props) => {
        return (
            <div>
                <button onClick={ props.handleDeleteOptions }>
                    Remove All
                </button>
                { props.options.length ===0 && <p>Please add an optin to get started!</p> }
                {
                    props.options.map(
                        (option, index) => (
                            <Option 
                                key={ index } 
                                optionText={ option } 
                                handleDeleteOption={ props.handleDeleteOption }
                            />
                        )
                    )
                }
            </div>
        );
    };

export default Options;