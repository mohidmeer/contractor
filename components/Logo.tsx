"use client";

import { useSiteContent } from "@/lib/siteContent";
import { toMediaUrl } from "@/lib/media";
import Image from "next/image";
import React from "react";

const Logo = () => {
  const { siteLogo, siteName } = useSiteContent();

  return (
    <div className="">
      <Image
        src={toMediaUrl(siteLogo)}
        alt={siteName}
        width={200}
        height={120}
        className="sm:w-[200px]"
      />
    </div>
  );
};
export default Logo;
