
import { Routes, Route } from 'react-router-dom';
import { MySQLProvider } from './components/contexts/MySQLContext';

import Config from './components/modulos/Config';

// import CheckDB from './components/pages/CheckDB';
// import BackupDB from './components/pages/BackupDB';
// import RestoreDB from './components/pages/RestoreDB';
// import ExplorerDB from './components/pages/ExplorerDB';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MySQLRoutes = () => {
  return (
    <MySQLProvider>
      <Routes>
        <Route path="/config" element={<Config />} />
        {/* <Route path="/checkdb" element={ <CheckDB />} />
        <Route path="/backupdb" element={<BackupDB />} />
        <Route path="/restoredb" element={<RestoreDB />} />
        <Route path="/explorerdb" element={<ExplorerDB />} /> */}
      </Routes>
    </MySQLProvider>
  );
};
export default MySQLRoutes;
