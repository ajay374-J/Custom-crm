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

		}
	},
	refresh: function(frm) {
	            document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert']")[1].style.cssText += 'height:21px';

                document.querySelectorAll("[data-fieldname='documents_received']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='documents_received']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit1']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert1']")[1].style.cssText += 'height:21px';

                document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit2']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert2']")[1].style.cssText += 'height:21px';

                document.querySelectorAll("[data-fieldname='queries_received']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='queries_received']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit3']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert3']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='assessment']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='assessment']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit4']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert4']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='login']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='login']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit5']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert5']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit6']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert6']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='login_completion']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='login_completion']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit7']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert7']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit8']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert8']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='sanction']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='sanction']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit9']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert9']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit10']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert10']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit11']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert11']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='ops']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='ops']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit12']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert12']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='docket']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='docket']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit13']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert13']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='disbursement']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='disbursement']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit14']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert14']")[1].style.cssText += 'height:21px';


                document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.marginLeft = "75px";
                document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.width = "150px";
                document.querySelectorAll("[data-fieldname='submit15']")[1].style.cssText += 'height:21px';
		        document.querySelectorAll("[data-fieldname='revert15']")[1].style.cssText += 'height:21px';


        if (!frm.doc.__islocal) {
//            if(!frm.doc.docstatus==1){
//            frm.toggle_display(['submit'], false);
//				frm.toggle_display(['revert'], false);
//            }
            var file_discussion = frm.doc.file_discussion;
            if (file_discussion) {
                frm.toggle_display(['submit'], false);
				frm.toggle_display(['revert'], true);
                document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.backgroundColor = "#d3f8d3";
            } else {
                frm.toggle_display(['revert'], false);
				frm.toggle_display(['submit'], true);
                document.querySelectorAll("[data-fieldname='file_discussion']")[0].style.backgroundColor = "white";

            }

		var documents_received = frm.doc.documents_received;
		if (documents_received) {
		frm.toggle_display(['submit1'], false);
		frm.toggle_display(['revert1'], true);
		document.querySelectorAll("[data-fieldname='documents_received']")[0].style.backgroundColor ="#d3f8d3";
		} else {
		frm.toggle_display(['revert1'], false);
		frm.toggle_display(['submit1'], true);
		document.querySelectorAll("[data-fieldname='documents_received']")[0].style.backgroundColor ="white";
		}

		var our_queries_given = frm.doc.our_queries_given;
		if (our_queries_given) {
		frm.toggle_display(['submit2'], false);
		frm.toggle_display(['revert2'], true);
		document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.backgroundColor ="#d3f8d3";
		} else {
		frm.toggle_display(['revert2'], false);
		frm.toggle_display(['submit2'], true);
		document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.backgroundColor ="white";
		}
		var queries_received = frm.doc.queries_received;
		if (queries_received) {
		frm.toggle_display(['submit3'], false);
		frm.toggle_display(['revert3'], true);
		document.querySelectorAll("[data-fieldname='queries_received']")[0].style.backgroundColor ="#d3f8d3";
		} else {
		frm.toggle_display(['revert3'], false);
		frm.toggle_display(['submit3'], true);
		document.querySelectorAll("[data-fieldname='queries_received']")[0].style.backgroundColor ="white";
		}
		var assessment = frm.doc.assessment;
		if (assessment) {
		frm.toggle_display(['submit4'], false);
		frm.toggle_display(['revert4'], true);
		document.querySelectorAll("[data-fieldname='assessment']")[0].style.backgroundColor ="#d3f8d3";


		} else {
		frm.toggle_display(['revert4'], false);
		frm.toggle_display(['submit4'], true);
		document.querySelectorAll("[data-fieldname='assessment']")[0].style.backgroundColor ="white";

		}
		var login = frm.doc.login;
		if (login) {
		frm.toggle_display(['submit5'], false);
		frm.toggle_display(['revert5'], true);
		document.querySelectorAll("[data-fieldname='login']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert5'], false);
		frm.toggle_display(['submit5'], true);
		document.querySelectorAll("[data-fieldname='login']")[0].style.backgroundColor ="white";

		}
		var bank_login_queries = frm.doc.bank_login_queries;
		if (bank_login_queries) {
		frm.toggle_display(['submit6'], false);
		frm.toggle_display(['revert6'], true);
		document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert6'], false);
		frm.toggle_display(['submit6'], true);
		document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.backgroundColor ="white";


		}
		var login_completion = frm.doc.login_completion;
		if (login_completion) {
		frm.toggle_display(['submit7'], false);
		frm.toggle_display(['revert7'], true);
		document.querySelectorAll("[data-fieldname='login_completion']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert7'], false);
		frm.toggle_display(['submit7'], true);
		document.querySelectorAll("[data-fieldname='login_completion']")[0].style.backgroundColor ="white";

		}
		var credit_queries = frm.doc.credit_queries;
		if (credit_queries) {
		frm.toggle_display(['submit8'], false);
		frm.toggle_display(['revert8'], true);
		document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert8'], false);
		frm.toggle_display(['submit8'], true);
		document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.backgroundColor ="white";

		}
		var sanction = frm.doc.sanction;
		if (sanction) {
		frm.toggle_display(['submit9'], false);
		frm.toggle_display(['revert9'], true);
		document.querySelectorAll("[data-fieldname='sanction']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert9'], false);
		frm.toggle_display(['submit9'], true);
		document.querySelectorAll("[data-fieldname='sanction']")[0].style.backgroundColor ="white";

		}
		var technical_assessment = frm.doc.technical_assessment;
		if (technical_assessment) {
		frm.toggle_display(['submit10'], false);
		frm.toggle_display(['revert10'], true);
		document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert10'], false);
		frm.toggle_display(['submit10'], true);
		document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.backgroundColor ="white";

		}
		var legel_assessment = frm.doc.legel_assessment;
		if (legel_assessment) {
		frm.toggle_display(['submit11'], false);
		frm.toggle_display(['revert11'], true);
		document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert11'], false);
		frm.toggle_display(['submit11'], true);
		document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.backgroundColor ="white";

		}
		var ops = frm.doc.ops;
		if (ops) {
		frm.toggle_display(['submit12'], false);
		frm.toggle_display(['revert12'], true);
		document.querySelectorAll("[data-fieldname='ops']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert12'], false);
		frm.toggle_display(['submit12'], true);
		document.querySelectorAll("[data-fieldname='ops']")[0].style.backgroundColor ="white";

		}
		var docket = frm.doc.docket;
		if (docket) {
		frm.toggle_display(['submit13'], false);
		frm.toggle_display(['revert13'], true);
		document.querySelectorAll("[data-fieldname='docket']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert13'], false);
		frm.toggle_display(['submit13'], true);
		document.querySelectorAll("[data-fieldname='docket']")[0].style.backgroundColor ="white";

		}
		var disbursement = frm.doc.disbursement;
		if (disbursement) {
		frm.toggle_display(['submit14'], false);
		frm.toggle_display(['revert14'], true);
		document.querySelectorAll("[data-fieldname='disbursement']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert14'], false);
		frm.toggle_display(['submit14'], true);
		document.querySelectorAll("[data-fieldname='disbursement']")[0].style.backgroundColor ="white";

		}
		var cheques_handover = frm.doc.cheques_handover;
		if (cheques_handover) {
		frm.toggle_display(['submit15'], false);
		frm.toggle_display(['revert15'], true);
		document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.backgroundColor ="#d3f8d3";

		} else {
		frm.toggle_display(['revert15'], false);
		frm.toggle_display(['submit15'], true);
		document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.backgroundColor ="white";

		}
			
        } else {
            frm.toggle_display(['revert'], false);
			frm.toggle_display(['revert1'], false);
			frm.toggle_display(['revert2'], false);
			frm.toggle_display(['revert3'], false);
			frm.toggle_display(['revert4'], false);
			frm.toggle_display(['revert5'], false);
			frm.toggle_display(['revert6'], false);
			frm.toggle_display(['revert7'], false);
			frm.toggle_display(['revert8'], false);
			frm.toggle_display(['revert9'], false);
			frm.toggle_display(['revert10'], false);
			frm.toggle_display(['revert11'], false);
			frm.toggle_display(['revert12'], false);
			frm.toggle_display(['revert13'], false);
			frm.toggle_display(['revert14'], false);
			frm.toggle_display(['revert15'], false);



			
        }
    },
	
	submit:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
			frm.set_value("file_discussion", 1);
			frm.refresh_field("file_discussion");
			frm.save("Update");
		 }, () => {
		 })
	},
    revert: function(frm) {
		frappe.confirm('Are you sure you want to proceed?',
		() => {
        frm.set_value("file_discussion", 0);
        frm.refresh_field("file_discussion");
        frm.save("Update");
		}, () => {
		})
    
    },
	submit1:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("documents_received",1)
//		document.querySelectorAll("[data-fieldname='documents_received']")[0].style.backgroundColor ="#d3f8d3";
		frm.refresh_field("documents_received")
		frm.save("Update")
		}, () => {
		})

	},
	revert1:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("documents_received",0)
