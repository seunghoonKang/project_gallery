import { model } from 'mongoose';
import { TeamRecruitmentBoardSchema } from '../schemas/teamRecruitmentBoard-schema';

const TeamRecruitmentBoard = model(
  'teamRecruitmentBoards',
  TeamRecruitmentBoardSchema
);

export class TeamRecruitmentBoardModel {
  // 팀원 모집 생성
  async create(postInfo) {
    const newTeam = await TeamRecruitmentBoard.create(postInfo);
    return newTeam;
  }

  // 팀원 모집 조회 - 아이디
  async findById(postId) {
    const team = await TeamRecruitmentBoard.findOne({ _id: postId });
    return team;
  }

  // 모든 팀원 모집 조회
  async getAll() {
    const teams = await TeamRecruitmentBoard.find({});
    return teams;
  }

  // 팀원 모집 수정
  async update({ postId, update }) {
    const filter = { _id: postId };
    const option = { returnOriginal: false };

    const updatedTeam = await TeamRecruitmentBoard.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedTeam;
  }

  // 팀원 모집 삭제
  async delete(postId) {
    const team = await TeamRecruitmentBoard.findOneAndDelete({ _id: postId });
    return team;
  }
}

const teamRecruitmentBoardModel = new TeamRecruitmentBoardModel();

export { teamRecruitmentBoardModel };
