import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { commentService } from '../services';

const commentRouter = Router();

commentRouter.post('/post/:postId', loginRequired, async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const { commentInfo } = req.body;

    const newComment = await commentService.addComment({
      postId,
      commentInfo,
    });

    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
});

commentRouter.get('/post/:postId', async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const comments = await commentService.getCommentBox(postId);
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
});

commentRouter.delete(
  '/:commentId',
  loginRequired,
  async function (req, res, next) {
    try {
      const commentId = req.params.commentId;

      const deletedComment = await commentService.deleteComment(commentId);
      res.status(200).json(deletedComment);
    } catch (error) {
      next(error);
    }
  }
);

export { commentRouter };
