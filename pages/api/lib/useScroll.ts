import { useCallback } from 'react';

const useScrollTo = (id: string) => {
  return useCallback(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);
};

export default useScrollTo;
