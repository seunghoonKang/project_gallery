import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { projectExhibitionBoardService } from '../services';

const projectExhibitionBoardRouter = Router();

projectExhibitionBoardRouter.get('/', async (req, res, next) => {
  try {
    const allPost = await projectExhibitionBoardService.getPosts();

    res.status(200).json(allPost);
  } catch (error) {
    next(error);
  }
});

export { projectExhibitionBoardRouter };
