import { useState, useEffect } from "react";
function Useeffect() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setCounter(prev => prev + 1);

  const onChange = (e) => { setKeyword(e.target.value); }
  useEffect(() => {
    console.log("only once");
  }, []);
  useEffect(() => {
    console.log("적는중", keyword)
  }, [keyword]);
  useEffect(() => {
    console.log("세기중", counter)
  }, [counter]);
  useEffect(()=>{
    console.log("둘다")
  },[keyword,counter])
  return (
    <div>
      <input
        type="text"
        placeholder="적어라"
        onChange={onChange}
        value={keyword}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

export default Useeffect;
