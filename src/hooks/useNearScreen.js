import { useState, useEffect, useRef } from 'react';

function useNearScreen() {
  const element = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    import('intersection-observer')
      .then(() => {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            observer.disconnect();
            setShow(true);
          }
        });
        observer.observe(element.current);
      });
  }, [element]);
  return [show, element];
}

export default useNearScreen;
