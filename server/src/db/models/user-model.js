import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema';

const User = model('users', UserSchema);

export class UserModel {
  // 계정 생성
  async create(userInfo) {
    const newUser = await User.create(userInfo);
    return newUser;
  }

  // 계정 조회 - 오브젝트 아이디
  async findById(userId) {
    const user = await User.findOne({ _id: userId });
    return user;
  }

  // 계정 조회 - 이메일
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  // 계정 조회 - 닉네임
  async findByNickName(nickName) {
    const user = await User.findOne({ nickName });
    return user;
  }

  // 계정 정보 수정
  async update({ userId, update }) {
    const filter = { _id: userId };
    // 옵션 값으로 false를 줬기 때문에, 업데이트된 유저의 정보(object)를 return한다
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }

  // 계정 삭제
  async delete(userId) {
    const user = await User.findOneAndDelete({ _id: userId });
    return user;
  }
}

const userModel = new UserModel();

export { userModel };
