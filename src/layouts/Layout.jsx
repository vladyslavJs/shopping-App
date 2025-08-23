import { Outlet } from 'react-router-dom';
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
