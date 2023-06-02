import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import FirstPage from './FirstPage';
import { RenderRoutes } from './RenderRoutes';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([FirstPage, MainRoutes, AuthenticationRoutes, RenderRoutes]);
}
