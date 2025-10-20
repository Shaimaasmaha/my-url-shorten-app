import React from 'react';
import logo from '../assets/images/logo.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className="bg-violet-950 text-white py-12 px-4 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <img src={logo} alt="Shortly" className="h-8 invert brightness-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul>
              <li><a href="#" className="hover:text-cyan-400">Link Shortening</a></li>
              <li><a href="#" className="hover:text-cyan-400">Branded Links</a></li>
              <li><a href="#" className="hover:text-cyan-400">Analytics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul>
              <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400">Developers</a></li>
              <li><a href="#" className="hover:text-cyan-400">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul>
              <li><a href="#" className="hover:text-cyan-400">About</a></li>
              <li><a href="#" className="hover:text-cyan-400">Our Team</a></li>
              <li><a href="#" className="hover:text-cyan-400">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center md:justify-start space-x-4 mt-8 md:mt-0">
          <a href="#"><img src={facebookIcon} alt="Facebook" className="h-6" /></a>
          <a href="#"><img src={twitterIcon} alt="Twitter" className="h-6" /></a>
          <a href="#"><img src={pinterestIcon} alt="Pinterest" className="h-6" /></a>
          <a href="#"><img src={instagramIcon} alt="Instagram" className="h-6" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;