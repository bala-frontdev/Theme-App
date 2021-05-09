import React from 'react'

export const ToggleTheme = ( {theme, toggleTheme }) => {
    console.log(theme);
    return (
        <button className="btn-theme" onClick={toggleTheme}>
            {theme === 'light' ? <span>Change to Dark Theme</span> : <span>Change to Light Theme</span>}
        </button>
    )
}
