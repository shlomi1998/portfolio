import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import { FaLinkedinIn } from "react-icons/fa";

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
]


export const socials = [
    {id: 1, link: 'https://www.instagram.com/shlomi_azenkot/?next=%2F', icon: <AiOutlineInstagram/>},
    {id: 2, link: 'https://www.linkedin.com/in/shlomi-azenkot-089417281/', icon: <FaLinkedinIn/> },
    {id: 3, link: 'https://github.com/shlomi1998', icon: <AiFillGithub/>}
]