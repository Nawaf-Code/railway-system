import { FetchData } from "./components/FetchData";
import RankTravels from "./components/RankTravels";
import Home from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/rank-travels',
    element: <RankTravels />
  },
  
];

export default AppRoutes;
