<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {
        $search = $request->input('search');

        if($search)
        {
            $products = Product::where(
                'productName' , 'LIKE' , '%' . $search . '%',
                )->get();
        } else{
            $products = Product::all();
        }
        return inertia('Homepage' , compact('products'));
    }
}
