import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-mono text-orange-400 font-bold">
        <Link to={`/`}>Denver BitDevs</Link>
      </h1>
      <ul className="list-none flex text-2xl gap-8">
        {/* {links.map(link => <li className="font-mono hover:text-orange-400 cursor-pointer" key={link}>{link}</li>)} */}
        <li className="font-mono hover:text-orange-400 cursor-pointer">
          <Link to={`/about`}>About</Link>
        </li>
        <li className="font-mono hover:text-orange-400 cursor-pointer">
          <a href="https://meetup.com/denver-bitdevs" target="none">
            Events
          </a>
        </li>
        <li className="font-mono hover:text-orange-400 cursor-pointer">Shop</li>
        <li className="font-mono hover:text-orange-400 cursor-pointer">
          <a href="https://donate.denverbitdevs.com" target="none">
            Donate
          </a>
        </li>
      </ul>
    </div>
  );
}
