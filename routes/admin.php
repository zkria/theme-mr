Route::prefix('admin')->group(function () {
    Route::get('/components', [ThemeComponentsController::class, 'index'])->name('admin.components.index');
    Route::post('/components', [ThemeComponentsController::class, 'store']);
    Route::put('/components/{component}', [ThemeComponentsController::class, 'update']);
    Route::post('/components/{component}/toggle', [ThemeComponentsController::class, 'toggle']);
}); 