import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { projectProposalBoardService } from '../services';

const projectProposalBoardRouter = Router();

// 프로젝트 제안 추가 api 호출
projectProposalBoardRouter.post('/', loginRequired, async (req, res, next) => {
  try {
    const { title, tags, description } = req.body;

    const newProposal = await projectProposalBoardService.addProposal({
      title,
      tags,
      description,
    });

    res.status(200).json(newProposal);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 제안 전체 정보 조회 api 호출
projectProposalBoardRouter.get('/list', async (req, res, next) => {
  try {
    const proposals = await projectProposalBoardService.getProposals();

    res.status(200).json(proposals);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 제안 정보 조회 api 호출
projectProposalBoardRouter.get('/postId/:postId', async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const proposal = await projectProposalBoardService.getProposalById(postId);

    res.status(200).json(proposal);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 제안 수정 api 호출
projectProposalBoardRouter.patch(
  '/postId/:postId',
  loginRequired,
  async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const nickName = req.currentNickName;
      const { title, tags, description } = req.body;

      const originProposal = await projectProposalBoardService.getProposalById(
        postId
      );

      if (originProposal.nickName !== nickName) {
        throw new Error('제안을 수정할 권한이 없습니다.');
      }

      const toUpdate = {
        ...(nickName && { nickName }),
        ...(title && { title }),
        ...(tags && { tags }),
        ...(description && { description }),
      };

      const updatedProposalInfo =
        await projectProposalBoardService.editProposal(postId, toUpdate);

      res.status(200).json(updatedProposalInfo);
    } catch (error) {
      next(error);
    }
  }
);

// 프로젝트 제안 삭제 api 호출
projectProposalBoardRouter.delete(
  '/postId/:postId',
  loginRequired,
  async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const nickName = req.currentNickName;

      const originProposal = await projectProposalBoardService.getProposalById(
        postId
      );

      if (originProposal.nickName !== nickName) {
        throw new Error('제안을 삭제할 권한이 없습니다.');
      }

      const deletedProposal = await projectProposalBoardService.deleteProposal(
        postId
      );

      res.status(200).json(deletedProposal);
    } catch (error) {
      next(error);
    }
  }
);

export { projectProposalBoardRouter };
