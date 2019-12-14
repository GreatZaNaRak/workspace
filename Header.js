import React, { Component } from 'react'

export default class Header extends Component {


    render() {


        return (
            
            <div style={{backgroundColor:"black"}}>
            {/* // <!-- Nav tabs --> */}
            <ul class="nav nav-tabs" id="navId">
                <li class="nav-item">
                    <a href="#tab1Id" class="nav-link active">Embdeded System Lab</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Content</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#tab2Id">Action</a>
                        <a class="dropdown-item" href="#tab3Id">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#tab4Id">Action</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#tab5Id" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link disabled">CP44</a>
                </li>
                
            </ul>
            
            {/* // <!-- Tab panes --> */}
            <div class="tab-content">
                <div class="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
                <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
                <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
                <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
                <div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
            </div>
            
         
            </div>

        )
    }
}
