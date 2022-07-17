import {useCallback, useState} from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange, setValue];
};

export default useInput;