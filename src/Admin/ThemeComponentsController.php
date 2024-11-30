<?php

namespace App\Admin;

use Illuminate\Http\Request;

class ThemeComponentsController extends Controller
{
    public function index()
    {
        // جلب جميع المكونات المتاحة
        $components = $this->getAllComponents();
        
        return view('admin.components.index', compact('components'));
    }

    private function getAllComponents()
    {
        // قراءة المكونات من المجلدات
        $componentsPath = resource_path('views/components');
        $components = [];
        
        // جمع المكونات من المجلدات الفرعية
        foreach(['home', 'header', 'footer', 'products'] as $folder) {
            $path = $componentsPath . '/' . $folder;
            if(is_dir($path)) {
                $components[$folder] = $this->scanComponentsFolder($path);
            }
        }
        
        return $components;
    }
} 