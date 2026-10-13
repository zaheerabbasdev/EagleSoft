import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faMobileScreen,
  faCartShopping,
  faGears,
  faBoxesStacked,
  faPenRuler,
  faCloud,
  faHeadset,
  faShop,
  faUtensils,
  faTruckFast,
  faBriefcase,
  faUsers,
  faBuilding,
  faArrowRight,
  faArrowLeft,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faBars,
  faXmark,
  faShieldHalved,
  faBolt,
  faChartLine,
  faFileLines,
  faCircleQuestion,
  faLightbulb,
  faHandshake,
  faBullseye,
  faServer,
  faCode,
  faLayerGroup,
  faLock,
  faPaperPlane,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export const icons = {
  // Services
  "laptop-code": faLaptopCode,
  "mobile-screen": faMobileScreen,
  "cart-shopping": faCartShopping,
  gears: faGears,
  "boxes-stacked": faBoxesStacked,
  "pen-ruler": faPenRuler,
  cloud: faCloud,
  headset: faHeadset,

  // Solutions
  shop: faShop,
  utensils: faUtensils,
  "truck-fast": faTruckFast,
  briefcase: faBriefcase,
  users: faUsers,
  building: faBuilding,

  // UI & Navigation
  "arrow-right": faArrowRight,
  "arrow-left": faArrowLeft,
  check: faCheck,
  "check-circle": faCheckCircle,
  "chevron-down": faChevronDown,
  "chevron-up": faChevronUp,
  phone: faPhone,
  envelope: faEnvelope,
  "location-dot": faLocationDot,
  clock: faClock,
  bars: faBars,
  xmark: faXmark,
  shield: faShieldHalved,
  bolt: faBolt,
  chart: faChartLine,
  document: faFileLines,
  question: faCircleQuestion,
  lightbulb: faLightbulb,
  handshake: faHandshake,
  bullseye: faBullseye,
  server: faServer,
  code: faCode,
  layers: faLayerGroup,
  lock: faLock,
  send: faPaperPlane,
  star: faStar,

  // Brands
  linkedin: faLinkedinIn,
  facebook: faFacebookF,
  instagram: faInstagram,
  github: faGithub,
  twitter: faXTwitter,
};

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  className?: string;
  size?: "xs" | "sm" | "lg" | "xl" | "2xl";
}

export function Icon({ name, className = "", size }: IconProps) {
  const iconDefinition = icons[name];
  if (!iconDefinition) {
    return null;
  }
  return <FontAwesomeIcon icon={iconDefinition} className={className} size={size} />;
}
