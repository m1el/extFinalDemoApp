Ext.define('Demo.model.OrgUnit', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'orgId', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'managerId', type: 'int' },
        { name: 'location', type: 'string' },
        { name: 'parentOrgId', type: 'int' }

    ]
});
