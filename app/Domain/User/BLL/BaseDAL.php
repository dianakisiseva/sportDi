<?php

namespace App\Domain\User\BLL;



abstract class BaseDAL
{
    public $model;

    public function find($id)
    {
        return $this->model->findOrFail($id);
    }

    public function tryFind($id)
    {
        return $this->model->find($id);
    }

    public function get()
    {
        return $this->model->all();
    }

    public function query()
    {
        return $this->model->query();
    }

    public function getByColumns($columns)
    {
        return $this->getByColumnsQuery($columns)->get();
    }

    public function getByColumnsQuery($columns)
    {
        $query = $this->model;

        foreach ($columns as $key => $val) {
            if (is_iterable($val)) {
                $query = $query->whereIn($key, $val);

                unset($columns[$key]);
            }
        }

        return $query->where($columns);
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function make(array $data)
    {
        return $this->model->make($data);
    }


    public function insert(array $data)
    {
        return $this->model->insert($data);
    }

    public function update($model, array $data)
    {
        return $model->update($data);
    }


    public function updateOrCreate($attributes, $values)
    {
        return $this->model->updateOrCreate($attributes, $values);
    }


    public function save($model)
    {
        return $model->save();
    }

    public function delete($model)
    {
        return $model->delete();
    }
}
