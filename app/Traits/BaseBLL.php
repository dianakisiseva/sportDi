<?php

namespace App\Traits;

abstract class BaseBLL
{
    public $DAL;

    public function find($id)
    {
        return $this->DAL->find($id);
    }

    public function tryFind($id)
    {
        return $this->DAL->tryFind($id);
    }


    public function get()
    {
        return $this->DAL->get();
    }

    public function query()
    {
        return $this->DAL->query();
    }

    public function getByColumns($columns)
    {
        return $this->DAL->getByColumns($columns);
    }

    public function getByColumnsQuery($columns)
    {
        return $this->DAL->getByColumnsQuery($columns);
    }

    public function create(array $data)
    {
        return $this->DAL->create($data);
    }

    public function insert(array $data)
    {
        return $this->DAL->insert($data);
    }

    public function update($model, array $data)
    {
        return $this->DAL->update($model, $data);
    }

    public function updateOrCreate($attributes, $values)
    {
        return $this->DAL->updateOrCreate($attributes, $values);
    }


    public function delete($model)
    {
        return $this->DAL->delete($model);
    }
}
