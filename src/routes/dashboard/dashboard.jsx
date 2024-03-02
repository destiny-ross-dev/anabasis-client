import { Outlet } from "react-router-dom";
import { DashboardContainer } from "./dashboard.styles";
import Navigation from "../../components/navigation/navigation";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <aside>aside</aside>
    </DashboardContainer>
  );
};

export default Dashboard;
