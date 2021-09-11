import { useState } from 'react';

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }) => setValue(target.value);
  return { onChange, value };
};

export default useInputValue;
