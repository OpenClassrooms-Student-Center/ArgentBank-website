import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import router from './Router'
import { Provider } from 'react-redux';
import store from './redux/store/store';

// QUAND JE FERAI LA MISE EN PLACE DE REDUX :
// ajouter "" et """ dans les imports
// remplacer le contenu du routeur par "<Provider store = {store}><RouterProvider router={router}/></Provider>" a l'intérieur des balises StrictMode

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
