import { Router } from 'express';
import { userService } from '../services';

const userRouter = Router();

// 회원 가입 api 호출
userRouter.post('/register', async (req, res, next) => {
  try {
    // req (request)의 body 에서 데이터 가져오기
    const email = req.body.email;
    const nickName = req.body.nickName;
    const password = req.body.password;
    console.log(email);

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

export { userRouter };
