import PalmFitImage from "./PalmFitImage";

const ForgetPassword = () => {

    return(
        <>
        <div className="forgetpassword-container">
        <PalmFitImage/>
        <p className="logo">Palmfit</p>
        <form className="forgetpassword-form" action="">
            <div className="forgetpassword-text">
                <h1 className="text-one">Forgot password?</h1>
                <p>No worries, we'll send you reset instructions</p>
            </div>
            <input className="forgetpassword-email" placeholder="Enter your email address" type="text" />
            <button className="forgetpassword-send">Send</button>
            <p className="redirect-login">Back to login</p>
        </form>
        </div>
        </>
    )
}

export default ForgetPassword; 