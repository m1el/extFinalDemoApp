Ext.define("Demo.view.Employees", {
	extend: "Ext.container.Container",
	//html: "Hello, Emp!!",
	items: [{
		xtype: "grid",
		title: "Simpsons",
		store: Ext.create("Ext.data.JsonStore", {
			fields: ["name", "email", "phone"],
			data: [{
				"name": "Lisa",
				"email": "lisa@simpsons.com",
				"phone": "555-111-1224"
			}, {
				"name": "Bart",
				"email": "bart@simpsons.com",
				"phone": "555-222-1234"
			}, {
				"name": "Homer",
				"email": "home@simpsons.com",
				"phone": "555-222-1244"
			}, {
				"name": "Marge",
				"email": "marge@simpsons.com",
				"phone": "555-222-1254"
			}]
		}),
		columns: [{
			text: "Name",
			dataIndex: "name"
		}, {
			text: "Email",
			dataIndex: "email",
			flex: 1
		}, {
			text: "Phone",
			dataIndex: "phone"
		}],
		height: 200,
		width: 400
	}]
});