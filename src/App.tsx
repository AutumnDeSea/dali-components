import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { CustomSlider } from '../src/components/Slider'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <CustomSlider/>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
