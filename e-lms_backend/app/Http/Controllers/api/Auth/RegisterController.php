<?php

namespace App\Http\Controllers\api\Auth;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Dirape\Token\Token;
use App\User;

class RegisterController extends Controller
{
    public function create(Request $request){
        $validator = Validator::make($request->all(),[
          'uid'         => 'required',
          'fullname'    => 'required|string',
          'phone'       => 'required|max:11|min:11',
          'school_id'  => 'required|string',
          'school_name' => 'required|string',
          'year_level'  => 'required|string',
          'section'     =>'required|string',
          'username'    => 'required|string',
          'email'    => 'required|email',
          'password'    => 'required|string',
          'user_type'   =>'required|string',
       ]);

       if($validator->fails()) {
            return response()->json([
               'status'  => 400,
               'message' => $validator->messages(),
            ]);
       }
            $token = (new Token())->Unique('users', 'user_token', 60);

            $user = new User();
            $user->uid = $request->input('uid');
            $user->fullname = $request->input('fullname');
            $user->phone = $request->input('phone');
            $user->school_id = $request->input('school_id');
            $user->school_name = $request->input('school_name');
            $user->year_level = $request->input('year_level');
            $user->section = $request->input('section');
            $user->username = $request->input('username');
            $user->email = $request->input('email');
            $user->password = Hash::make($request->input('password'));
            $user->user_type = $request->input('user_type');
            $user->user_token = $token;
            $user->save();
          
          return response()->json([
              'status' => 200,
              'message' => 'Account Successfully Created.',
          ]);
         
    }
}
