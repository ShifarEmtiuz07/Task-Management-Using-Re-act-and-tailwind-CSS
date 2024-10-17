import Logo from "../../assets/newIcon-removebg-preview.png";

export default function HeaderSection() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto ml-10 flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[100px]" src={Logo} alt="Lws" />
        </a>
      </div>
    </nav>
  );
}
