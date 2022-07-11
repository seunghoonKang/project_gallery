//비밀번호 특수문자 등 확인 정규식
const passwordRuleReg = new RegExp(
  /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/
);

const regExpUtil = {
  checkPasswordRule: (password) => {
    console.log('check');
    return passwordRuleReg.test(password);
  },
};

export default regExpUtil;
