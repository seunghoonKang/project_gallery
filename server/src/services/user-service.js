import { userModel } from '../db';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  // 회원가입
  async addUser(userInfo) {
    // 객체 destructuring
    const { email, nickName, password } = userInfo;

    // 이메일 중복 확인
    const userByEmail = await this.userModel.findByEmail(email);
    if (userByEmail) {
      throw new Error(
        '현재 사용중인 이메일입니다. 다른 이메일을 입력해 주세요.'
      );
    }

    // 닉네임 중복 확인
    const userByNickName = await this.userModel.findByNickName(nickName);
    if (userByNickName) {
      throw new Error(
        '현재 사용중인 닉네임입니다. 다른 닉네임을 입력해 주세요.'
      );
    }

    // 비밀번호 해쉬화(암호화)
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserInfo = {
      email,
      nickName,
      password: hashedPassword,
    };

    const createdNewUser = await this.userModel.create(newUserInfo);

    return createdNewUser;
  }

  // 로그인, jwt 토큰 생성
  async getUserToken(loginInfo) {
    // 객체 destructuring
    const { email, password } = loginInfo;

    // 우선 해당 이메일의 사용자 정보가 db에 존재하는지 확인
    const user = await this.userModel.findByEmail(email);
    if (!user) {
      throw new Error(
        '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.'
      );
    }

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      throw new Error(
        '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.'
      );
    }

    // 로그인 성공 -> JWT 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';

    // 4개 프로퍼티를 jwt 토큰에 담음
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        nickName: user.nickName,
        role: user.role,
      },
      secretKey
    );

    return { token };
  }

  // 유저 정보 조회 - 추후 관리자 권한과 연계
  async getUserInfo(userId) {
    const user = await this.userModel.findById(userId);
    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('해당 회원 정보가 없습니다.');
    }

    const { email, nickName, role, _id } = user;

    return { email, nickName, role, _id };
  }

  async userInfo(userId) {
    const findUserInfo = await this.userModel.findById(userId);

    return findUserInfo;
  }

  // 유저 정보 수정
  async editUserInfo(userId, toUpdate) {
    // 우선 해당 id의 유저가 db에 있는지 확인
    let user = await this.userModel.findById(userId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('가입 내역이 없습니다. 다시 한 번 확인해 주세요.');
    }

    // 비밀번호도 변경하는 경우에는, 회원가입 때처럼 해쉬화 해주어야 함.
    const { password } = toUpdate;

    if (password) {
      const newPasswordHash = await bcrypt.hash(password, 10);
      toUpdate.password = newPasswordHash;
    }

    // 업데이트 진행
    user = await this.userModel.update({
      userId,
      update: toUpdate,
    });

    return user;
  }

  async deleteUser(userId) {
    const user = await this.userModel.findById(userId);
    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('해당 회원 정보가 없습니다. 유효한 ID가 아닙니다.');
    }
    const deletedUserInfo = await this.userModel.delete(userId);

    return deletedUserInfo;
  }
}

const userService = new UserService(userModel);

export { userService };
