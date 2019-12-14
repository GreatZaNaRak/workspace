import React, { Component } from 'react'

export default class Footer extends Component {


    render() {


        return (


            <div style={{marginTop:30}}>
                
                <div class="row">

                   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <p><b>Instruction</b>: This is a program to check wheter the shelf is empty or not 
                            press get value button to check and you can toggle the light by press wait and abort button.
                        </p>
                        <p>
                            <b>hint1</b>: The red bulb light mean the shelf will be left empty. The yellow bulb light mean the
                            shelf is waiting for adding book. 
                        </p>
                        <p>
                            <b>hint2</b>: The reset button is to reset the result for the next checking.
                        </p>
                        

                   </div>


                </div>

            </div>


        )


    }
}
