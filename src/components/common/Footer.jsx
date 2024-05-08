import { Link } from "react-router-dom";
import { links } from "../../data/links";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-secondary-200  text-tertiary   px-5 sm:px-10 md:px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-14 justify-center items-center">
        <span className="">
          <h2 className="border border-primary p-3 w-fit text-xl">Tech Support</h2>
          <ul className="p-3 flex flex-col gap-3">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </span>

        <span>
          <h2 className="text-xl">Reach Out to Us</h2>
          <br />
          <ul className="  flex flex-col gap-3 ">
            <li>Phone: 123-456-7890</li>
            <li>Email: example@gmail.com </li>
            <li>Address: 1234 Main St. City, State 12345</li>
          </ul>
        </span>

        {/* newsletter form */}

        <span className="max-w-[380px]">
          <h2 className="text-xl">Newsletter</h2>
          <br />
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-primary focus:outline-none rounded"
            />
            <button className="bg-primary text-tertiary p-2 rounded">
              Subscribe
            </button>
          </form>
        </span>
      </div>
      <br />
      <hr className="text-primary w-full" />
      <span className="flex items-center justify-between px-5 flex-wrap">
        <p className="text-center py-5">&copy; 2024 Tech-Support</p>

        <div className="flex justify-center gap-5 text-tertiary">
          <CiFacebook size={32} />
          <CiTwitter size={32} />
          <CiLinkedin size={32} />
        </div>
      </span>
    </footer>
  );
};

export default Footer;
