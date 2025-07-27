import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaTiktok,
    FaGlobe,
  } from 'react-icons/fa';
  import { IconType } from 'react-icons';
  
  const iconMap: Record<string, IconType> = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    twitter: FaTwitter,
    linkedin: FaLinkedinIn,
    youtube: FaYoutube,
    tiktok: FaTiktok,
  };
  
  export const getSocialIcon = (platform: string, className = '') => {
    const IconComponent = iconMap[platform.toLowerCase()] || FaGlobe;
    return <IconComponent className={className} />;
  };