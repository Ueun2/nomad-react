import { useState } from "react";

function TodoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (toDo === '') {
      return
    }
    setToDos(curArr => [toDo, ...curArr]);
    setToDo("");
  }
  return (  
    <div>
      <h1>오늘 할 일 ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo} type="text"
          placeholder="해야할 일 적기"
        />
        <button>추가</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,idx)=><li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
