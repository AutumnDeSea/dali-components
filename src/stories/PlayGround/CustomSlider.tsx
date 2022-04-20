import { Slider } from '@mui/material';

export const CustomSlider = () => {
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
