import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
class Customer extends Component{

    state={
        customers:[],
        loading:true,
    }

    async componentDidMount(){
        const res =  await axios.get('http://localhost:8000/api/customers');
        console.log(res);
        if(res.data.status === 200)
        {
            this.setState({
                customers: res.data.customers,
                loading:false,
            })
        }
    }

    deleteCustomer = async (e , id) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText="Deleting";
        const res =  await axios.delete(`http://localhost:8000/api/delete-customer/${id}`);
        if(res.data.status === 200)
        {
            
            thisClicked.closest("tr").remove();
            swal({
                title: "Deleted!",
                text: "Customer Deleted!",
                icon: "success",
                button: "Finish!",
              });
        }
    }

    render(){
        var customerTable="";
        if(this.state.loading)
        {
            customerTable = <tr><td colSpan="8"><h2>Loading..</h2></td></tr>
        }
        else
        {
            customerTable = 
            this.state.customers.map((item)=>{
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.company}</td>
                        <td>{item.address}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td><Link to={`edit-customer/${item.id}`} className="btn btn-success btn-sm">Edit</Link></td>
                        <td><button type="button" onClick={(e) => this.deleteCustomer(e,item.id)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                )
            })
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Customers</h4>
                                <Link to={'add-customer'} className="btn btn-primary btn-sm float-end">Add Customer</Link>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Company</th>
                                            <th>Address</th>
                                            <th>E-mail</th>
                                            <th>Phone</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customerTable}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Customer;