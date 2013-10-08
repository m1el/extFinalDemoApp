Ext.define('Demo.model.Employee', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'empId', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'terminated', type: 'boolean' },
        { name: 'phone', type: 'string' },
        { name: 'orgId', type: 'int' }

    ]
});
