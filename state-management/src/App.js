import './App.css';
import {useCallback, useMemo, useReducer, useState} from "react";
import {Counter, NameList} from "./components/useStateComponent";
import {SomeReducer, UserForm} from "./components/useReducerComponent";
import {ListOfNumbersUseMemo} from "./components/useMemoComponent";
import {SortListForUseCallback} from "./components/useCallbackComponent";
import {GetData, StopWatch} from "./components/useEffectComponent";

function App() {
  return (
      <div>
          {/*<Counter />*/}
          {/*<NameList />*/}
          {/*<hr/>*/}
          {/*<SomeReducer />*/}
          <UserForm />
          <hr/>
          {/*<ListOfNumbersUseMemo />*/}
          {/*<SortListForUseCallback />*/}
          <GetData />
          <StopWatch />
      </div>
  )
}

export default App;
