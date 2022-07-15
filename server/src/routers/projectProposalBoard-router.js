import { Router } from 'express';

import { loginRequired } from '../middlewares';
import { projectProposalBoardService } from '../services';

const projectProposalBoardRouter = Router();

// 프로젝트 제안 정보 조회 api 호출
projectProposalBoardRouter.get('/', loginRequired, async (req, res, next) => {
  try {
    const titleId = req.body._id;
    const proposals = await projectProposalBoardService.getProposal(titleId);
    res.status(201).json(proposals);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 제안 추가 api 호출
projectProposalBoardRouter.post('/', loginRequired, async (req, res, next) => {
  try {
    const { title, tag, description } = req.body;

    const new_proposal = await projectProposalBoardService.addProposal({
      title,
      tag,
      description,
    });

    res.status(201).json(new_proposal);
  } catch (error) {
    next(error);
  }
});

// 프로젝트 제안 삭제 api 호출
projectProposalBoardRouter.delete(
  '/',
  loginRequired,
  async (req, res, next) => {
    try {
      const titleId = req.body._id;
      const proposal = await projectProposalBoardService.deleteProposal(
        titleId
      );

      res.status(201).json(proposal);
    } catch (error) {
      next(error);
    }
  }
);

// 프로젝트 제안 수정 api 호출
projectProposalBoardRouter.patch('/', loginRequired, async (req, res, next) => {
  try {
    const { nickName, title, _id, tag, description } = req.body;

    const title_origin = await projectProposalBoardService.getProposal(_id);

    if (title_origin.nickName !== nickName) {
      throw new Error('제안을 수정할 권한이 없습니다.');
    }

    const toUpdate = {
      ...(title && { title }),
      ...(tag && { tag }),
      ...(description && { description }),
    };

    const titleId = { _id: titleId };
    const updatedProposal = await projectProposalBoardService.setProposal(
      titleId,
      toUpdate
    );

    res.status(200).json(updatedProposal);
  } catch (error) {
    next(error);
  }
});

export { projectProposalBoardRouter };
