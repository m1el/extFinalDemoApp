Ext.define('Demo.Application', {
    name: 'Demo',

    extend: 'Ext.app.Application',

    views: [
        // 'Main'
    ],

    controllers: [
        'EmpController', 'OrgController'
    ],

    stores: [
        'OrgUnits', 'Employees'
    ]
});