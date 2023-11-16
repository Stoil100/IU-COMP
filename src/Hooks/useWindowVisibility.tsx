import { useEffect, useState } from 'react';

const useWindowVisibility = (): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleVisibilityChange = () => {
    setIsVisible(!document.hidden);
  };

  useEffect(() => {
    setIsVisible(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
};

export default useWindowVisibility;
