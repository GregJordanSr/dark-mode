import React, { useState, useEffect  } from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = (key, initialValue) => {
   const [darkMan, setDarkMan] = useLocalStorage(key, initialValue);
   useEffect(() => {
       darkMan ? 
        document.body.classList.add("dark-mode")
        : 
        document.body.classList.remove("dark-mode");
   }
   , [darkMan])

    return [darkMan, setDarkMan]
}
export default useDarkMode;
