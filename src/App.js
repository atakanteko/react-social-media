import { router } from './router/routes'
import { 
  RouterProvider,
  Route 
} from 'react-router-dom';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
