import React, { useState, useEffect  } from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
   const [darkMan, setDarkMan] = useLocalStorage(key);
   useEffect(() => {
       darkMan ? document.body.classList.add(dark-man): document.body.classList.remove(dark-mode);
   }, [input])

    return [darkMan, setDarkMan]
}
export default useDarkMode;
