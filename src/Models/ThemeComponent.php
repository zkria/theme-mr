<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ThemeComponent extends Model
{
    protected $fillable = [
        'name',
        'type',
        'folder',
        'settings',
        'is_active',
        'sort_order'
    ];

    protected $casts = [
        'settings' => 'json',
        'is_active' => 'boolean'
    ];
} 