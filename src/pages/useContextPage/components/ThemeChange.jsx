import React, { useContext } from "react";

import { ThemeContext } from "../useContextPage";

function ThemeChange(props) {
    const contextTheme = useContext(ThemeContext);
    const changeTheme = () => {
        contextTheme.setTheme(contextTheme.theme === 'light' ? 'dark' : 'light');
    };
    return(
        <div className="wrapper_compoent">
            <div className="page">
                <button
                    onClick={changeTheme}
                >Change theme</button>
            </div>
        </div>
    )
}

export default ThemeChange;