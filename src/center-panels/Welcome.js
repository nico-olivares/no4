import './Welcome.css'

function Welcome() {


    return (
        <div className="welcome-container">
            <div className='image-group' >
                <img className='portrait' src='./media/portrait0-large.jpg' alt='Nicolas Olivares' />
                <p>Nicolas Olivares</p>
            </div>
            <p>Welcome to my interactive Resume.</p>
            <p>Look around and get to know me.</p>
            <p>I'm a software developer and teacher.</p>
            <p>This website was developed using React.</p>
            <p>Enjoy your visit.</p>
        </div>
    )

}

export default Welcome;