//		document.querySelectorAll("[data-fieldname='documents_received']")[0].style.backgroundColor ="white";

		frm.refresh_field("documents_received")
		frm.save("Update")
		}, () => {
		})
	},
	submit2:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("our_queries_given",1)
//		document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.backgroundColor ="abf2ab";
		frm.refresh_field("our_queries_given")
		frm.save("Update")
		}, () => {
		})

	},
	revert2:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("our_queries_given",0)
//		document.querySelectorAll("[data-fieldname='our_queries_given']")[0].style.backgroundColor ="white";
		frm.refresh_field("our_queries_given")
		frm.save("Update")
		}, () => {
		})
	},
	submit3:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("queries_received",1)
//		document.querySelectorAll("[data-fieldname='queries_received']")[0].style.backgroundColor ="abf2ab";
		frm.refresh_field("queries_received")
		frm.save("Update")
		}, () => {
		})

	},
	revert3:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("queries_received",0)
//		document.querySelectorAll("[data-fieldname='queries_received']")[0].style.backgroundColor ="white";
		frm.refresh_field("queries_received")
		frm.save("Update")
		}, () => {
		})
	},
	submit4:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("assessment","Yes")
//		document.querySelectorAll("[data-fieldname='assessment']")[0].style.backgroundColor ="green";
		frm.refresh_field("assessment")
		frm.save("Update")
		}, () => {
		})

	},
	revert4:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("assessment",0)
