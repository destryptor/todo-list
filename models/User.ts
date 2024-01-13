import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IUser extends Document {
	username: string;
	password: string;
}

interface IUserModel extends Model<IUser> {}

const userSchema: Schema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

const UserModel: IUserModel = mongoose.models?.User || mongoose.model<IUser, IUserModel>('User', userSchema);

export default UserModel;
