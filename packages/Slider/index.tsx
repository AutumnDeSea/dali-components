import { Slider } from '@mui/material';
interface SliderProps {
 size?: 'small' | 'medium' | 'large'
}
export const CustomSlider = (props: SliderProps = {}) => {
  return (
    <Slider
      defaultValue={30}
      className="text-teal-600"
      classes={{ active: 'shadow-none' }}
      componentsProps={{
        thumb: { className: 'rounded-sm hover:bg-yellow-200' },
      }}
    />
  );
};
