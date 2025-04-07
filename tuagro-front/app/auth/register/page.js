import RegisterForm from "@/app/components/auth/register/RegisterForm"
import VideoSection from "@/app/components/ui/video/VideoSection"

export default function RegisterPage(){
    return(
      <div className="registerMain">
        <RegisterForm/>
        <VideoSection/>
      </div>
    )
}