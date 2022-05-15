import { string } from "yup";

export interface Lenguaje {
    isEnglish: boolean;
    home:      string[];
    navbar:    Navbar;
    aboutMe:   AboutMe;
    practices: Practices;
    modalEmail: ModalEmail;
}

export interface AboutMe {
    strong: string;
    title:  string;
    p1:     string;
    p2:     string;
    p3:     string;
    title2: string;
    p4:     string;
}

export interface Navbar {
    link1: string;
    link2: string;
    link3: string;
    link4: string;
}

export interface Practices {
    title:  string;
    p1:     string;
    title2: string;
    p2:     string;
}
interface ModalEmail {
    title1: string;
    title2: string;
    label1: string;
    label2: string;
    label3: string;
    button: string;
    msgOk: string;
    msgErr: string;
    msgSW: string;
}