<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function list(){
        $customers = Customer::all();
        return response()->json([
            'status' => 200,
            'customers' => $customers
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
