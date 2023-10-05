frappe.listview_settings['Custom Crm'] = {
    add_fields: ["status", "location_of_property", "bank_name", "value_of_lone","commission"],
	filters:[["status","!=", "Completed"],
            ["docstatus","!=",2]],
    prepare_data: function (data) {
		console.log("###%%%%%%%%%%%%%%%%%%%%",data)
	},
	get_indicator: function (doc) {
		
	},
	
};
