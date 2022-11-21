function ApplyPage(){
    return(
        <>
        <h1>Hii</h1>
        
            {/* <Header /> */}
            <div className='specificFoodBG' style={{ display: "flex", justifyContent: "space-around", paddingTop: "1%" }}>
                <div className="card specificFood">
                    <div className="card-body">
                        <div style={{ display: "flex" }}>

                            {/* <img src={"https://kisaanandfactory.com/static_file/" + PrImage} className="card-img-top" style={{ height: "300px", width: "300px", margin: "2%" }} alt="" /> */}
                            <div>

                                <h2 className="card-title">Company Name  </h2>
                                <h5>Project Budget</h5>
                                {/* <h5 className="card-text">PrDiscount % discount</h5>
                                <h5 className="card-text">PrDesc </h5>
                                <h5>Rating PrRating  out of 5</h5> */}
                            </div>
                        </div>









                       <div className='text-warning' style={{display:"flex",justifyContent:"space-between"}}> 
                        <div>Restaurant Details</div> 
                        <input type="text" placeholder="Enter Your Bib" />
                        {/* <input type="number" placeholder='Qty' onChange={(e) => setquantity(e.target.value)} /> */}
                        <button className='btn btn-warning text-white'>Bid</button> 
                        </div>
                        <hr />
                        
                        <div className='text-white'>Shop Name &nbsp;&nbsp;&nbsp;&nbsp; shopName </div>
                        <div className='text-white'>Owner Name &nbsp;&nbsp;&nbsp;OwnerName </div>
                        <div className='text-white'>Email Add: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email </div>
                        <div className='text-white'>Mobile no: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mobile </div>
                            
                    </div>
                </div>
                </div>
        </>
    );

};


export default ApplyPage;