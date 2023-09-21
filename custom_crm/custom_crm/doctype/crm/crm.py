# Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Crm(Document):
	def get_feed(self):
		return "{0}".format(frappe._(self.status))

	def on_submit(self):
		self.calculate_commission()
		self.calculate_commission_due()

	def on_update(self):
		self.calculate_commission()
		self.calculate_commission_due()
		
	def calculate_commission(self):
		value_of_loan = self.value_of_loan or 0
		commission = self.commission or 0
		commission_calculated = value_of_loan * commission / 100
		self.commission_calculated = commission_calculated
		print(f"Commission Calculated: {commission_calculated}")
		# frappe.msgprint(f"Commission Calculated: {commission_calculated}")

	def calculate_commission_due(self):
		commission_calculated = self.commission_calculated or 0
		commission_received = self.commission_receive or 0
		commission_due = commission_calculated - commission_received
		self.commission_due = commission_due
		print(f"Commission Due: {commission_due}")

	@frappe.whitelist()
	def update_status(self,status):
		self.db_set("status", status,update_modified=True)

	def on_cancel(self):
		self.db_set("status", "Cancelled",update_modified=True)
