import React, { createContext, useState } from "react";

import './style.css';
import DeepWrapper from "./components/DeepWrapper";
import ThemeChange from "./components/ThemeChange";

export const ThemeContext = createContext(null);

function UseContextPage() {
    const [theme, setTheme] = useState('light');
    return(
        <div className={theme}>
            <h1>UseContext</h1>
            <ThemeContext value={{
                theme,
                setTheme
            }}>
                <DeepWrapper>
                    <DeepWrapper>
                        <DeepWrapper>
                            <ThemeChange />
                        </DeepWrapper>
                    </DeepWrapper>
                </DeepWrapper>
            </ThemeContext>
        </div>
        
        
    )
}

export default UseContextPage;