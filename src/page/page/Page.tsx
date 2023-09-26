import React from "react";
import { BlogPost } from "../../components/blogpost/BlogPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faComment, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "@mantine/core";

const listSocial = [
  {
    link: "",
    icon: faFacebook,
  },
  {
    link: "",
    icon: faTwitter,
  },
  {
    link: "",
    icon: faInstagram,
  },
  {
    link: "",
    icon: faYoutube,
  },
  {
    link: "",
    icon: faLinkedin,
  },
  {
    link: "",
    icon: faBehance,
  },
];
const listTag = [
  {
    title: "Clothes",
  },
  {
    title: "Men",
  },
  {
    title: "Women",
  },
  {
    title: "Kid",
  },
  {
    title: "Trend Coat",
  },
  {
    title: "Fashion",
  },
  {
    title: "Summer Hot",
  },
  {
    title: "winter Hot",
  },
];

export const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[1200px] py-[70px] flex">
        <div className="pr-[30px]">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <div className="flex justify-center">
            <Pagination total={9} color="pink" radius="9999px" size="lg" />
          </div>
        </div>

        <div className="px-[15px] w-[300px]">
          <aside className="mb-[50px]">
            <h4 className=" pb-[5px] border-b mb-[20px] ">GET CONNECTED</h4>
            <ul className="block">
              {listSocial.map((item) => (
                <li className=" w-[40px] h-[40px] inline-block p-[8px] item-center mr-[5px] border rounded-full text-[#8d8d8d] ct-hoverDefault">
                  <a
                    className="flex justify-center items-center"
                    href="blog.html"
                  >
                    <FontAwesomeIcon
                      className="flex justify-center items-center text-[22px]"
                      icon={item.icon}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <aside className="mb-[50px]">
            <h4 className="pb-[5px] border-b mb-[20px] ">SEARCH THE BLOG</h4>
            <form className="flex items-center  w-fit h-[41px] border rounded-3xl px-[10px] ">
              <input
                className=" py-[5px] px-[10px] outline-none placeholder:italic focus:border-sky-500"
                type="text"
                placeholder="LET’S SEARCH"
              />
              <button className="w-[34px] p-[5px] " type="submit">
                <FontAwesomeIcon className="text-[17px]" icon={faSearch} />
              </button>
            </form>
          </aside>
          <aside className="mb-[50px]">
            <h4 className="pb-[5px] border-b mb-[20px] ">RECENT COMMENTS</h4>
            <ul className="mb-[10px] text-[#8d8d8d]">
              <li className="py-[10px] border-b flex items-center">
                <FontAwesomeIcon
                  className="text-[45px] px-[10px]"
                  icon={faComment}
                />
                <a className="text-[14px] font-semibold" href="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </a>
              </li>
              <li className="py-[10px] border-b flex items-center">
                <FontAwesomeIcon
                  className="text-[45px] px-[10px]"
                  icon={faComment}
                />
                <a className="text-[14px] font-semibold" href="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </a>
              </li>
              <li className="py-[10px] border-b flex items-center">
                <FontAwesomeIcon
                  className="text-[45px] px-[10px]"
                  icon={faComment}
                />
                <a className="text-[14px] font-semibold" href="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </a>
              </li>
            </ul>
          </aside>
          <aside className="">
            <h4 className="pb-[5px] border-b mb-[20px]">POPULAR TAGS</h4>
            <ul className=" max-w-[270px] block uppercase text-[#8d8d8d]">
              {listTag.map((item) => (
                <li className=" w-fit inline-block px-[12px] py-[7px] border  text-[10px] mr-3 mt-3 ct-hoverDefault">
                  <a className="font-semibold" href="blog.html">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};