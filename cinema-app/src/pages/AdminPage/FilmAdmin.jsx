import Topbar from "../../components/Admin/topbar/topbar";
import Sidebar from "../../components/Admin/sidebar/sidebar";
import "./HomeAdmin.scss"
function FilmAdminPage() {
  return (
   <>
         <Topbar/>
      <div className="container">
       <Sidebar/>
        <div >other Page</div>
      </div>

        </>
  );
}
export default FilmAdminPage;
