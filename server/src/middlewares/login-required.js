// 로그인 되어 있는지 확인할 수 있는 middleware
// 로그인 되어 있는 유저의 _id, nickName, role을 담아서 전달
import jwt from 'jsonwebtoken';

function loginRequired(req, res, next) {
  // request 헤더로부터 authorization bearer 토큰을 받음.
  // const userToken = req.headers['authorization']?.split(' ')[1];
  //
  // // jwt 토큰이 "null"이거나, undefined인 경우
  // if (!userToken || userToken === 'null') {
  //   console.log('서비스 사용 요청에 대한 Authorization 토큰이 없습니다.');
  //   res.status(403).json({
  //     result: 'forbidden-approach',
  //     reason: '로그인한 유저만 사용할 수 있는 서비스입니다.',
  //   });
  //   return;
  // }

  // token의 유효성 판별
  try {
    // const secretKey = process.env.JWT_SECRET_KEY;
    // const jwtDecoded = jwt.verify(userToken, secretKey);
    //
    // const userId = jwtDecoded.userId;
    // const email = jwtDecoded.email;
    // const nickName = jwtDecoded.nickName;
    // const role = jwtDecoded.role;
    //
    // // 라우터에서 req.current를 통해 유저의 정보 열람 가능
    // req.currentUserId = userId;
    // req.currentEmail = email;
    req.currentNickName = 'test';
    // req.currentRole = role;

    next();
  } catch (error) {
    // 토큰이 정상적으로 decode 안되었을 경우
    res.status(403).json({
      result: 'forbidden-approach',
      reason: '정상적인 토큰이 아닙니다.',
    });

    return;
  }
}

export { loginRequired };
