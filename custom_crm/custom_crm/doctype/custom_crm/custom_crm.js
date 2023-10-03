// Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Custom Crm', {
	before_save:function(frm){
		if(frm.doc.__islocal){
		frappe.call({
			method: "stages",
			doc:frm.doc,
			callback: function(r){
				frm.refresh_field("state")
				// me.frm.reload_doc();

			}
		})
	}
	},
	setup:function(frm){
		frappe.call({
			method: "get_company_value",
			doc:frm.doc,
			callback: function(r){
				frm.refresh_field("company")
				// me.frm.reload_doc();

			}
		})
	},
	
	refresh: function(frm) {
		if(frm.doc.__islocal){
			frappe.call({
				method: "get_company_value",
				doc:frm.doc,
				callback: function(r){
					frm.refresh_field("company")
					// me.frm.reload_doc();

				}
			})
			// frappe.call({
			// 	method: "stages",
			// 	doc:frm.doc,
			// 	callback: function(r){
			// 		frm.refresh_field("state")
			// 		// me.frm.reload_doc();
	
			// 	}
			// })
		}
		if(frm.doc.docstatus==1){
			frappe.model.get_value("User Company", {"user":frappe.session.user}, "read_only_crm_field_for_user", function(value) {
				if(value.read_only_crm_field_for_user==1){
					console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",value)
					frm.set_df_property('company', 'read_only', 1);
					frm.set_df_property('account_name', 'read_only', 1);
					frm.set_df_property('location_of_property', 'read_only', 1);
					frm.set_df_property('type_of_loan', 'read_only', 1);
					frm.set_df_property('bank_name', 'read_only', 1);
					frm.set_df_property('value_of_loan', 'read_only', 1);
					frm.set_df_property('value_of_property', 'read_only', 1);
					frm.set_df_property('commission', 'read_only', 1);
					frm.set_df_property('commission_calculated', 'read_only', 1);
					frm.set_df_property('commission_receive', 'read_only', 1);
					frm.set_df_property('commission_due', 'read_only', 1);
					frm.set_df_property('state', 'read_only', 1);
					frm.set_df_property('status', 'read_only', 1);
					frm.set_df_property('status_history', 'read_only', 1);
					frm.set_df_property('vendor', 'read_only', 1);
					frm.set_df_property('commission_to_be_given', 'read_only', 1);
					frm.set_df_property('commission_already_given', 'read_only', 1);
					frm.set_df_property('commission_due_to_give', 'read_only', 1);

				}
			})

	// 	if(frm.doc.status!="Draft"){
		
	// 	frm.add_custom_button(__('Go back to previous state'), function() {
	// 		frappe.confirm('Are you sure you want to go back to Previous Stage?',
	// 			() => {
	// 				let state=""
	// 		if(frm.doc.status=="File Discussion"){
	// 			let state="Draft"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Documents Received"){
	// 			let state="File Discussion"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Our Queries Given"){
	// 			let state="Documents Received"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Queries Received"){
	// 			let state="Our Queries Given"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Assessment"){
	// 			let state="Queries Received"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Login"){
	// 			let state="Assessment"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Bank Login Queries"){
	// 			let state="Login"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Login Completion"){
	// 			let state="Bank Login Queries"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Credit Queries"){
	// 			let state="Login Completion"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Sanction"){
	// 			let state="Credit Queries"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Technical Assessment"){
	// 			let state="Sanction"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Legal Assessment"){
	// 			let state="Technical Assessment"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Ops"){
	// 			let state="Legal Assessment"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Docket"){
	// 			let state="Ops"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Disbursement"){
	// 			let state="Docket"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Cheques Handover"){
	// 			let state="Disbursement"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Completion"){
	// 			let state="Cheques Handover"
	// 			frappe.call({
	// 				method: "update_prev_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 			}, () => {
	// 				// action to perform if No is selected
	// 			})
			
			
					
	// 		});
	// 	}
	// 	if(frm.doc.status!="Completion"){
	// 	frm.add_custom_button(__('Proceed to next state'), function() {
	// 		frappe.confirm('Are you sure you want to proceed to Next Stage?',
	// 		() => {
	// 			let state=""
	// 			if(frm.doc.status=="Draft"){
	// 				let state="File Discussion"
	// 				frappe.call({
	// 					method: "update_status",
	// 					doc:frm.doc,
	// 					args: {status: state},
	// 					callback: function(r){
	// 						me.frm.reload_doc();
		
	// 						frappe.msgprint("Status Changed Successfully")
		
	// 						// frm.save("Update")
	// 					},
	// 					always: function() {
	// 						frappe.ui.form.is_saving = false;
	// 							// frappe.msgprint("Draft Status Set")
	// 					}
	// 				});
	// 			}
	// 		if(frm.doc.status=="File Discussion"){
	// 			let state="Documents Received"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Documents Received"){
	// 			let state="Our Queries Given"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Our Queries Given"){
	// 			let state="Queries Received"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Queries Received"){
	// 			let state="Assessment"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Assessment"){
	// 			let state="Login"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Login"){
	// 			let state="Bank Login Queries"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Bank Login Queries"){
	// 			let state="Login Completion"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Login Completion"){
	// 			let state="Credit Queries"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Credit Queries"){
	// 			let state="Sanction"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Sanction"){
	// 			let state="Technical Assessment"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Technical Assessment"){
	// 			let state="Legal Assessment"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Legal Assessment"){
	// 			let state="Ops"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Ops"){
	// 			let state="Docket"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Docket"){
	// 			let state="Disbursement"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Disbursement"){
	// 			let state="Cheques Handover"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		if(frm.doc.status=="Cheques Handover"){
	// 			let state="Completion"
	// 			frappe.call({
	// 				method: "update_status",
	// 				doc:frm.doc,
	// 				args: {status: state},
	// 				callback: function(r){
	// 					me.frm.reload_doc();
	
	// 					frappe.msgprint("Status Changed Successfully")
	
	// 					// frm.save("Update")
	// 				},
	// 				always: function() {
	// 					frappe.ui.form.is_saving = false;
	// 						// frappe.msgprint("Draft Status Set")
	// 				}
	// 			});
	// 		}
	// 		}, () => {
	// 			// action to perform if No is selected
	// 		})
			
			
				
	// 	});
	// }
	// }
	
		}
	},
	submit:function(frm){
		frm.set_value("file_discussion","Yes")
		frm.refresh_field("file_discussion")
		frm.save("Update")

	},
	revert:function(frm){
		frm.set_value("file_discussion","No")
		frm.refresh_field("file_discussion")
		frm.save("Update")
	},
	submit1:function(frm){
		frm.set_value("documents_received","Yes")
		frm.refresh_field("documents_received")
		frm.save("Update")

	},
	revert1:function(frm){
		frm.set_value("documents_received","No")
		frm.refresh_field("documents_received")
		frm.save("Update")
	},
	submit2:function(frm){
		frm.set_value("our_queries_given","Yes")
		frm.refresh_field("our_queries_given")
		frm.save("Update")

	},
	revert2:function(frm){
		frm.set_value("our_queries_given","No")
		frm.refresh_field("our_queries_given")
		frm.save("Update")
	},
	submit3:function(frm){
		frm.set_value("queries_received","Yes")
		frm.refresh_field("queries_received")
		frm.save("Update")

	},
	revert3:function(frm){
		frm.set_value("queries_received","No")
		frm.refresh_field("queries_received")
		frm.save("Update")
	},
	submit4:function(frm){
		frm.set_value("assessment","Yes")
		frm.refresh_field("assessment")
		frm.save("Update")

	},
	revert4:function(frm){
		frm.set_value("assessment","No")
		frm.refresh_field("assessment")
		frm.save("Update")
	},
	submit5:function(frm){
		frm.set_value("login","Yes")
		frm.refresh_field("login")
		frm.save("Update")

	},
	revert5:function(frm){
		frm.set_value("login","No")
		frm.refresh_field("login")
		frm.save("Update")
	},
	submit6:function(frm){
		frm.set_value("bank_login_queries","Yes")
		frm.refresh_field("bank_login_queries")
		frm.save("Update")

	},
	revert6:function(frm){
		frm.set_value("bank_login_queries","No")
		frm.refresh_field("bank_login_queries")
		frm.save("Update")
	},
	submit7:function(frm){
		frm.set_value("login_completion","Yes")
		frm.refresh_field("login_completion")
		frm.save("Update")

	},
	revert7:function(frm){
		frm.set_value("login_completion","No")
		frm.refresh_field("login_completion")
		frm.save("Update")
	},
	submit8:function(frm){
		frm.set_value("credit_queries","Yes")
		frm.refresh_field("credit_queries")
		frm.save("Update")

	},
	revert8:function(frm){
		frm.set_value("credit_queries","No")
		frm.refresh_field("credit_queries")
		frm.save("Update")
	},
	submit9:function(frm){
		frm.set_value("sanction","Yes")
		frm.refresh_field("sanction")
		frm.save("Update")

	},
	revert9:function(frm){
		frm.set_value("sanction","No")
		frm.refresh_field("sanction")
		frm.save("Update")
	},
	submit10:function(frm){
		frm.set_value("technical_assessment","Yes")
		frm.refresh_field("technical_assessment")
		frm.save("Update")

	},
	revert10:function(frm){
		frm.set_value("technical_assessment","No")
		frm.refresh_field("technical_assessment")
		frm.save("Update")
	},
	submit11:function(frm){
		frm.set_value("legel_assessment","Yes")
		frm.refresh_field("legel_assessment")
		frm.save("Update")

	},
	revert11:function(frm){
		frm.set_value("legel_assessment","No")
		frm.refresh_field("legel_assessment")
		frm.save("Update")
	},
	submit12:function(frm){
		frm.set_value("ops","Yes")
		frm.refresh_field("ops")
		frm.save("Update")

	},
	revert12:function(frm){
		frm.set_value("ops","No")
		frm.refresh_field("ops")
		frm.save("Update")
	},
	submit13:function(frm){
		frm.set_value("docket","Yes")
		frm.refresh_field("docket")
		frm.save("Update")

	},
	revert13:function(frm){
		frm.set_value("docket","No")
		frm.refresh_field("docket")
		frm.save("Update")
	},
	submit14:function(frm){
		frm.set_value("disbursement","Yes")
		frm.refresh_field("disbursement")
		frm.save("Update")

	},
	revert14:function(frm){
		frm.set_value("disbursement","No")
		frm.refresh_field("disbursement")
		frm.save("Update")
	},
	submit15:function(frm){
		frm.set_value("cheques_handover","Yes")
		frm.refresh_field("cheques_handover")
		frm.save("Update")

	},
	revert15:function(frm){
		frm.set_value("cheques_handover","No")
		frm.refresh_field("cheques_handover")
		frm.save("Update")
	}
});
frappe.ui.form.on('Custom Crm', {
    refresh: function(frm) {
        var vendor = frm.doc.vendor;
        if(!vendor) {
            // If no vendor is selected, hide the fields
            frm.toggle_display(['commission_to_be_given', 'commission_already_given', 'commission_due_to_give'], false);
        }
    },

    vendor: function(frm) {
        var vendor = frm.doc.vendor;
        if(vendor) {
            // If a vendor is selected, show the fields
            frm.toggle_display(['commission_to_be_given', 'commission_already_given', 'commission_due_to_give'], true);
        } else {
            // If no vendor is selected, hide the fields
            frm.toggle_display(['commission_to_be_given', 'commission_already_given', 'commission_due_to_give'], false);
        }
    }
});
