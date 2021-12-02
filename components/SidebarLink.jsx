import React from "react";
import Link from 'next/link'

const SidebarLink = ({ href, icon, text }) => {
  return (
    <Link href={href}>
      <div className="cursor-pointer bg-white py-1 px-2 mx-1 my-2 rounded-sm shadow flex gap-2 items-center hover:text-pink-600">
        {icon}
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default SidebarLink;
