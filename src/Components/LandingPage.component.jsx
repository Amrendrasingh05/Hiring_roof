import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Topheader from './Topheader.component'
import Bg from '../Images/Bg.png'
import r1 from '../Images/WhatsApp Image 2022-09-27 at 2.16.10 PM.jpeg'

import swal from 'sweetalert';

import SignIn from './SignIn.component'

function LandingPage() {

    function ApplyBtn() {

        const DEFAULT_INPUT_TEXT = "";

        class MyInput extends Component {
            constructor(props) {
                super(props);

                this.state = {
                    text: DEFAULT_INPUT_TEXT,
                };
            }

            changeText(e) {
                let text = e.target.value;

                this.setState({
                    text,
                });


                swal.setActionValue(text);
            }

            render() {
                return (
                    <input
                        value={this.state.text}
                        onChange={this.changeText.bind(this)}
                    />
                )
            }
        }


        let wrapper = document.createElement('div');
        ReactDOM.render(<MyInput />, wrapper);
        let el = wrapper.firstChild;

        swal({
            text: "Write something here:",
            content: el,
            buttons: {
                confirm: {
                    value: DEFAULT_INPUT_TEXT,
                },
            },
        })
            .then((value) => {
                swal(`You typed: ${value}`);
            });

    }
    return (
        <div>
            <Topheader />



            <div className='LandingPageContainer'>

                <div className='SignIn'>

                    <div className='SignDetails'>
                        <h1 className='ColorWhite'>HiringRoof.com</h1>
                        <p className='ColorGray'>We help to find your job.</p>
                        <input type="text" placeholder='Mobile No:' />
                        <input type="password" name="" id="" placeholder='Password' />
                        <button className='btn btn-primary'>Log in</button>
                        <p className='ColorGray'>Don't Have Account? <a href="">Sign up</a></p>
                    </div>
                </div>
                <div>
                    <img src={Bg} alt="" />
                </div>


            </div>
            <div className="BgTheme">

            <div className="card mb-3 RestaurantCard">
                    <div className="row no-gutters">

                        <div className="col-md-8">
                            <div className="card-body">
                               <div  className="card-title"><h3 className='ColorWhite'>Amazon </h3> <p className='text-info'>(40 LPA )</p> &nbsp; <p>Negotiable</p> </div>
                                <p className="card-text">
                                    <p className="ColorWhite">Skills<p className='ColorGray'>Reactjs, Nodejs, Express, MongoDB</p></p>
                                    <p className="ColorWhite">Experience<p className='ColorGray'>2 years</p></p>
                                    <p className="ColorWhite">Work Type<p className='ColorGray'>Fulltime</p></p>
                                    <p className="ColorWhite">Job Type<p className='ColorGray'>Remote</p></p>
                                    
                                </p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <div>
                                    <div>
                                        <button className='btn btn-outline-info border border-info  ms-0' onClick={ApplyBtn}> Apply </button>
                                        <button className='btn btn-outline-info border border-info ms-5'> Shortlisted </button>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 RestaurantCard">
                    <div className="row no-gutters">

                        <div className="col-md-8">
                            <div className="card-body">
                               <div  className="card-title"><h3 className='ColorWhite'>Amazon </h3> <p className='text-info'>(40 LPA )</p> &nbsp; <p>Negotiable</p> </div>
                                <p className="card-text">
                                    <p className="ColorWhite">Skills<p className='ColorGray'>Reactjs, Nodejs, Express, MongoDB</p></p>
                                    <p className="ColorWhite">Experience<p className='ColorGray'>2 years</p></p>
                                    <p className="ColorWhite">Work Type<p className='ColorGray'>Fulltime</p></p>
                                    <p className="ColorWhite">Job Type<p className='ColorGray'>Remote</p></p>
                                    
                                </p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <div>
                                    <div>
                                        <button className='btn btn-outline-info border border-info  ms-0' onClick={ApplyBtn}> Apply </button>
                                        <button className='btn btn-outline-info border border-info ms-5'> Shortlisted </button>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 RestaurantCard">
                    <div className="row no-gutters">

                        <div className="col-md-8">
                            <div className="card-body">
                               <div  className="card-title"><h3 className='ColorWhite'>Amazon </h3> <p className='text-info'>(40 LPA )</p> &nbsp; <p>Negotiable</p> </div>
                                <p className="card-text">
                                    <p className="ColorWhite">Skills<p className='ColorGray'>Reactjs, Nodejs, Express, MongoDB</p></p>
                                    <p className="ColorWhite">Experience<p className='ColorGray'>2 years</p></p>
                                    <p className="ColorWhite">Work Type<p className='ColorGray'>Fulltime</p></p>
                                    <p className="ColorWhite">Job Type<p className='ColorGray'>Remote</p></p>
                                    
                                </p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <div>
                                    <div>
                                        <button className='btn btn-outline-info border border-info  ms-0' onClick={ApplyBtn}> Apply </button>
                                        <button className='btn btn-outline-info border border-info ms-5'> Shortlisted </button>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 RestaurantCard">
                    <div className="row no-gutters">

                        <div className="col-md-8">
                            <div className="card-body">
                               <div  className="card-title"><h3 className='ColorWhite'>Amazon </h3> <p className='text-info'>(40 LPA )</p> &nbsp; <p>Negotiable</p> </div>
                                <p className="card-text">
                                    <p className="ColorWhite">Skills<p className='ColorGray'>Reactjs, Nodejs, Express, MongoDB</p></p>
                                    <p className="ColorWhite">Experience<p className='ColorGray'>2 years</p></p>
                                    <p className="ColorWhite">Work Type<p className='ColorGray'>Fulltime</p></p>
                                    <p className="ColorWhite">Job Type<p className='ColorGray'>Remote</p></p>
                                    
                                </p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <div>
                                    <div>
                                        <button className='btn btn-outline-info border border-info  ms-0' onClick={ApplyBtn}> Apply </button>
                                        <button className='btn btn-outline-info border border-info ms-5'> Shortlisted </button>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        


    );
}
export default LandingPage;