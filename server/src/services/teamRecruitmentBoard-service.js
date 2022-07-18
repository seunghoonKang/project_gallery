import { teamRecruitmentBoardModel } from '../db';

class TeamRecruitmentBoardService {
  constructor(teamRecruitmentBoardModel) {
    this.teamRecruitmentBoardModel = teamRecruitmentBoardModel;
  }

  // 팀원 모집 조회
  async getRecruitment(nickName) {
    const team = await this.teamRecruitmentBoardModel.findByNickName({
      nickName,
    });
    return team;
  }

  // 모든 팀원 모집 조회
  async getRecruitments() {
    const teams = await this.teamRecruitmentBoardModel.findAllTeam();
    return teams;
  }

  // 팀원 모집 추가
  async addRecruitment(teamInfo) {
    const newRecruitment = await this.teamRecruitmentBoardModel.create(
      teamInfo
    );
    return newRecruitment;
  }

  // 팀원 모집 수정
  async editRecruitment(titleId, toUpdate) {
    const editedRecruitment = await this.teamRecruitmentBoardModel.update({
      _id: titleId,
      update: toUpdate,
    });

    return editedRecruitment;
  }

  // 팀원 모집 삭제
  async deleteRecruitment(titleId) {
    const deletedRecruitment = await this.teamRecruitmentBoardModel.delete({
      _id: titleId,
    });

    if (!deletedRecruitment) {
      throw new Error('삭제에 실패했습니다. 다시 한 번 확인해 주세요.');
    }
    return deletedRecruitment;
  }
}

const teamRecruitmentBoardService = new TeamRecruitmentBoardService(
  teamRecruitmentBoardModel
);

export { teamRecruitmentBoardService };
