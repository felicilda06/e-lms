<?php

namespace App\Http\Controllers\api\Auth;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\User;

class LoginController extends Controller
{
    public function login(Request $request){
        
        $login = $request->validate([
            'username'   =>'required|string',
            'password'   =>'required|string',
            'user_type'  =>'required|string',
        ]);

        if(!Auth::attempt($login)){
            return response()->json([
                'status'  => 500,
                'message' =>'Invalid Login Credentials',
            ]);
        }

        $token = Auth::user()->createToken('authToken')->accessToken;

        return response()->json([
            'status' => 200,
            'user' => Auth::user(),
            'access_token' => $token
        ]);

    }

    public function index(){
        return User::all();
    }
}
