import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
function BasicExample() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark TopHeader">
      <a className="navbar-brand" href="#">HiringRoof.com</a>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Jobs</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" style={{display:"flex",marginLeft:"10%",marginTop:"10%"}}>
          <input className="form-control" style={{width:"500px"}} type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-info searchBtn" type="submit">Search</button>
        </form>
        <div className='text-light' style={{marginLeft:"15%"}}>Profile</div>
        <div className='text-light'style={{marginLeft:"5%"}}>LogOut</div>
      </div>
    </nav>

  );
}

export default BasicExample;