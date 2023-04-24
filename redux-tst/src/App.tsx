import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {incremented} from "./features/counter/counter-slice";
import {useFetchBreedsQuery} from "./features/dogs/dogs-api-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  
  const { data = [], isFetching } = useFetchBreedsQuery();
  
  function handleClick() {
    dispatch(incremented());
  }
  
  return (
    <div className="App">
      <p>
        <button onClick={handleClick}>
          Counter is {count}
        </button>
      </p>
      <hr/>
      <div>
          <p>Number of fetched dogs: {data.length}</p>
          <table>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {data.map((breed: any) => (
                    <tr key={breed.id}>
                        <td>{breed.name}</td>
                        <td>
                            <img src={breed.image.url} alt={breed.name} height={250} />
                        </td>
                    </tr>
                ))}
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;
