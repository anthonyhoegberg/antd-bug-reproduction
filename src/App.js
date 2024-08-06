import React from 'react';
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
  Spin,
  Input
} from 'antd';
import './App.less';

const { Option } = Select;
const { Title } = Typography;

const App = () =>  {
  
  const [spinning, setSpinning] = React.useState(false);
 

  return (
  <>
      <Input onChange={() => {
        setTimeout(() => {
          setSpinning(true);
          setTimeout(() => {
            setSpinning(false);
            
          }, 3000)
        }, 3000)


      }} placeholder="Basic usage" />
      <Spin spinning={spinning} fullscreen />

  </>
)};

export default App;