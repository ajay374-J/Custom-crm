// Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Custom Crm', {
	before_save:function(frm){
		frappe.call({
			method: "stages",
			doc:frm.doc,
			callback: function(r){
				frm.refresh_field("state")
				// me.frm.reload_doc();

			}
		})
	},
	refresh: function(frm) {
		if(frm.doc.docstatus==1){
		if(frm.doc.status!="File Discussion"){
		frm.add_custom_button(__('Previous State'), function() {
			let state=""
			if(frm.doc.status=="Documents Received"){
				let state="File Discussion"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Our Queries Given"){
				let state="Documents Received"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Queries Received"){
				let state="Our Queries Given"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Assessment"){
				let state="Queries Received"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Login"){
				let state="Assessment"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Bank Login Queries"){
				let state="Login"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Login Completion"){
				let state="Bank Login Queries"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Credit Queries"){
				let state="Login Completion"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Sanction"){
				let state="Credit Queries"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Technical Assessment"){
				let state="Sanction"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Legal Assessment"){
				let state="Technical Assessment"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Ops"){
				let state="Legal Assessment"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Docket"){
				let state="Ops"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Disbursement"){
				let state="Docket"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Cheques Handover"){
				let state="Disbursement"
				frappe.call({
					method: "update_prev_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			
					
			});
		}
		if(frm.doc.status!="Cheques Handover"){
		frm.add_custom_button(__('Next State'), function() {
			let state=""
			if(frm.doc.status=="File Discussion"){
				let state="Documents Received"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Documents Received"){
				let state="Our Queries Given"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Our Queries Given"){
				let state="Queries Received"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Queries Received"){
				let state="Assessment"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Assessment"){
				let state="Login"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Login"){
				let state="Bank Login Queries"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Bank Login Queries"){
				let state="Login Completion"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Login Completion"){
				let state="Credit Queries"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Credit Queries"){
				let state="Sanction"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Sanction"){
				let state="Technical Assessment"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Technical Assessment"){
				let state="Legal Assessment"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Legal Assessment"){
				let state="Ops"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Ops"){
				let state="Docket"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Docket"){
				let state="Disbursement"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			if(frm.doc.status=="Disbursement"){
				let state="Cheques Handover"
				frappe.call({
					method: "update_status",
					doc:frm.doc,
					args: {status: state},
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
			}
			
				
		});
	}
	}
	
	
	}
	
});

