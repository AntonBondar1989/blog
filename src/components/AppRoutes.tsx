import { Route, Routes } from "react-router-dom";
import InfoPage from "./pages/InfoPage/InfoPage";
import Main from "./pages/Main";
import NotePage from "./pages/NotePage";
import StatisticsPage from "./pages/StatisticsPage";


const AppRouter: React.FC = () => {
   return (
      <Routes>
         <Route path="/main" element={<Main />} />
         <Route path="/" element={<Main />} />
         <Route path="/info" element={<InfoPage />} />
         <Route path="/stat" element={<StatisticsPage />} />
         <Route path="/note" element={<NotePage />} />
      </Routes>
   )
}

export default AppRouter;