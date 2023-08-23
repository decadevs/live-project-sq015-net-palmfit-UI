import vector from '../images/Vector.svg'

const EmailSend = () => {
    return(
    <>
    <div>
        <div className='palmfit-logo'>
            <img src={vector} alt="" />
            <p className='palmfit'>Palmfit</p>
        </div>
        <div className='emailsend-head'>
            <h1 className='text-three'>Check your mail</h1>
            <p className='text-four'>We have sent a password recover instruction to your mail</p>
        </div>
        <div className='emailsend-foot'>
            <p>Did not recieve the email? check your spam filter</p>
            <p>or <span style={{color: "blue"}}>send again</span></p>
        </div>
        

    </div>
    </>
    )
}

export default EmailSend;