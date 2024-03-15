import { createContext } from "react";

import photoHeader from '../public/foto1.png'
import gitLogo from '../public/carbon_logo-github.svg'
import gitLogoContato from '../public/github_contact.svg'
import emoji from '../public/Fame.svg'
import upload from '../public/upload.svg'
import foto from '../public/foto1.png'
import html from '../public/html.svg'
import js from '../public/js.svg'
import react from '../public/react.svg'
import css3 from '../public/css3.svg'
import bootstrap from '../public/bootstrap.svg'
import sass from '../public/sass.svg'
import firebase from '../public/firebase.svg'
import wpp from '../public/whatsapp.svg'
import linkedin from '../public/linkedin.svg'

export const imagens = [photoHeader, gitLogo, emoji, upload, foto, wpp, linkedin, gitLogoContato, html, js, react, css3, bootstrap,sass, firebase];

export const ImageContext = createContext(imagens)