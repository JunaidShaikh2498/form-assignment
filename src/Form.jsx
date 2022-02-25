import React, { Component } from 'react'

export class Form extends Component {
constructor(){
  super();
  this.state={
      
      name:'',
      dept:'',
      rating:'',
      count:1,
      arr:[]
    }
  }

    eventTrigger=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      });
    }
  
  submitForm=(event)=>{
    //event.preventDefault();
    const det_obj={
      name:this.state.name,
      dept:this.state.dept,
      rating:this.state.rating,
      count:this.state.count,
    };
    this.state.arr.push(det_obj);

    this.setState({
      name:"",
      dept:"",
      rating:"",
      count: this.state.count +1
  });    
  }
  
  render() {
    return (
      <>
      <div>
        <h1 style={{textAlign:"Center"}}>EMPLOYEE FEEDBACK FORM</h1>
        <form>
            <label className='ip_elem1' htmlFor="name">Name:</label> 
            <input className='ip' type="text" name='name' id="name" value={this.state.name}  onChange={this.eventTrigger} required /><br /><br />

            <label className='ip_elem2' htmlFor="dept.">Department:</label> 
            <input className='ip' type="text" name='dept' id='dept.' value={this.state.dept} onChange={this.eventTrigger} required /><br /><br />

            <label className='ip_elem3' htmlFor="rating">Rating:</label>
            <input className='ip' type="number" name="rating" id="rating" value={this.state.rating} onChange={this.eventTrigger} required /><br /><br />

            <input className='sub_btn' type="submit" onClick={()=>this.submitForm()} />
        </form>
      </div>

      <div className="details">
          {this.state.arr.length>0 && this.state.arr.map( (elem) => {
            return (
              <div id="inner_container">
              <h2> {elem.count} : {elem.name} || {elem.dept} || {elem.rating}</h2>
              </div>
            )
          }
          )}
      </div>
      </>      
    )
  }
}
export default Form