//		document.querySelectorAll("[data-fieldname='assessment']")[0].style.backgroundColor ="white";

		frm.refresh_field("assessment")
		frm.save("Update")
		}, () => {
		})
	},
	submit5:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("login",1)
//		document.querySelectorAll("[data-fieldname='login']")[0].style.backgroundColor ="green";
		frm.refresh_field("login")
		frm.save("Update")
		}, () => {
		})

	},
	revert5:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("login",0)
//		document.querySelectorAll("[data-fieldname='login']")[0].style.backgroundColor ="white";

		frm.refresh_field("login")
		frm.save("Update")
		}, () => {
		})
	},
	submit6:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("bank_login_queries",1)
//		document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.backgroundColor ="green";
		frm.refresh_field("bank_login_queries")
		frm.save("Update")
		}, () => {
		})

	},
	revert6:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("bank_login_queries",0)
//		document.querySelectorAll("[data-fieldname='bank_login_queries']")[0].style.backgroundColor ="white";

		frm.refresh_field("bank_login_queries")
		frm.save("Update")
		}, () => {
		})
	},
	submit7:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("login_completion",1)
//		document.querySelectorAll("[data-fieldname='login_completion']")[0].style.backgroundColor ="green";
		frm.refresh_field("login_completion")
		frm.save("Update")
		}, () => {
		})

	},
	revert7:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("login_completion",0)
