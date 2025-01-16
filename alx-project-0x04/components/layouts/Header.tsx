import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white shadow-md">
      {/* Container for header content */}
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        {/* Brand/Logo - Links to homepage */}
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        {/* Call to action buttons */}
        <div className="flex gap-4">
          <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
          <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
        </div>
      </div>
    </header>
  );
};

export default Header;