import React from "react";

const SearchPanel = () => {
    const SearchText = 'Enter Text Here';
    const SearchStyle = {
        fontSize: '25px'
    };
    return (
        <input
            style={SearchStyle}
            placeholder={SearchText}/>
    );
};


export default SearchPanel;
