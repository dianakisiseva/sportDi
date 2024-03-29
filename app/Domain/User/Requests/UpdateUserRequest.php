<?php

namespace App\Domain\User\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'login' => ['required', 'max:255', 'unique:users,login,' . $this->user->id],
            'email' => ['required', 'email', 'max:255', 'unique:users,email,' . $this->user->id]
        ];
    }
}
