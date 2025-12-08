
//C:\repository\proj-full-stack-frontend\src\App.tsx

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/Global';
import { AcessoProvider } from './components/contexts/AcessoProvider';
import AppRoutes from './AppRoutes';
import InstallSys from './components/InstallSys';

const App: React.FC = () => {

  const [isReady, setIsReady] = React.useState(false);

  if (!isReady) {
    return <InstallSys onFinish={() => setIsReady(true)} />;
  }

  return (
    <BrowserRouter>
      <Global />
      <AcessoProvider>
        <AppRoutes />
      </AcessoProvider>
    </BrowserRouter>
  );
};

export default App;



// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Global from './styles/Global';
// import { AcessoProvider } from './components/contexts/AcessoProvider';
// import AppRoutes from './AppRoutes';

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Global />
//       <AcessoProvider>
//         <AppRoutes />
//       </AcessoProvider>
//     </BrowserRouter>
//   );
// };

// export default App;
 