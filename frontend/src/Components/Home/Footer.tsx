import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "How To Play", href: "/#how-it-works" },
        { name: "Matches", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Rules", href: "/rules" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
      ],
    },
    {
      title: "Get Started",
      links: [
        { name: "Sign Up", href: "/auth/signup" },
        { name: "Login", href: "/auth/login" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Help Center", href: "/help" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: "/icons/twitter.svg",
      href: "https://twitter.com",
    },
    {
      name: "Facebook",
      icon: "/icons/facebook.svg",
      href: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.svg",
      href: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.svg",
      href: "https://linkedin.com",
    },
  ];

  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-slate-700 text-white pt-12 pb-6 z-[2] relative rounded-t-2xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold">
                Cric<span className="text-foreground">Market</span>
              </h2>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              A dynamic fantasy cricket market where your virtual currency
              powers strategic, real-time team stock trading.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-8 h-8 bg-blue-800/40 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                    {/* You'll need to add social media icons to your project */}
                    {social.name[0]}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} CricMarket. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
