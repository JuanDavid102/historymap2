<?php

use App\Http\Controllers\API\EventoController;
use App\Http\Controllers\API\MarcadorController;
use App\Http\Controllers\API\MapaController;
use App\Http\Controllers\NotificacionController;
use App\Http\Controllers\UserController;
use App\Http\Resources\MapaResource;
use App\Models\Mapa;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/tokens/create', function (Request $request) {

        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return response()->json([
            'token_type' => 'Bearer',
            'access_token' => $user->createToken('token_name')->plainTextToken // token name you can choose for your self or leave blank if you like to
        ]);
    });

    //Route::middleware('auth:sanctum')->
        Route::group(['middleware' => 'auth:sanctum'],function () {
            Route::group(['prefix' => '/'], function () {
                Route::get("/mapas/publicos", [MapaController::class, "indexPublicos"]);

                Route::apiResource("/eventos", EventoController::class);
                Route::apiResource("/marcadores", MarcadorController::class);
                Route::apiResource("/mapas", MapaController::class);
                Route::apiResource("/notificaciones", NotificacionController::class);

                //Route::get("/mapas/publicos", [MapaController::class, "indexPublicos"]);
                Route::get("user/{email}", [UserController::class, "userDetail"]);

            });
        });

    Route::get('migrate', function () {
        //Artisan::call('migrate', ["--force" => true ]);
        //Artisan::call('db:seed', ["--force" => true ]);
    });

    require __DIR__.'/auth.php';
