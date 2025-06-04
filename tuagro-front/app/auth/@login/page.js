import LoginForm from "@/app/components/auth/login/LoginForm"
import VideoSection from "@/app/components/ui/video/VideoSection"

export default function LoginPage(){
    return(

        <div className="loginMain">
            <LoginForm/>
            <VideoSection/>
        </div>
    )
}