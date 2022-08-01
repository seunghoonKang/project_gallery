import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { messagesService } from '../services';

const messagesRouter = Router();

// 프로젝트 전시 - 게시글 생성
messagesRouter.post('/', async (req, res, next) => {
  try {
    const newMessage = req.body;
    const savedMessage = await messagesService.savedMessage(newMessage);
    res.status(200).json(savedMessage);
  } catch (error) {
    next(error);
  }
});

//메세지 전부가지고오기
messagesRouter.get('/:conversationId', async (req, res, next) => {
  try {
    const conversationId = req.params.conversationId;
    console.log(conversationId);
    const messages = await messagesService.getMessages(conversationId);

    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
});

export { messagesRouter };
