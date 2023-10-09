import './footer.css';
import owasp from '../../Assets/logo-owasp.png'
function Footer(){
return(
    
<footer class="footer-distributed">

<div class="footer-left">

    <span><img className = "footerLogo" src = {owasp}></img></span>
</div>

<div class="footer-center">

    <div>
        <p><span>Contact-Us</span><a href="owasptu@gmail.com"> owasptu@gmail.com </a><br/> <a>General secretary : Sanya Gupta</a><br/><a href="tel:+919674603907">  +91 7275522600</a></p>
        <p><span>Our-Website</span><a href='https://owasp.co.in/'>owasp.co.in</a></p>
    </div>
</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>About the organization</span>
        The team of OWASP Student Chapter, one of the gilt-edged coding society, involves ingenious mind solvers who are eager to make the world a better place to live in with their innovative techniques and discoveries.
    </p>
    <span style={{"color":"white"}}>Join Us On The Following Platforms</span> <br/>
    <a href='https://github.com/OWASP-STUDENT-CHAPTER' target={"_blank"}><img src="https://img.icons8.com/nolan/64/github.png" style={{"maxWidth":"40px","maxHeight":"40px","paddingTop":"15px","marginRight":"10px"}}/></a>
    <a href="https://discord.gg/nnZCPbxnZu" target={"_blank"}><img src="https://img.icons8.com/nolan/64/discord.png" style={{"maxWidth":"40px","maxHeight":"40px","paddingTop":"15px","marginRight":"10px"}}/></a>
    <a href="https://www.linkedin.com/company/owasp-tiet/" target={"_blank"}><img src="https://img.icons8.com/nolan/64/linkedin.png" style={{"maxWidth":"40px","maxHeight":"40px","paddingTop":"15px","marginRight":"10px"}}/></a>
    <a href="https://www.instagram.com/owasp_tiet/" target={"_blank"}><img src="https://img.icons8.com/nolan/64/instagram-new.png" style={{"maxWidth":"40px","maxHeight":"40px","paddingTop":"15px","marginRight":"10px"}}/></a>
</div>

</footer>
)
}
export default Footer;