import { Button as MuiButton } from '@mui/material';
interface ButtonProps {
    /**
     * 按钮的类型
     */
    variant?: 'text' | 'contained' | 'outlined',
    /**
     * 按钮的尺寸
     */
    size?: 'small'| 'medium' | 'large',
    /**
     * 按钮的颜色
     */
    color?: 'success' | 'secondary' | 'error',
    children?: React.ReactNode;
}
export const Button = (props: ButtonProps = {
  variant: 'contained',
  size: 'medium'
}) => {
    console.log('🚗--》', props)
  return (
    <MuiButton {...props}>{props.children}</MuiButton>
  );
};
