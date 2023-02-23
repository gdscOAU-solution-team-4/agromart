import React,{useState} from 'react'
import AuthLayout from '../layout/authLayout'
import { registerImg } from '../assets'
import Input from '../components/atoms/Input'

export default function SignUp() {

  const[email,setEmail] = useState("");
  const[fullName,setFullName] = useState("");
  const[phoneNumber,setPhoneNumber] = useState(0);
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const[confirmPassword,setConfirmPassword] = useState("");

  return (
    <>
        <AuthLayout authImg={registerImg} handleLink={"/"} quesion={"Already have an account?"} questionLinkText={"Sign In"} questionLink={"/login"}>
            <form className='px-14 pt-6'>
              <Input type={"email"} placeholder={"email address"} label={"email"} defaultValue={email} onChange={(e) => setEmail(e.target.value)} />

              <Input type={"text"} placeholder={"Full Name"} label={"fullName"} defaultValue={fullName} onChange={(e) => setFullName(e.target.value)} />
              <Input type={"number"} placeholder={"Phone Number"} label={"phone"} defaultValue={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              <Input type={"text"} placeholder={"Username"} label={"username"} defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
              <Input type={"password"} placeholder={"password"} label={"password"} defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
              <Input type={"password"} placeholder={"conirm Password"} label={"ConfirmPassword"} defaultValue={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </form>
        </AuthLayout>
    </>
  )
}
