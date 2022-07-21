import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { projectExhibitionBoardService, commentService } from '../services';

const projectExhibitionBoardRouter = Router();

// 프로젝트 전시 - 게시글 생성
projectExhibitionBoardRouter.post(
  '/',
  loginRequired,
  async (req, res, next) => {
    try {
      const { title, url, tags, description, images, intro, updateLog } =
        req.body;
      const nickName = req.currentNickName;
      const commentBoxId = await commentService.addCommentBox();

      const newPost = await projectExhibitionBoardService.addPost({
        title,
        nickName,
        url,
        tags,
        description,
        images,
        intro,
        updateLog,
        commentBoxId,
      });

      await commentService.editCommentBox(commentBoxId, newPost._id);

      res.status(200).json(newPost);
    } catch (error) {
      next(error);
    }
  }
);

// 프로젝트 전시 - 게시글 전부 불러오기
projectExhibitionBoardRouter.get('/list', async (req, res, next) => {
  try {
    const allPost = await projectExhibitionBoardService.getPosts();

    res.status(200).json(allPost);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 전시 - 오브젝트 아이디로 불러오기
projectExhibitionBoardRouter.get('/postId/:postId', async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const postById = await projectExhibitionBoardService.getPostById(postId);

    res.status(200).json(postById);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 전시 - 작성자 닉네임으로 불러오기
projectExhibitionBoardRouter.get(
  '/nickName/:nickName',
  async (req, res, next) => {
    try {
      const nickName = req.params.nickname;
      const postsByNickName =
        await projectExhibitionBoardService.getPostsByNickName(nickName);

      res.status(200).json(postsByNickName);
    } catch (error) {
      next(error);
    }
  }
);

// 프로젝트 전시 - 태그로 불러오기(미완성)
projectExhibitionBoardRouter.get('/tags/:tags', async (req, res, next) => {
  try {
    const posts = await projectExhibitionBoardService.getPosts();
    const searchTag = req.params.tags.split('&');
    const resultArr = [];

    for (let i = 0; i < posts.length; i++) {
      // posts의 태그와 tags가 포함관계인 게시글의 아이디와 게시글 제목만 리턴
    }

    res.status(200).json(resultArr);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 전시 - 키워드로 검색하기(미완성)
projectExhibitionBoardRouter.get(
  '/keyword/:keyword',
  async (req, res, next) => {
    try {
      const keyword = req.params.keyword;
      const posts = await projectExhibitionBoardService.getPosts();
      const resultArr = [];

      for (let i = 0; i < posts.length; i++) {
        if (posts[i].title.includes(keyword)) {
          resultArr.push(posts[i]);
        }
      }

      res.status(200).json(resultArr);
    } catch (error) {
      next(error);
    }
  }
);

// 프로젝트 전시 - 게시글 수정
projectExhibitionBoardRouter.patch(
  '/postId/:postId',
  loginRequired,
  async (req, res, next) => {
    try {
      // 본인 글인지 확인하는 절차 삽입
      const postId = req.params.postId;
      const nickName = req.currentNickName;
      const { title, url, tags, description, images, intro, updateLog } =
        req.body;

      const postById = await projectExhibitionBoardService.getPostById(postId);
      const owner = postById.nickName;

      if (owner !== nickName) {
        throw new Error('전시물을 수정할 권한이 없습니다.');
      }

      const toUpdate = {
        ...(title && { title }),
        ...(nickName && { nickName }),
        ...(url && { url }),
        ...(tags && { tags }),
        ...(description && { description }),
        ...(images && { images }),
        ...(intro && { intro }),
        ...(updateLog && { updateLog }),
      };

      const updatedPostInfo = await projectExhibitionBoardService.editPost(
        postId,
        toUpdate
      );

      res.status(200).json(updatedPostInfo);
    } catch (error) {
      next(error);
    }
  }
);

// 프로젝트 전시 - 게시글 삭제
projectExhibitionBoardRouter.delete(
  '/postId/:postId',
  loginRequired,
  async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const nickName = req.currentNickName;

      const postById = await projectExhibitionBoardService.getPostById(postId);
      const owner = postById.nickName;
      if (owner !== nickName) {
        throw new Error('전시물을 삭제할 권한이 없습니다.');
      }

      const deletedPost = await projectExhibitionBoardService.deletePost(
        postId
      );

      res.status(200).json(deletedPost);
    } catch (error) {
      next(error);
    }
  }
);

export { projectExhibitionBoardRouter };
