import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            i: 0,
            j: 0,
            disable: true,
            pic: [require('./picture/p1.png'), require('./picture/p2.png'), require('./picture/p3.png')],
            pro: [require('./picture/process.gif'), require('./picture/non_empty.png'), require('./picture/empty.png')],
            gumball: [require('./picture/gumball_1.png'), require('./picture/gumball_2.png'), require('./picture/gumball_3.png')]
        }
        this.handleGet = this.handleGet.bind(this)
        this.handleWait = this.handleWait.bind(this)
        this.handleAbort = this.handleAbort.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleGet() {

        this.setState({disable: false});
        // if the value we get mean that shelf is not empty
        // if ()
        this.setState({j: 1});
        

        // if the value we get mean that shelf is not empty
        // else if()
        // this.setState({j: 2});
    }

    handleWait() {
        this.setState({i: 1});
    }

    handleAbort() {
        this.setState({i: 2});
    }

    handleReset() {
        this.setState({i: 0});
        this.setState({j: 0});
        this.setState({disable: true})
    }


    render() {

        

        return (

            <div>
                
                <Header />
                <h1 style={{textAlign:"center", fontFamily:"comicsan", marginBottom:30}}>Auto Book Store Checking</h1>

                {/* picture */}
                
                <div class="row">
                   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                   <img src={this.state.pro[this.state.j]} style={{marginRight:150, marginLeft:330}}/>
                   <img src={this.state.pic[this.state.i]} style={{marginLeft:200, marginRight:200}}/>
                   </div>
                </div>

                {/* Button */}

                <div style={{textAlign:"center"}}>


                    <button onClick={this.handleGet} class="btn btn-primary" style={{marginTop:50, width:120, height:50, marginRight:30}}           disabled={!this.state.disable}>GET VALUE</button>
                    <button class="btn btn-warning" onClick={this.handleWait} style={{marginTop:50, width:120, height:50, marginRight:30}}          disabled={this.state.disable}>WAIT</button>
                    <button class="btn btn-danger" onClick={this.handleAbort} style={{marginTop:50, width:120, height:50, marginRight:30}}          disabled={this.state.disable}>ABORT</button>
                    <button onClick={this.handleReset} class="btn btn-success" style={{marginTop:50, width:120, height:50}}
                            disabled={this.state.disable}>RESET</button>

                </div>

                <Footer />

                <div style={{marginTop:30, textAlign:"center"}}>

                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                            <h1 style={{marginBottom:20}}>Result from sensor: /* */</h1>
                            <img src={this.state.gumball[this.state.j]} />

                        </div>
                    </div>

                </div>

                <div style={{marginTop:30, textAlign:"right"}}>

                    <p>Copyright (c) 2019 by CP44 student, Embeded system lab</p>

                </div>
                

            </div>

        )


    }

}
