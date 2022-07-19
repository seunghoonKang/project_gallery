import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { commentService } from '../services';

const commentRouter = Router();

commentRouter.get('/', async (req, res, next) => {
  try {
    const postId = req.body.postId;
    const comment = await commentService.getComment(postId);
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
});

commentRouter.get('/', async (req, res, next) => {
  try {
    const title = req.body.title;
    const comments = await commentService.getComments(title);
    res.status(201).json(comments);
  } catch (error) {
    next(error);
  }
});

commentRouter.post('/', loginRequired, async (req, res, next) => {
  try {
    const { postId, nickName, comment } = req.body;

    const new_comment = await commentService.addComment({
      postId,
      nickName,
      comment,
    });

    res.status(201).json(new_comment);
  } catch (error) {
    next(error);
  }
});

commentRouter.patch('/', loginRequired, async (req, res, next) => {
  try {
    const { postId, nickName, comment } = req.body;

    const comment_origin = await commentService.getComment(postId);

    if (comment_origin.nickName !== nickName) {
      throw new Error('리뷰를 수정할 권한이 없습니다.');
    }

    const toUpdate = {
      ...(comment && { comment }),
    };

    const editedComment = await commentService.editComment(postId, toUpdate);

    res.status(200).json(editedComment);
  } catch (error) {
    next(error);
  }
});

commentRouter.delete('/', loginRequired, async function (req, res, next) {
  try {
    const postId = req.body.postId;
    const deletedComment = await commentService.deleteComment(postId);
    res.status(200).json(deletedComment);
  } catch (error) {
    next(error);
  }
});

export { commentRouter };
