import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { commentBoxService } from '../services';

const commentBoxRouter = Router();

commentBoxRouter.post(
  '/post/:postId',
  loginRequired,
  async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const nickName = req.currentNickName;
      const comment = req.body.comment;
      const commentInfo = { nickName, comment };

      const commentBox = await commentBoxService.getCommentBox(postId);

      // 첫 댓글인 경우 commentBox를 생성
      if (!commentBox || commentBox === 'null') {
        const newCommentBox = await commentBoxService.addCommentBox({
          postId,
          commentInfo,
        });
        res.status(200).json(newCommentBox);
      } else {
        const commentBox = await commentBoxService.addComment(
          postId,
          commentInfo
        );
        res.status(200).json(commentBox);
      }
    } catch (error) {
      next(error);
    }
  }
);

commentBoxRouter.get('/postId/:postId', async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const commentBox = await commentBoxService.getCommentBox(postId);
    const commentList = await commentBox.commentList;

    res.status(200).json(commentList);
  } catch (error) {
    next(error);
  }
});

commentBoxRouter.delete(
  '/:postId/:commentId',
  loginRequired,
  async function (req, res, next) {
    try {
      const { postId, commentId } = req.params;
      const commentInfo = await commentBoxService.getComment(postId, commentId);

      if (commentInfo.nickName !== req.currentNickName) {
        throw new Error('댓글을 삭제할 권한이 없습니다.');
      }

      const deletedComment = await commentService.deleteComment(
        postId,
        commentId
      );

      res.status(200).json(deletedComment);
    } catch (error) {
      next(error);
    }
  }
);

export { commentBoxRouter };
