import mongoose, { Document, Model, Schema } from 'mongoose';

interface Itodo {
    title: string;
}

interface IUser extends Document {
    user_name: string;
    todos: Itodo[];
}

const todoSchema = new Schema<Itodo>({
    title: {
        type: String,
        required: [true, "Todo title is required"],
    }
});

const userSchema = new Schema<IUser>({
    user_name: {
        type: String,
        required: [true, "User name is required"],
        minlength: [5, "Name is too short, please enter at least 5 characters"]
    },
    todos: {
        type: [todoSchema],
        required: [true, "Please specify at least one task"]
    }
},{timestamps:true});

const UserModel:Model<IUser> = mongoose.model<IUser>('user', userSchema);

export {
    UserModel,
    userSchema
};
