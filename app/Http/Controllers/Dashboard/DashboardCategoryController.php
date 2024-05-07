<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardCategoryController extends Controller
{
    public function index()
    {
        return inertia('Dashboard/Category/DashboardCategory');
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'categoryName' => 'required|string',
        ]);


        if($credentials)
        {
            Category::create([
                'categoryName' => $request->categoryName,
                'slug' => Str::slug($request->categoryName),
            ]);
            return back()->with('message' , 'Kategori Berhasil Ditambahkan');
        }
    }
}
