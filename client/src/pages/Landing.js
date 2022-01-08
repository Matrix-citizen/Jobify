import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return <Wrapper>
    <nav>
      <img src={logo} alt='jobify' className='logo' />
    </nav>
    <div className="container page">
    {/* info */}
      <div className="info">
        <h1>job <span>tracking</span> app</h1>
        <p>
        I'm baby truffaut viral crucifix helvetica fam craft beer typewriter umami vaporware. Gentrify keytar bushwick, chia marfa narwhal quinoa mustache irony flexitarian keffiyeh kitsch. Next level unicorn irony ramps, sustainable heirloom man bun enamel pin aesthetic hammock meggings marfa four loko waistcoat.
        </p>
        <button className="btn btn-hero">Login/Register</button>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </div>
  </Wrapper>
}

export default Landing

