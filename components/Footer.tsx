import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";

const Footer = ({ user, type }: FooterProps) => {
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user.name[0]}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>

      <div className="footer_image" onClick={async () => await logoutAccount()}>
        <Image src="icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};

export default Footer;
