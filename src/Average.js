import {useMemo, useState} from "react";

const getAverage = numbers => {
  console.log("calculating ...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const average = useMemo(()=>getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}> add </button>
      <ui>
        {list.map((value, index) => (
          <li key={index}> {value} </li>
        ))}
      </ui>
      <div>
        <b>average:</b> {average}
      </div>
    </div>
  );
}

export default Average;