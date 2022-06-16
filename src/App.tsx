import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
// import { CustomSlider } from '../src/components/Slider'
import { Button } from './components/Button'


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Button variant='contained'>hello wold</Button>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
