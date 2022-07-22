import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { commentBoxService } from '../services';

const commentBoxRouter = Router();

commentBoxRouter.post(
  '/postId/:postId',
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
        const newCommentBox = await commentBoxService.addCommentBox(
          postId,
          commentInfo
        );
        res.status(200).json(newCommentBox);
      }
      // 첫 댓글이 아닌 경우 기존의 commentBox에 추가
      else {
        const addedCommentList = await commentBoxService.addComment(
          postId,
          commentInfo
        );
        const toUpdate = {
          postId,
          commentList: addedCommentList,
        };

        const editedCommentBox = await commentBoxService.editCommentBox(
          postId,
          toUpdate
        );

        res.status(200).json(editedCommentBox);
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
    if (!commentBox || commentBox === 'null') {
      throw new Error('작성된 댓글이 없습니다.');
    }
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
      // const commentInfo = await commentBoxService.getComment(postId, commentId);
      // console.log(commentInfo);
      // if (commentInfo.nickName !== req.currentNickName) {
      //   throw new Error('댓글을 삭제할 권한이 없습니다.');
      // }

      const deletedCommentList = await commentBoxService.deleteComment(
        postId,
        commentId
      );
      const toUpdate = {
        postId,
        commentList: deletedCommentList,
      };

      const editedCommentBox = await commentBoxService.editCommentBox(
        postId,
        toUpdate
      );

      res.status(200).json(editedCommentBox);
    } catch (error) {
      next(error);
    }
  }
);

export { commentBoxRouter };
