import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { projectExhibitionBoardService } from '../services';

const projectExhibitionBoardRouter = Router();

// 프로젝트 전시 - 게시글 생성
projectExhibitionBoardRouter.post(
  '/register',
  loginRequired,
  async (req, res, next) => {
    try {
      const title = req.body.title;
      const nickName = req.currentNickName;
      const url = req.body.url;
      const tag = req.body.tag;
      const description = req.body.description;
      const images = req.body.images;
      const intro = req.body.intro;
      const updateLog = req.body.updateLog;

      const newPost = await projectExhibitionBoardService.addPost({
        title,
        nickName,
        url,
        tag,
        description,
        images,
        intro,
        updateLog,
      });

      res.status(200).json(JSON.stringify(newPost));
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
projectExhibitionBoardRouter.get('/post/:postId', async (req, res, next) => {
  try {
    const postById = await projectExhibitionBoardService.getPostById(
      req.params.postId
    );

    res.status(200).json(postById);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 전시 - 작성자 닉네임으로 불러오기
projectExhibitionBoardRouter.get(
  '/filter/:nickName',
  async (req, res, next) => {
    try {
      const postByNickName =
        await projectExhibitionBoardService.getPostByNickName(
          req.params.nickName
        );

      res.status(200).json(postByNickName);
    } catch (error) {
      next(error);
    }
  }
);

// 프로젝트 전시 - 태그로 불러오기(미완성)
projectExhibitionBoardRouter.get('/filter/:tag', async (req, res, next) => {
  try {
    const posts = await projectExhibitionBoardService.getPosts();
    const tags = req.params.tag.split(' ');
    let resultArr = [];

    for (let i = 0; i < posts.length; i++) {
      // posts의 태그와 tags가 포함관계인 게시글의 아이디와 게시글 제목만 리턴
    }

    res.status(200).json(resultArr);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 전시 - 키워드로 검색하기(미완성)
projectExhibitionBoardRouter.get('/keyword', async (req, res, next) => {
  try {
    const keyword = req.query.keyword;
    console.log(keyword);
    const posts = await projectExhibitionBoardService.getPosts();
    let resultArr = [];

    for (let i = 0; i < posts.length; i++) {
      if (posts[i].title.includes(keyword)) {
        resultArr.push(posts[i]);
      }
    }

    res.status(200).json(resultArr);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 전시 - 게시글 수정
projectExhibitionBoardRouter.patch(
  '/edit/:postId',
  loginRequired,
  async (req, res, next) => {
    try {
      // 본인 글인지 확인하는 절차 삽입

      const postId = req.params.postId;
      const title = req.body.title;
      const nickName = req.body.currentNickName;
      const url = req.body.url;
      const tag = req.body.tag;
      const description = req.body.description;
      const images = req.body.images;
      const intro = req.body.intro;
      const updateLog = req.body.updateLog;

      const toUpdate = {
        ...(title && { title }),
        ...(nickName && { nickName }),
        ...(url && { url }),
        ...(tag && { tag }),
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
  '/delete',
  loginRequired,
  async (req, res, next) => {
    try {
      // 본인 글인지 확인하는 절차 삽입

      const deletedPost = await projectExhibitionBoardService.deletePost(
        req.body.postId
      );

      res.status(200).json(deletedPost);
    } catch (error) {
      next(error);
    }
  }
);

export { projectExhibitionBoardRouter };
