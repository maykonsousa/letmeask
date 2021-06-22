import * as Imports from './imports'

function App() {
  return (
    <Imports.BrowserRouter>
      <Imports.AuthContextProvider>
        <Imports.Route path="/" exact component={Imports.Home} />
        <Imports.Route path="/rooms/new" component={Imports.NewRoom} />
      </Imports.AuthContextProvider>
    </Imports.BrowserRouter>
  );
}

export default App;
