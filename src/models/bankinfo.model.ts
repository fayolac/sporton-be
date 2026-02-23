import mongoose, {Schema, Document} from "mongoose";

export interface IBankInfo extends Document {
    name: string;
    description: string;
    stock: number;
    price: number;
    imageUrl: string;
    category: mongoose.Types.ObjectId;
}

const BankInfoSchema: Schema = new Schema ({
    name: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
})

export default mongoose.model<IBankInfo>("Category", BankInfoSchema);