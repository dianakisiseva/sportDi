<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("users")->updateOrInsert(
            ['id' => 1],
            [
                'role_id' => 1,
                'first_name' => 'Admin',
                'last_name' => 'Admin',
                'login' => 'admin',
                'email' => 'admin@mailinator.com',
                'password' => Hash::make("P@ssw0rd")
            ]);
    }
}
