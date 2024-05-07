<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'productName',
        'image',
        'description',
        'price',
        'slug',
        'category_id',
    ];

    public function category () :BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function getImageAttribute()
    {
         $image = $this->attributes['image'];
         return $image ? asset('storage/productsimage/' . $image) : null;
    }
}
