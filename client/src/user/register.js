import { Form,Button} from 'react-bootstrap';
import {useEffect,useState}from 'react';
import axios from 'axios';


function Register(){
  const [user,setUser]=useState();
    const [inputEmail,seInputEmail]=useState('');
    const [inputPwd,setInputPwd]= useState('');
    const [inputPwd2,setInputPwd2]=useState('');
    const [inputNickname,setInputNickname]=useState('')

    const [inputPwdCheck,setInputPwdCheck]=useState(false)
    const [inputPwd2Check,setInputPwd2Check]=useState(false)

    const inputEmailHandler=(e)=>{
        seInputEmail(e.currentTarget.value);

    }
    const inputPwdHandler=(e)=>{
        setInputPwd(e.currentTarget.value);

    }
    const inputPwd2Handler=(e)=>{
      setInputPwd2(e.currentTarget.value);

  }
  const inputNicHandler=(e)=>{
    setInputNickname(e.currentTarget.value);

}
 
   
   
   //비밀번호 특수문자 등을 확인하는 코드  
        const reg =new RegExp(/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/)
        useEffect(()=>{
         if(reg.test(inputPwd)){ 
          setInputPwdCheck(true)
              }else{
                setInputPwdCheck(false)
              }
     
        },[inputPwd])
     
        // 비밀번호확인하는 코드 
        useEffect(()=>{
          if(inputPwd2===""){
            setInputPwd2Check(false)
          }
          else if(inputPwd===inputPwd2){
            setInputPwd2Check(true)
  
          }else{
            setInputPwd2Check(false)
          }
        },[inputPwd,inputPwd2])
        
        
  

    
   
   
    const onSubmitHandler=(e)=>{
        e.preventDefault()
      if(inputPwdCheck===true && inputPwd2Check===true){
        alert('hi')
        const body={
          email:inputEmail,
          password:inputPwd2,
          nickName:inputNickname
        }
        // axios.post("/api/user/register", body)
        // .then((res) => { setUser(res.data)})
        // console.log(user)
        
        //    if(user===undefined){
        //       alert('이미 등록된 이메일입니다.')
        //    }else {
        //      alert('정상적으로 회원가입이 되었습니다!')
        //      //window.location.href = '/';
        //    }
        //   
      }else{
        alert("비밀번호 또는 이메일을 확인해주세요!")
      }

        
        
       
        }
        
    

    return (
        <Form onSubmit={onSubmitHandler}style={{maxWidth:'700px', margin:'2rem auto'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>이메일</Form.Label>
    <Form.Control required type="email" placeholder="Enter email" value={inputEmail} onChange={inputEmailHandler}  />
    
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>닉네임</Form.Label>
    <Form.Control required type="string" placeholder="Enter nickName" value={inputNickname} onChange={inputNicHandler}  />
    
    <Form.Text className="text-muted">
      규정에 맞지 않는 닉네임은 강제퇴출합니다
    </Form.Text>
  </Form.Group>
  

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>비밀번호</Form.Label>
    <Form.Control  required minlength="8"type="password" placeholder="Password" value={inputPwd} onChange={inputPwdHandler}/>
    <div >
      {inputPwdCheck===false? <div style={{color:"red",fontSize:"12px"}}> 최소8자리수이며,숫자,문자,특수문자를 넣어주세요 </div>
      :<div style={{color:"green",fontSize:"12px"}}>사용가능한 비밀번호입니다 </div>}
    </div>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>비밀번호 확인</Form.Label>
    <Form.Control  required minlength="8"type="password" placeholder="Password" value={inputPwd2} onChange={inputPwd2Handler}/>
    <div >
      {inputPwd2Check===false? <div style={{color:"red",fontSize:"12px"}}>비밀번호가 다릅니다 </div>
      :<div style={{color:"green",fontSize:"12px"}}>비밀번호가 같습니다. </div>}
    </div>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
    
    
    
}


export default Register;