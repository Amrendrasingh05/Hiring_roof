import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from "react-router-dom";
import "../App.css";
function BasicExample() {
  const location = useLocation()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark TopHeader">
      <a className="navbar-brand" href="/Home">
        HiringRoof.com
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/Home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Jobs">
              Jobs
            </a>
          </li>


          <li className="nav-item">
            <a className="nav-link" href="/RecruitersPage">
              Recruiters
            </a>
          </li>


        </ul>
        <form
          className="form-inline my-2 my-lg-0"
          style={{ display: "flex", marginLeft: "10%", marginTop: "10%" }}
        >
          <input
            className="form-control"
            style={{ width: "500px" }}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-info searchBtn" type="submit">
            Search
          </button>
        </form>
        {location.pathname==='/RecruitersPage' ? (
          <div className="text-light" style={{ marginLeft: "15%" }}>
            <a className="nav-link" href="/RecruitersProfile">
              Recruiter's Profile
            </a>
          </div>
        ) : (
          <div className="text-light" style={{ marginLeft: "15%" }}>
            <a className="nav-link" href="/Profile">
              Profile
            </a>
          </div>
        )}

        <div className="text-light" style={{ marginLeft: "5%" }}>
          <a className="nav-link" href="/">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

export default BasicExample;
