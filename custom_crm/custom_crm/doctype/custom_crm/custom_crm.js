// Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Custom Crm', {
	refresh: function(frm) {
		if(frm.doc.status!="Draft"){
		frm.add_custom_button(__('Draft'), function() {
			
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: "Draft"},
					callback: function(r){
						me.frm.reload_doc();

						frappe.msgprint("Status Changed Successfully")
						// frm.save("Update")
						
					},
					always: function() {
						frappe.ui.form.is_saving = false;
						
					}
				});
					
			}, __("Status"));
		
	
    }
	if(frm.doc.status!="Assessment"){
		frm.add_custom_button(__('Assessment'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "Assessment"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")

					// frm.save("Update")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
						// frappe.msgprint("Draft Status Set")
				}
			});
				
		}, __("Status"));
	}
	if(frm.doc.status!="Login"){
		frm.add_custom_button(__('Login'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "Login"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")
					// frm.save("Update")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
				}
			});
		}, __("Status"));
	}
	if(frm.doc.status!="Bank Login Query"){
		frm.add_custom_button(__('Bank Login Query'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "Bank Login Query"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")
					// frm.save("Update")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
						// frappe.msgprint("Draft Status Set")
				}
			});
		}, __("Status"));
	}
	if(frm.doc.status!="Login done"){
		frm.add_custom_button(__('Login done'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "Login done"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")
					// frm.save("Update")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
						
				}
			});
		}, __("Status"));
	}
	if(frm.doc.status!="Credit query"){
		frm.add_custom_button(__('Credit query'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "Credit query"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")

					// frm.save("Update")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
				}
			});
		}, __("Status"));
	}
	if(frm.doc.status!="File Sanction"){
		frm.add_custom_button(__('File Sanction'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "File Sanction"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")
					// frm.save("Update")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
						
				}
			});
		}, __("Status"));
	}
	if(frm.doc.status!="Property Assessment"){
		frm.add_custom_button(__('Property Assessment'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "Property Assessment"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
						
				}
			});
		}, __("Status"));
	}
	if(frm.doc.status!="Valuation of property"){

		frm.add_custom_button(__('Valuation of property'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "Valuation of property"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
						
				}
			});
		}, __("Status"));
	}
	if(frm.doc.status!="Technical Evaluation"){
		frm.add_custom_button(__('Technical Evaluation'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "Technical Evaluation"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")
					// frm.save("Update")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
				}
			});
		}, __("Status"));
	}
	if(frm.doc.status!="Disbursement"){
		frm.add_custom_button(__('Disbursement'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "Disbursement"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")
					// frm.save("Update")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
						
				}
			});
		}, __("Status"));
	}
	if(frm.doc.status!="Closed"){
		frm.add_custom_button(__('Closed'), function() {
			frappe.call({
				method: "update_status",
				doc:frm.doc,
				args: {status: "Closed"},
				callback: function(r){
					me.frm.reload_doc();

					frappe.msgprint("Status Changed Successfully")
					// frm.save("Update")
				},
				always: function() {
					frappe.ui.form.is_saving = false;
						
				}
			});
		}, __("Status"));
	}
	},
	
	
});

