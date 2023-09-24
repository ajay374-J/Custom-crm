# Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class CustomCrm(Document):
	def get_feed(self):
		return "{0}".format(frappe._(self.status))

	def on_submit(self):
		self.calculate_commission()
		self.calculate_commission_due()

	def before_save(self):
		self.calculate_commission()
		self.calculate_commission_due()
		
	def calculate_commission(self):
		value_of_loan = self.value_of_loan or 0
		commission = self.commission or 0
		commission_calculated = value_of_loan * commission / 100
		self.commission_calculated = commission_calculated
		print(f"Commission Calculated: {commission_calculated}")

	def calculate_commission_due(self):
		commission_calculated = self.commission_calculated or 0
		commission_received = self.commission_receive or 0
		commission_due = commission_calculated - commission_received
		self.commission_due = commission_due
		print(f"Commission Due: {commission_due}")

	@frappe.whitelist()
	def update_status(self,status):
		self.db_set("status", status,update_modified=True)
		for k in self.state:
			if k.state==status:
				k.db_set("check",1)
		statu="<table  width=100%>"

		for k in self.state:
			if k.check==1:

				statu+="<tr style='border-style: solid;border-color: black;'><td style='border:1px black;background-color:MediumSeaGreen;'>"+str(k.state)+"</td></tr>"
			else:
				statu+="<tr style='border-style: solid;border-color: black;'><td style='border:1px black;'>"+str(k.state)+"</td></tr>"
		statu+="</table>"
		self.db_set("status_history",statu)
	@frappe.whitelist()
	def update_prev_status(self,status):
		self.db_set("status", status,update_modified=True)
		i=10000
		for k in self.state:
			if k.state==status:
				k.db_set("check",1)
				i=k.idx
				print(i,status,k.state)
			if i<k.idx:
				k.db_set("check",0)

		statu="<table width=100%>"

		for k in self.state:
			if k.check==1:

				statu+="<tr style='border-style: solid;border-color: black;'><td style='border:1px black;background-color:MediumSeaGreen;'>"+str(k.state)+"</td></tr>"
			else:
				statu+="<tr style='border-style: solid;border-color: black;'><td style='border:1px black;'>"+str(k.state)+"</td></tr>"
		statu+="</table>"
		self.db_set("status_history",statu)




	def on_submit(self):
		for k in self.state:
			if k.state==self.status:
				k.db_set("check",1)



	@frappe.whitelist()
	def stages(self):
		self.state=[]
		self.append("state",{
			"state":"File Discussion",

		})
		self.append("state",{
			"state":"Documents Received",

		})
		self.append("state",{
			"state":"Our Queries Given",

		})
		self.append("state",{
			"state":"Queries Received",

		})
		self.append("state",{
			"state":"Assessment",

		})
		self.append("state",{
			"state":"Login",

		})
		self.append("state",{
			"state":"Bank Login Queries",

		})
		self.append("state",{
			"state":"Login Completion",

		})
		self.append("state",{
			"state":"Credit Queries",

		})
		self.append("state",{
			"state":"Sanction",

		})
		self.append("state",{
			"state":"Technical Assessment",

		})
		self.append("state",{
			"state":"Legal Assessment",

		})
		self.append("state",{
			"state":"Ops",

		})
		self.append("state",{
			"state":"Docket",

		})
		self.append("state",{
			"state":"Disbursement",

		})
		self.append("state",{
			"state":"Cheques Handover",

		})