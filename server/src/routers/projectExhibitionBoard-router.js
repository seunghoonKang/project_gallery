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

      const newPost = await projectExhibitionBoardService.addPost({
        title,
        nickName,
        url,
        tag,
        description,
      });

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

    // 태그를 복수 적용할 수 있게 할 것인지?
    // 구분자로 || && 사용할건지, 하나만 사용할 것인지
    // 배열로 저장해야함, split?
    // 태그를 변경할때마다 페이지 로딩을 다시 하지 않으려면 프론트에서?
    const tags = req.params.tag;

    res.status(200).json();
  } catch (error) {
    next(error);
  }
});

// 프로젝트 전시 - 키워드로 검색하기
projectExhibitionBoardRouter.get('/filter/keyword', async (req, res, next) => {
  try {
    const keyword = req.query.keyword;
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
projectExhibitionBoardRouter.patch('/edit/:postId', async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const title = req.body.title;
    const nickName = req.body.nickName;
    const url = req.body.url;
    const tag = req.body.tag;
    const description = req.body.description;

    const toUpdate = {
      ...(title && { title }),
      ...(nickName && { nickName }),
      ...(url && { url }),
      ...(tag && { tag }),
      ...(description && { description }),
    };

    const updatedPostInfo = await projectExhibitionBoardService.editPost(
      postId,
      toUpdate
    );

    res.status(200).json(updatedPostInfo);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 전시 - 게시글 삭제
projectExhibitionBoardRouter.delete('/delete', async (req, res, next) => {
  try {
    const deletedPost = await projectExhibitionBoardService.deletePost(
      req.body.postId
    );

    res.status(200).json(deletedPost);
  } catch (error) {
    next(error);
  }
});

export { projectExhibitionBoardRouter };
