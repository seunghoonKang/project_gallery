import { Router } from 'express';

import { loginRequired } from '../middlewares';
import { ProposalService } from '../services';

const proposalRouter = Router();

proposalRouter.get('/', loginRequired, async (req, res, next) => {
  try {
    const proposals = await ProposalService.getAllProposal();
    res.status(201).json(proposals);
  } catch (error) {
    next(error);
  }
});

proposalRouter.post('/', loginRequired, async (req, res, next) => {
    try {
      const { nickName, title, tag, description } = req.body;

      const new_proposal = await ProposalService.addProposal({
        nickName,
        title,
        tag,
        description
      });

      res.status(201).json(new_proposal);
    } catch (error) {
      next(error);
    }
  }
);

proposalRouter.delete('/', loginRequired, async (req, res, next) => {
  try {
    const title_id = req.body.title_id;
    const deletedCount = await ProposalService.deleteTitle(title_id);

    res.status(201).json(deletedCount);
  } catch (error) {
    next(error);
  }
});

proposalRouter.patch('/', loginRequired, async function (req, res, next) {
  try {
    const { nickName, title, tag, description } = req.body;

    const title_origin = await ProposalService.getTitle(title);

    if (title_origin.nickName !== nickName) {
      throw new Error('제안을 수정할 권한이 없습니다.');
    }

    const toUpdate = {
      ...(tag && { tag }),
      ...(description && { description }),
    };

    const updatedProposal = await ProposalService.setProposal(
      title,
      toUpdate
    );

    res.status(200).json(updatedProposal);
  } catch (error) {
    next(error);
  }
});

export { proposalRouter };
