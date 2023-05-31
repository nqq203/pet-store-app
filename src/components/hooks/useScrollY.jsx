import { useState, useEffect } from 'react';

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  const handleScrollY = () => {
    const scrollY = window.scollY || document.documentElement.scrollTop;
    setScrollY(scrollY);
    // console.log(scrollY);
  }
  useEffect(() => {
    handleScrollY();
    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    }
  }, [])
  return ([scrollY]);
}

