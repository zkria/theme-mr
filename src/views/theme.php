<?php

return [
    'components_manager' => [
        'use_custom_manager' => true,
        'manager_route' => 'admin.components.index',
        'disable_default_components' => true
    ],
    
    'hooks' => [
        'theme::init' => function ($theme) {
            // تعطيل مدير المكونات الافتراضي
            $theme->disableDefaultComponentsManager();
            
            // إضافة مدير المكونات المخصص
            $theme->addAdminPage([
                'title' => 'إدارة مكونات الثيم',
                'route' => 'admin.components.index',
                'menu_position' => 'components',
                'replace_default' => true
            ]);
        }
    ]
]; 