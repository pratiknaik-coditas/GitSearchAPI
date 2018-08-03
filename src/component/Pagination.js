import React from 'react';
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
import {Card} from './Card';
import { connect } from 'react-redux';

class Paginations extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
        activePage:1,
        lastpage:4,
        };

        this.onPageClick=this.onPageClick.bind(this);
        this.generatePageLinks=this.generatePageLinks.bind(this);
    }
   
    generatePageLinks(index){
    return(this.state.activePage==index ? (<li key={index} className="page-item active" ><a key={index} onClick={this.onPageClick} className="page-link"  >{index}</a></li>):
    (<li key={index} className="page-item " ><a key={index} onClick={this.onPageClick} className="page-link"  >{index}</a></li>));                        
    }
    
    onPageClick(e){
      
       this.props.onPageChange(this.props.query,e.target.text);
       this.setState({activePage:e.target.text});

    }
    pagination(c, m) {
      var current = c,

          last = m,
          delta = 2,
          left = current - delta,
          right = current + delta + 1,
          range = [],
          rangeWithDots = [],
          l;
      for (let i = 1; i <= last; i++) {
          if (i == 1 || i == last || i >= left && i < right) {
              range.push(i);
          }
      }
      for (let i of range) {
          if (l) {
              if (i - l === 2) {
                  rangeWithDots.push(l + 1);
              } else if (i - l !== 1) {
                  rangeWithDots.push('...');
              }
          }
          rangeWithDots.push(i);
          l = i;
      }
      return rangeWithDots;
  }
  
     render()
    {   let index;
        var content=[];
    //   var noofpages= (Math.ceil(this.props.total_results/10));
    //   let pagearray=this.pagination(this.state.activePage,noofpages);

      //console.log("active page "+this.state.activePage+"  array",pagearray);
        // 
        
    //   content.push(pagearray.map(this.generatePageLinks));

    return(
        <div>
          <div className="row">
	            <div className="col-md-3"></div>
				<div className="col-md-6">
                <Card users={this.props.users}  total_results={this.props.users.length}/>
				</div>
				<div className="col-md-3"></div>
			</div>
          
          <ul className="pagination float-right">
        {/* <li  className="page-item  " ><a  onClick={this.onPageClick} className="page-link"  >Previous</a></li> */}
        {content}
        {/* <li  className="page-item " ><a  onClick={this.onPageClick} className="page-link"  >Next</a></li> */}
        </ul> </div>
        );
    }
}//class

function mapStateToProps(state){
    return{
        users:state.rootReducer.userData
    };
}
export default connect(mapStateToProps,null)(Paginations);




    