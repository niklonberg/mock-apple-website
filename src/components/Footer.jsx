import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop: <a href="">Find an Apple Store</a> or <a href="">other retailer</a> near you.
          </p>
          <p className="text-xs font-semibold text-gray">Or call 1-800-5555</p>
        </div>

        <div className="my-5 h-[1px] w-full bg-neutral-600" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">&copy; Copyright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex-col">
            {footerLinks.map((link, i) => (
              <a href="" key={link} className="text-xs font-semibold text-gray">
                {link} {i !== footerLinks.length - 1 && <span className="mx-2"> | </span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