//		document.querySelectorAll("[data-fieldname='login_completion']")[0].style.backgroundColor ="white";

		frm.refresh_field("login_completion")
		frm.save("Update")
		}, () => {
		})
	},
	submit8:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("credit_queries",1)
//		document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.backgroundColor ="green";
		frm.refresh_field("credit_queries")
		frm.save("Update")
		}, () => {
		})

	},
	revert8:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("credit_queries",0)
//		document.querySelectorAll("[data-fieldname='credit_queries']")[0].style.backgroundColor ="white";

		frm.refresh_field("credit_queries")
		frm.save("Update")
		}, () => {
		})
	},
	submit9:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("sanction",1)
//		document.querySelectorAll("[data-fieldname='sanction']")[0].style.backgroundColor ="green";
		frm.refresh_field("sanction")
		frm.save("Update")
		}, () => {
		})

	},
	revert9:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("sanction",0)
//		document.querySelectorAll("[data-fieldname='sanction']")[0].style.backgroundColor ="white";

		frm.refresh_field("sanction")
		frm.save("Update")
		}, () => {
		})
	},
	submit10:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("technical_assessment",1)
//		document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.backgroundColor ="green";
		frm.refresh_field("technical_assessment")
		frm.save("Update")
		}, () => {
		})

	},
	revert10:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("technical_assessment",0)
//		document.querySelectorAll("[data-fieldname='technical_assessment']")[0].style.backgroundColor ="white";

		frm.refresh_field("technical_assessment")
		frm.save("Update")
		}, () => {
		})
	},
	submit11:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("legel_assessment",1)
//		document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.backgroundColor ="green";
		frm.refresh_field("legel_assessment")
		frm.save("Update")
		}, () => {
		})

	},
	revert11:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("legel_assessment",0)
//		document.querySelectorAll("[data-fieldname='legel_assessment']")[0].style.backgroundColor ="white";

		frm.refresh_field("legel_assessment")
		frm.save("Update")
		}, () => {
		})
	},
	submit12:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("ops",1)
//		document.querySelectorAll("[data-fieldname='ops']")[0].style.backgroundColor ="green";
		frm.refresh_field("ops")
		frm.save("Update")
		}, () => {
		})

	},
	revert12:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("ops",0)
//		document.querySelectorAll("[data-fieldname='ops']")[0].style.backgroundColor ="white";

		frm.refresh_field("ops")
		frm.save("Update")
		}, () => {
		})
	},
	submit13:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("docket",1)
//		document.querySelectorAll("[data-fieldname='docket']")[0].style.backgroundColor ="green";
		frm.refresh_field("docket")
		frm.save("Update")
		}, () => {
		})

	},
	revert13:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("docket",0)
//		document.querySelectorAll("[data-fieldname='docket']")[0].style.backgroundColor ="white";

		frm.refresh_field("docket")
		frm.save("Update")
		}, () => {
		})
	},
	submit14:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("disbursement",1)
//		document.querySelectorAll("[data-fieldname='disbursement']")[0].style.backgroundColor ="green";
		frm.refresh_field("disbursement")
		frm.save("Update")
		}, () => {
		})

	},
	revert14:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("disbursement",0)
//		document.querySelectorAll("[data-fieldname='disbursement']")[0].style.backgroundColor ="white";

		frm.refresh_field("disbursement")
		frm.save("Update")
		}, () => {
		})
	},
	submit15:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("cheques_handover",1)
//		document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.backgroundColor ="green";
		frm.refresh_field("cheques_handover")
		frm.save("Update")
		}, () => {
		})

	},
	revert15:function(frm){
		frappe.confirm('Are you sure you want to proceed?',
		 () => {
		frm.set_value("cheques_handover",0)
//		document.querySelectorAll("[data-fieldname='cheques_handover']")[0].style.backgroundColor ="white";

		frm.refresh_field("cheques_handover")
		frm.save("Update")
		}, () => {
		})
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
	