import { CustomSlider } from './stories/PlayGround/CustomSlider';
import './App.css';
import { StyledEngineProvider } from '@mui/material';

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
