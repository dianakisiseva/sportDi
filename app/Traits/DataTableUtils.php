<?php

namespace App\Traits;


trait DataTableUtils
{

    /**
     * @param $query
     */
    public function filterMultipleColumns($query)
    {
        if (request()->has('multiple_columns') && request()->input('multiple_columns')) {
//            $keyword = urldecode(request()->input('filteredOptions')['multiple_columns']);
            $keyword = request()->input('multiple_columns')['value'];
            $keyword =  preg_replace('/\s\s+/', ' ', $keyword);
            $keyword =  trim($keyword);
            $keyword = str_replace('\\', '%', $keyword);

            $sql = [];
            $bindings = [];

            $multipleColumns = request()->input('multiple_columns')['columns'];

            foreach ($multipleColumns as $mc) {
                $sql[] = "{$mc} like ?";
                $bindings[] = "%{$keyword}%";
            }

            if (!empty($sql)) {
                $query->whereRaw('(' . implode(' or ', $sql) . ')', $bindings);
            }
        }
    }

    /**
     * @param $query
     * @param $column
     */
    public function filterDateRange($query, $column)
    {
        if ($column['search']['value']) {
            $dateRange = $column['search']['value'];
            $sql = [];
            $bindings = [];

            $startDate = $dateRange['startDate'];
            $endDate = $dateRange['endDate'];

            if ($startDate && $startDate != "null") {
                $sql[] = "date({$column['name']}) >= ?";
                $bindings[] = $startDate;
            }

            if ($endDate && $endDate != "null") {
                $sql[] = "date({$column['name']}) <= ?";
                $bindings[] = $endDate;
            }

            if (!empty($sql)) {
                $query->whereRaw(implode(' and ', $sql), $bindings);
            }
        }
    }

    public function filterCustomRule($query)
    {
        foreach (request()->input('columns') as $column) {
            if (array_key_exists('filterRule', $column) && !empty($column['filterRule'])) {
                $rule = $column['filterRule']['rule'];

                if (method_exists($this, $rule)) {
                    $this->{$rule}($query, $column);
                }
            }
        }
    }

    public function orderByColumns($query)
    {
        if (request()->has('order')) {
            foreach (request()->input('order') as $orderedColumn) {
                $colIndex = $orderedColumn['column'];
                $columns = request()->input('columns');

                if (array_key_exists($colIndex, $columns)) {
                    $column = $columns[$colIndex];

                    if (array_key_exists('orderRule', $column)) {
                        $rule = $column['orderRule'];

                        if (method_exists($this, $rule)) {
                            $this->{$rule}($query, $orderedColumn['dir']);
                            continue;
                        }
                    }

                    $query->orderBy($column['accessor'], $orderedColumn['dir']);
                }
            }
        }
    }


}
