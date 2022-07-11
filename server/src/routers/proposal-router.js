import { Router } from 'express';

import { loginRequired } from '../middlewares';
import { proposalService } from '../services';

const proposalRouter = Router();

proposalRouter.get('/', loginRequired, async (req, res, next) => {
  try {
    const proposals = await proposalService.getProposal();
    res.status(201).json(proposals);
  } catch (error) {
    next(error);
  }
});

proposalRouter.post('/', loginRequired, async (req, res, next) => {
  try {
    const { title, tag, description } = req.body;

    const new_proposal = await proposalService.addProposal({
      title,
      tag,
      description,
    });

    res.status(201).json(new_proposal);
  } catch (error) {
    next(error);
  }
});

proposalRouter.delete('/', loginRequired, async (req, res, next) => {
  try {
    const titleId = req.body._id;
    const proposal = await proposalService.deleteProposal(titleId);

    res.status(201).json(proposal);
  } catch (error) {
    next(error);
  }
});

proposalRouter.patch('/', loginRequired, async (req, res, next) => {
  try {
    const { nickName, title, _id, tag, description } = req.body;

    const title_origin = await proposalService.getProposal(_id);

    if (title_origin.nickName !== nickName) {
      throw new Error('제안을 수정할 권한이 없습니다.');
    }

    const toUpdate = {
      ...(title && { title }),
      ...(tag && { tag }),
      ...(description && { description }),
    };

    const titleId = { _id: titleId };
    const updatedProposal = await proposalService.setProposal(
      titleId,
      toUpdate
    );

    res.status(200).json(updatedProposal);
  } catch (error) {
    next(error);
  }
});

export { proposalRouter };
