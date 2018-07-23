  import React from 'react';

export class Card extends React.Component{

    constructor(){
      super();
      this.renderComponents=this.renderComponents.bind(this); 

    }


  renderComponents(obj)
  {
      return(
      <div>
        <div className="shadow p-4 mb-4 bg-white">
        <div className="row">
            <div className="col-md-4">
              <img className="rounded-circle pull-right" src={obj.avatar_url} height="100px" width="100px" />
            </div>

          <div className="col-md-6">
            <h3></h3><br/>
            <label>Profile:&nbsp; </label><a target="_blank" href={obj.html_url}>{obj.html_url}</a><br/>
            <label>Score:</label>{  (obj.score).toFixed(2)}<br/>
          </div>
          <div className="col-md-2">
          </div>
        </div> 
        </div>
        </div>
      );
    }
  

  render(){

    var total_count=(<span><strong>Total Results: {this.props.total_results} </strong></span>);
    //console.log(typeof this.props.users);
    console.log();
    return(
      <div>
      {this.props.total_results!=null ? (total_count): (null)}
    {this.props.users.map(this.renderComponents)}
    </div>
    );

  }
}

