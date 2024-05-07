<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardProductController extends Controller
{
    public function index()
    {
        return inertia('Dashboard/Product/DashboardProduct');
    }

    public function store(Request $request)
    {

        $request->validate([
            'productName' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'required|integer',
            'image' => 'nullable|image|mimes:jpg,jpeg,png',
        ]);

        $createProduct = Product::create([
            'productName' => $request->productName,
            'description' => $request->description,
            'price' => $request->price,
            'image' => $request->image,
            'slug' => Str::slug($request->productName),
            'category_id' => 1
        ]);
        if($request->hasFile('image')){
            $hashedImageFile = Str::random(10) .$request->file('image')->getClientOriginalName();
            $request->file('image')->move('storage/productsimage/', $hashedImageFile);
            $createProduct->image = $hashedImageFile;
            $createProduct->save();
        }
        return back()->with('message' , 'Produk berhasil ditambahkan');
    }
}
