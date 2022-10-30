<?php

namespace App\Domain\Organization\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrganizationRequest extends FormRequest
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
            'name' => 'required|max:255',
            'login' => ['required', 'max:255', 'unique:organizations,login,' . $this->organization->id],
            'email' => ['required', 'email', 'max:255', 'unique:organizations,email,' . $this->organization->id]
        ];
    }
}
