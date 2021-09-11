<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')->primaryKey();
            $table->string('uid')->unique();
            $table->string('fullname');
            $table->string('phone')->unique();
            $table->string('school_id');
            $table->string('school_name');
            $table->string('year_level');
            $table->string('section');
            $table->string('username');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('user_type');
            $table->string('user_token')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
