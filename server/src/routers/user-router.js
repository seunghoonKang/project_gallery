import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { userService } from '../services';

const userRouter = Router();

// 회원 가입 api 호출
userRouter.post('/', async (req, res, next) => {
  try {
    // req (request)의 body 에서 데이터 가져오기
    const { email, nickName, password } = req.body;

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userService.addUser({
      email,
      nickName,
      password,
    });

    // 추가된 유저의 db 데이터를 프론트에 다시 보내줌
    // 201: 자원이 성공적으로 생성되었음
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// 로그인
userRouter.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 로그인 진행 (로그인 성공 시 jwt 토큰을 프론트에 보내 줌)
    const userToken = await userService.getUserToken({ email, password });

    // jwt 토큰을 프론트에 보냄
    res.status(200).json(userToken);
  } catch (error) {
    next(error);
  }
});

// 회원 정보 조회
userRouter.get('/', loginRequired, async (req, res, next) => {
  try {
    const userInfo = await userService.getUserInfo(req.currentUserId);
    res.status(200).json(userInfo);
  } catch (error) {
    next(error);
  }
});

// 회원 정보 수정
userRouter.patch('/', loginRequired, async (req, res, next) => {
  try {
    const userId = req.currentUserId;
    const email = req.currentEmail;
    const role = req.currentRole;
    const { nickName, password } = req.body;

    const toUpdate = {
      ...(email && { email }),
      ...(nickName && { nickName }),
      ...(password && { password }),
      ...(role && { role }),
    };

    const updatedUserInfo = await userService.editUserInfo(userId, toUpdate);

    res.status(200).json(updatedUserInfo);
  } catch (error) {
    next(error);
  }
});

// 회원 정보 수정 - 비밀번호 확인
userRouter.get('/recheck', loginRequired, async (req, res, next) => {
  try {
    const userId = req.currentUserId;
    const inputPassword = req.body.password;

    await userService.recheckPassword({ userId, inputPassword });

    res.status(200).json({ result: '비밀번호가 일치합니다.' });
  } catch (error) {
    next(error);
  }
});

// 회원 탈퇴
userRouter.delete('/', loginRequired, async (req, res, next) => {
  try {
    const deletedUser = await userService.deleteUser(req.currentUserId);

    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
});

export { userRouter };
