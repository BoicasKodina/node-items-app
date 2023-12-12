import mongoose from "mongoose";

const itemSchema = mongoose.Schema({              /// Cia apsirasom validacija.
    miestas:{type: String, required: true, min: 3},
    kaina:{type: Number, required: true },
    plotas:{type: Number, required: true },
    plotoVienetas:{ type: Number, type: String, required: true},
    kambariuSkaicius:{type: Number, required: true }


})

export default mongoose.model("Item", itemSchema);   /// default naudojam vienaskaitai