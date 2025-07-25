import { navLinks } from "../constants";
import { useGSAP } from '@gsap/react'; 
import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });
        navTween.fromTo(
            'nav',
            {backgroundColor: 'transparent'},
            {
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(1px)',
                duration: 1,
                ease: 'power1.inOut',
            },
        );
    }, [])
    return (  
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src='/images/logo.png' alt='logo'/>
                    <p>Neon Nectar</p>
                </a>
                <ul>
                    {
                        navLinks.map((link) => (
                            <li>{link.title}</li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;