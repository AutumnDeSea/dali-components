import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomSlider } from './PlayGround/CustomSlider';

export default {
  title: 'Example/Slider',
  component: CustomSlider,
} as ComponentMeta<typeof CustomSlider>;
const Template: ComponentStory<typeof CustomSlider> = () => <CustomSlider />;

export const Custeom = Template.bind({});
