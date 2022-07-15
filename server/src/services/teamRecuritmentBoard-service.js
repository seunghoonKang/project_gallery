import { teamRecruitmentBoardModel } from '../db';

class TeamRecruitmentBoardService {
  constructor(teamRecruitmentBoardModel) {
    this.teamRecruitmentBoardModel = teamRecruitmentBoardModel;
  }

  // 팀원 모집 조회
  async getTeamRecruitmentBoard(nickName) {
    const teams = await this.teamRecruitmentBoardModel.findByNickName({
      nickName,
    });
    return teams;
  }

  // 팀원 모집 추가
  async addTeamRecruitmentBoard(teamInfo) {
    const createdTeamRecruitment =
      await this.teamRecruitmentBoardModel.createTeam(teamInfo);
    return createdTeamRecruitment;
  }

  // 팀원 모집 삭제
  async deleteTeamRecruitmentBoard(titleId) {
    const team = await this.teamRecruitmentBoardModel.deleteTeam({
      _id: titleId,
    });

    if (!team) {
      throw new Error('삭제에 실패했습니다. 다시 한 번 확인해 주세요.');
    }
    return team;
  }

  // 팀원 모집 수정
  async setTeamRecruitmentBoard(titleId, toUpdate) {
    const team = await this.teamRecruitmentBoardModel.update({
      _id: titleId,
      update: toUpdate,
    });

    return team;
  }
}

const teamRecruitmentBoardService = new TeamRecruitmentBoardService(
  teamRecruitmentBoardModel
);

export { teamRecruitmentBoardService };
