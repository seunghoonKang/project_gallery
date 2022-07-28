import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { upload } from '../middlewares/multer';

const fileUploaderRouter = Router();

fileUploaderRouter.post(
  '/',
  loginRequired,
  upload.array('imgs', 5),
  async (req, res, next) => {
    const incoming = req.files;
    const locations = incoming.map((img) => img.location);

    if (incoming !== 'undefined') {
      res.status(200).json({ imgUrls: locations });
    } else {
      throw new Error('파일 업로드에 실패했습니다.');
    }
  }
);

export { fileUploaderRouter };
