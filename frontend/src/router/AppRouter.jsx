
import {Routes, Route} from 'react-router-dom';

import Home from '@/pages/Home';
import Doc from '@/pages/Doc';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doc" element={<Doc />} />
    </Routes>
  );
};

export default AppRouter;