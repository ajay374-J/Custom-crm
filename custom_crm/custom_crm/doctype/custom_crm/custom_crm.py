# Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class CustomCrm(Document):
	def get_feed(self):
		return "{0}".format(frappe._(self.status))

	def on_submit(self):
		self.calculate_commission_due()
		self.calculate_vendor_commission_due()


	def before_save(self):
		self.calculate_commission_due()
		self.get_company_value()
		self.calculate_vendor_commission_due()

	# def on_update(self):
	# 	self.calculate_commission_due()
	# 	self.calculate_vendor_commission_due()

	def get_company_value(self):
		comp=frappe.db.get_value("User Company",{"user":frappe.session.user},["Company"])
		if comp:
			self.company=comp

	def calculate_commission_due(self):
		commission_received = self.commission_receive or 0
		commission = self.commission or 0
		if commission > commission_received:
			commission_due = commission - commission_received
		else:
			commission_due = 0
		self.commission_due = commission_due
		print(f"Commission Due: {commission_due}")

	def calculate_vendor_commission_due(self):
		commission_already_given = self.commission_already_given or 0
		commission_to_be_given = self.commission_to_be_given or 0
		if commission_to_be_given > commission_already_given:
			commission_due_to_give = commission_to_be_given - commission_already_given
		else:
			commission_due_to_give = 0
		self.commission_due_to_give = commission_due_to_give
		print(f"Commission Due: {commission_due_to_give}")

	@frappe.whitelist()
	def update_status(self,status):
		self.calculate_commission_due()
		self.calculate_vendor_commission_due()
		self.db_set("status", status,update_modified=True)
		for k in self.state:
			if k.state==status:
				k.db_set("check",1)
		statu="<table style='border-collapse: unset' width=50%>"

		for k in self.state:
			if k.check==1:
				statu += "<tr style='background-color: #4caf50; color: #ffffff; cursor: pointer;'><td style='padding: 6px; text-align: center; border-radius: 10px;'>" + str(
					k.state) + "</td></tr>"
			else:
				statu += "<tr style='background-color: grey; color: white; cursor: pointer;'><td style='padding: 6px; text-align: center; border-radius: 10px;'>" + str(
					k.state) + "</td></tr>"
		statu += "</table>"
		self.db_set("status_history",statu)

	@frappe.whitelist()
	def update_prev_status(self,status):
		self.calculate_commission_due()
		self.calculate_vendor_commission_due()
		self.db_set("status", status,update_modified=True)
		i=10000
		for k in self.state:
			if k.state==status:
				k.db_set("check",1)
				i=k.idx
				print(i,status,k.state)
			if i<k.idx:
				k.db_set("check",0)

		statu="<table style='border-collapse: unset' width=50%>"

		for k in self.state:
			if k.check==1:
				statu += "<tr style='background-color: #4caf50; color: #ffffff; cursor: pointer;'><td style='padding: 6px; text-align: center; border-radius: 10px;'>" + str(
					k.state) + "</td></tr>"
			else:
				statu += "<tr style='background-color: grey; color: white; cursor: pointer;'><td style='padding: 6px; text-align: center; border-radius: 10px;'>" + str(
					k.state) + "</td></tr>"
		statu += "</table>"
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