import cors from 'cors';
import express from 'express';
import {
  userRouter,
  projectExhibitionBoardRouter,
  projectProposalBoardRouter,
  teamRecruitmentBoardRouter,
  commentBoxRouter,
} from './routers';
import { errorHandler } from './middlewares';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// api 라우팅
// 아래처럼 하면, userRouter 에서 '/login' 으로 만든 것이 실제로는 앞에 /api가 붙어서
// /api/login 으로 요청을 해야 하게 됨. 백엔드용 라우팅을 구분하기 위함임.
app.use('/api/user', userRouter);
app.use('/api/exhibition', projectExhibitionBoardRouter);
app.use('/api/proposal', projectProposalBoardRouter);
app.use('/api/recruitment', teamRecruitmentBoardRouter);
app.use('/api/comment', commentBoxRouter);

app.use(errorHandler);

export { app };
