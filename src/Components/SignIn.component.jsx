import BgImg from '../Images/vecteezy_abstract-template-blue-wavy-curve-shape-design-on-white_.jpg'
function GetStart(){
    return(
        <div className="SignIn" style={{display:"flex",alignItems:"center",justifyContent:"space-between",    
        backgroundImage: `url("https://img.freepik.com/free-vector/black-yellow-fluid-style-banner-design_1017-37645.jpg")` }}>
            <div className="GetStartedImg"></div>
            
            <div className="GetSrtDetails">
                <h1>Create an account</h1>
                <p>Let's get your first Bid</p>
                <div className="alignCenter">
                <input type="text" className="GetSrtName" placeholder="Name"/>
                <input type="number" name="" id="" className="GetSrtNum" placeholder="Enter your Mobile Number"/>
                <input type="email" name="" id="" className="GetSrtEmail" placeholder="Email" />
               <br /> <button  style={{backgroundColor:'red'}}>CREATE ACCOUNT</button>
                <p>I already have an account? <a href="">Login</a></p>
                </div>
            </div>
        </div>
    );
}
export default GetStart;