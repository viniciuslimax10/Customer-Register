import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


class AddCustomer extends Component{
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

    saveCustomer =  async (e) =>{
        e.preventDefault();

        const res = await axios.post("http://localhost:8000/api/add-customer",this.state);

        console.log(res);
        if(res.data.status === 200)
        {
            swal({
                title: "Success!",
                text: "Customer Created!",
                icon: "success",
                button: "Finish!",
              });
            this.setState({
                name:'',
                company:'',
                address:'',
                email:'',
                phone:'',
            })
        }
       
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Customers</h4>
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveCustomer}>
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name}  className="form-control" required></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Company Name</label>
                                        <input type="text" name="company" onChange={this.handleInput} value={this.state.company}  className="form-control"required ></input>
                                        
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Address</label>
                                        <input type="text" name="address" onChange={this.handleInput} value={this.state.address}  className="form-control" required></input>
                                        
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>E-mail</label>
                                        <input type="email" name="email" onChange={this.handleInput} value={this.state.email}  className="form-control" required></input>
                                                                           </div>
                                    <div className="form-group mb-3">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" onChange={this.handleInput} value={this.state.phone}  className="form-control" required></input>
                                                                           </div>
                                    <div className="form-group mb-3">
                                       <button type="submit" className="btn btn-primary"> Save Customer</button>
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

export default AddCustomer;