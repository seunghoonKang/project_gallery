import { Router } from 'express';

import { loginRequired } from '../middlewares';
import { teamRecruitmentBoardService } from '../services';

const teamRecruitmentBoardRouter = Router();

// 팀원 모집 조회 api 호출
teamRecruitmentBoardRouter.get('/', loginRequired, async (req, res, next) => {
  try {
    const teams = await teamRecruitmentBoardService.getTeamRecruitmentBoard(
      nickName
    );
    res.status(201).json(teams);
  } catch (error) {
    next(error);
  }
});

// 팀원 모집 추가 api 호출
teamRecruitmentBoardRouter.post('/', loginRequired, async (req, res, next) => {
  try {
    const { title, position, tag, description } = req.body;

    const new_team = await teamRecruitmentBoardService.addTeamRecruitmentBoard({
      title,
      position,
      tag,
      description,
    });

    res.status(201).json(new_team);
  } catch (error) {
    next(error);
  }
});

// 팀원 모집 삭제 api 호출
teamRecruitmentBoardRouter.delete(
  '/',
  loginRequired,
  async (req, res, next) => {
    try {
      const nickName = req.body.nickName;
      const team = await teamRecruitmentBoardService.deleteTeam(nickName);

      res.status(201).json(team);
    } catch (error) {
      next(error);
    }
  }
);

// 팀원 모집 수정 api 호출
teamRecruitmentBoardRouter.patch('/', loginRequired, async (req, res, next) => {
  try {
    const { nickName, _id, title, position, tag, description } = req.body;

    const title_origin =
      await teamRecruitmentBoardService.getTeamRecruitmentBoard(_id);

    if (title_origin.nickName !== nickName) {
      throw new Error('제안을 수정할 권한이 없습니다.');
    }

    const toUpdate = {
      ...(title && { title }),
      ...(position && { position }),
      ...(tag && { tag }),
      ...(description && { description }),
    };

    const titleId = { _id: titleId };
    const updatedTeam =
      await teamRecruitmentBoardService.setTeamRecruitmentBoard(
        titleId,
        toUpdate
      );

    res.status(200).json(updatedTeam);
  } catch (error) {
    next(error);
  }
});

export { teamRecruitmentBoardRouter };
