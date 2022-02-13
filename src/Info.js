import {useEffect, useState} from "react";

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    }
  },[name]);

  const onChangeName = e => {
    setName(e.target.value)
  };
  const onChangeNickName = e => {
    setNickName(e.target.value)
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}/>
        <input value={nickName} onChange={onChangeNickName}/>
      </div>
      <div>
        <div>
          <b> Name : </b> {name}
        </div>
        <div>
          <b> NickName : </b> {nickName}
        </div>
      </div>
    </div>
  );
}

export default Info;