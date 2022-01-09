import React, {Component} from 'react';
import { Link ,useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';

class EditCustomer extends Component{
    
    state={
        name:'',
        company:'',
        address:'',
        email:'',
        phone:'',
    }

    handleInput =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
       
    }

    

    async componentDidMount(){
       const customerId = this.props.match.params.id;
    //    console.log(id);
       const res= await axios.get(`http://localhost:8000/api/edit-customer/${customerId}`);
       if(res.data.status===200){
           this.setState({
            name:res.data.customer.name,
            company:res.data.customer.company,
            address:res.data.customer.address,
            email:res.data.customer.email,
            phone:res.data.customer.phone,
           })
       }
    }

   

    updateCustomer =  async (e) =>{
        e.preventDefault();
        
        document.getElementById("updatebtn").disabled=true;
        document.getElementById("updatebtn").innerText = "Updating"
        const customerId = this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update-customer/${customerId}`,this.state);

        if(res.data.status === 200)
        {
            swal({
                title: "Edited!",
                text: "Customer Edited!",
                icon: "success",
                button: "Finish!",
              });
            document.getElementById("updatebtn").innerText = "Edit Customer";
            document.getElementById("updatebtn").disabled=false;
        }
    }

    render(){
        function Invoice() {
            let params = useParams();
            return <h1>Invoice {params.id}</h1>;
           
          }
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Customer</h4>
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateCustomer}>
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name}  className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Company Name</label>
                                        <input type="text" name="company" onChange={this.handleInput} value={this.state.company}  className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Address</label>
                                        <input type="text" name="address" onChange={this.handleInput} value={this.state.address}  className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>E-mail</label>
                                        <input type="email" name="email" onChange={this.handleInput} value={this.state.email}  className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" onChange={this.handleInput} value={this.state.phone}  className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                       <button type="submit" id="updatebtn" className="btn btn-primary"> Edit Customer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default EditCustomer;