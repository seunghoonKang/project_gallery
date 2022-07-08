import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema';

const User = model('users', UserSchema);

export class UserModel {
  async create(userInfo) {
    const newUser = await User.create(userInfo);
    return newUser;
  }

  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async findById(userId) {
    const user = await User.findOne({ _id: userId });
    return user;
  }

  async update({ userId, update }) {
    const filter = { _id: userId };
    // 옵션 값으로 false를 줬기 때문에, 업데이트된 유저의 정보(object)를 return한다
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }

  async delete(userId) {
    const user = await User.findOneAndDelete({ _id: userId });
    return user;
  }
}

const userModel = new UserModel();

export { userModel };
