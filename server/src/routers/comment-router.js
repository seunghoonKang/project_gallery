import { Router } from 'express';

import { loginRequired } from '../middlewares';
import { commentService } from '../services';

const commentRouter = Router();

commentRouter.get('/', async (req, res, next) => {
  try {
    const title = req.params.title;
    const comments = await commentService.getComments(title);
    res.status(201).json(comments);
  } catch (error) {
    next(error);
  }
});

commentRouter.post('/', loginRequired, async (req, res, next) => {
  try {
    const { comment_id, nickName, title, rate, comment } = req.body;

    const new_comment = await commentService.addComment({
      comment_id,
      nickName,
      title,
      rate,
      comment,
    });

    res.status(201).json(new_comment);
  } catch (error) {
    next(error);
  }
});

commentRouter.delete('/', loginRequired, async function (req, res, next) {
  try {
    const comment_id = req.body.comment_id;
    const comment = await commentService.deleteComment(comment_id);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
});

commentRouter.patch('/', loginRequired, async (req, res, next) => {
  try {
    const { comment_id, nickName, rate, comment } = req.body;

    const comment_origin = await reviewService.getReview(comment_id);

    if (comment_origin.nickName !== nickName) {
      throw new Error('리뷰를 수정할 권한이 없습니다.');
    }

    const toUpdate = {
      ...(rate && { rate }),
      ...(comment && { comment }),
    };

    const updatedComment = await commentService.setComment(
      comment_id,
      toUpdate
    );

    res.status(200).json(updatedComment);
  } catch (error) {
    next(error);
  }
});

export { commentRouter };
