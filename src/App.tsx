import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { CustomSlider } from './stories/PlayGround/CustomSlider'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <CustomSlider/>
        {/* <button className="bg-red-500">hello world</button> */}
      </div>
    </StyledEngineProvider>
  );
}

export default App;
