import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { conversationService } from '../services';

const conversationRouter = Router();

// 프로젝트 전시 - 게시글 생성
conversationRouter.post('/', async (req, res, next) => {
  try {
    const members = [req.body.senderId, req.body.receiverId];
    console.log(members);
    const saveConversation = await conversationService.newConversation({
      members: members,
    });
    res.status(200).json(saveConversation);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 전시 - 게시글 전부 불러오기
conversationRouter.get('/:userId', async (req, res, next) => {
  try {
    const getConversation = await conversationService.getConversation({
      members: { $in: [req.params.userId] },
    });

    res.status(200).json(getConversation);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 전시 - 오브젝트 아이디로 불러오기
conversationRouter.get('/postId/:postId', async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const postById = await projectExhibitionBoardService.getPostById(postId);

    res.status(200).json(postById);
  } catch (error) {
    next(error);
  }
});

export { conversationRouter };
