import { Route, Routes } from 'react-router-dom';
import ApplicationArchive from '../pages/ApplicationArchive';
import Archive from '../pages/Archive';
import ApplicationForm from './ApplicationForm';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/application-archive" element={<ApplicationArchive />} />
      <Route path="/application-form" element={<ApplicationForm />} />
      <Route path="/" element={<Archive />} />
    </Routes>
  );
};

export default AppRouter;
