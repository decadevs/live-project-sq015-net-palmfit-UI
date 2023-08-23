import PalmFitImage from "./PalmFitImage";

const PasswordReset = () => {
    return(
        <>
        <div className="passwordreset-container">
        <PalmFitImage/>
        <p className="logo">Palmfit</p>
        <form className="passwordreset-form" action="">
            <div className="passwordreset-text">
                <h1 className="text-two">Create new password</h1>
                <p>Your new password must be different from previous used password</p>
            </div>
            <label className="password" htmlFor="Password">Password</label>
            <input className="passwordreset-password" placeholder="Enter new password" type="password" />
            <label className="password" htmlFor="Password">Confirm password</label>
            <input className="passwordreset-password" placeholder="Confirm password" type="password" />
            <button className="passwordreset-submit">Reset Password</button>
        </form>
        </div>
        </>
    );
}

export default PasswordReset;