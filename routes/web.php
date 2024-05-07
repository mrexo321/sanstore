<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\Dashboard\DashboardController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;
use App\Http\Controllers\Dashboard\DashboardProductController;
use App\Http\Controllers\Dashboard\DashboardCategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/',HomeController::class)->name('homepage');
Route::controller(AuthController::class)->group(function() {
    Route::middleware('guest')->group(function(){
        Route::get('login' ,'index')->name('login');
        Route::post('login' , 'authenticate')->name('authenticate');
    });
    Route::post('logout' , 'logout')->name('logout');
});

Route::controller(CheckoutController::class)->group(function (){
    Route::get('/checkout' , 'index')->name('checkout');
});

Route::controller(ProductController::class)->group(function(){
    Route::get('/product/{product}', 'show')->name('product.show');
});
Route::middleware('auth')->group(function(){
    Route::get('dashboard' , DashboardController::class)->name('dashboard');
    Route::controller(DashboardProductController::class)->group(function(){
        Route::prefix('/dashboard/product')->group(function(){
            Route::get('/' , 'index')->name('dashboard.product');
            Route::post('/product' , 'store')->name('dashboard.product.store');
        });
    });
    Route::controller(DashboardCategoryController::class)->group(function(){
        Route::prefix('/dashboard/category')->group(function(){
            Route::get('/' , 'index')->name('dashboard.category');
            Route::post('/product' , 'store')->name('dashboard.category.store');
        });
    });
});


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
