const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
{
	customerName: { type: String, require: true },
    customerPhoneNumber: { type: String, require: true },
    paymentMode: { type: String, rquire: true },
    subTotal: { type: Number, require: true },
	cardItems:{type:Array,require:true},
	tax:{type:number,require:true},
	totalAmount:{type:Number,require:true},
  },
  { timestamps: true }
);

const Bill = mongoose.model("bills", BillSchema);
module.exports = Bill;
