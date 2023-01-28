import FirstContextProvider from './context/FirstContext';

import Comp2 from './components/Comp2';



function App() {
  return (
    <div>
      <FirstContextProvider>
        <Comp2/>
      </FirstContextProvider>
    </div>
  );
}

export default App;
