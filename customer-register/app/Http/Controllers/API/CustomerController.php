<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    public function list(){
        $customers = Customer::all();
        return response()->json([
            'status' => 200,
            'customers' => $customers
        ]);
    }
    public function edit($id){
        $customer = Customer::find($id);
        return response()->json([
            'status' =>200,
            'customer' => $customer
        ]);
    }
    public function update(Request $request,$id){
        $customer = Customer::find($id);
        $customer->name = $request->input('name');
        $customer->company = $request->input('company');
        $customer->address = $request->input('address');
        $customer->email = $request->input('email');
        $customer->phone = $request->input('phone');
        $customer->update();

        return response()->json([
            'status'=>200,
            'message'=> "Customer Updated Succesfull"
        ]);
    }
    public function delete($id){
        $customer = Customer::find($id);
        $customer->delete();
        return response()->json([
            'status'=>200,
            'message'=> "Customer Deleted Succesfull"
        ]);
    }
    public function store(Request $request){
       
            $customer = new Customer;
            $customer->name = $request->input('name');
            $customer->company = $request->input('company');
            $customer->address = $request->input('address');
            $customer->email = $request->input('email');
            $customer->phone = $request->input('phone');
            $customer->save();
    
            return response()->json([
                'status'=>200,
                'message'=> "Customer Created Succesfull"
            ]);
        

        
    }
}
