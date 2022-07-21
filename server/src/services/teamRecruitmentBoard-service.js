import { teamRecruitmentBoardModel } from '../db';

class TeamRecruitmentBoardService {
  constructor(teamRecruitmentBoardModel) {
    this.teamRecruitmentBoardModel = teamRecruitmentBoardModel;
  }

  // 팀원 모집 조회
  async getRecruitmentById(postId) {
    const team = await this.teamRecruitmentBoardModel.findById(postId);
    return team;
  }

  // 모든 팀원 모집 조회
  async getRecruitments() {
    const teams = await this.teamRecruitmentBoardModel.getAll();
    return teams;
  }

  // 팀원 모집 추가
  async addRecruitment(postInfo) {
    const newRecruitment = await this.teamRecruitmentBoardModel.create(
      postInfo
    );
    return newRecruitment;
  }

  // 팀원 모집 수정
  async editRecruitment(postId, toUpdate) {
    const editedRecruitment = await this.teamRecruitmentBoardModel.update({
      postId,
      update: toUpdate,
    });

    return editedRecruitment;
  }

  // 팀원 모집 삭제
  async deleteRecruitment(postId) {
    const deletedRecruitment = await this.teamRecruitmentBoardModel.delete(
      postId
    );

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
