import home from "../../assets/home.png";
import homeActive from "../../assets/home-active.png";
import quran from "../../assets/quran.png";
import quranAvtive from "../../assets/quran-active.png";
import sajdah from "../../assets/salah.png";
import sajdahActive from "../../assets/salah-active.png";
import about from "../../assets/about.png";
import aboutActive from "../../assets/about-active.png";

export const NavElement = [
  {
    imgSource: home,
    activeImgSource: homeActive,
    menuName: "Home",
    path: "",
  },
  {
    imgSource: quran,
    activeImgSource: quranAvtive,
    menuName: "Quran",
    path: "quran",
  },
  {
    imgSource: sajdah,
    activeImgSource: sajdahActive,
    menuName: "Prayer",
    path: "prayer",
  },
  {
    imgSource: about,
    activeImgSource: aboutActive,
    menuName: "About",
    path: "about",
  },
];
