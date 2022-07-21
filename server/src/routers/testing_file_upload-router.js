import { Router } from 'express';
import { multer } from 'multer';

const upload = multer({
  dest: 'uploads/',
});

const testingFileUploadRouter = Router();

export { testingFileUploadRouter };
