import React from 'react';

const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 rounded-t-md bg-black text-white">
                <aside>
                    <p className="font-extrabold btn btn-ghost text-lg">chic.stylin</p>
                    <p>
                        This Product Is Excluded From Site
                        <br />
                        Promotions And Discounts.
                    </p>
                </aside>
                <nav>
                    <h6 className="font-bold text-lg">Menu</h6>
                    <a className="link link-hover">Men</a>
                    <a className="link link-hover">Woman</a>
                    <a className="link link-hover">Kids</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-lg">Social</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Youtube</a>
                    <a className="link link-hover">Instagram</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-lg">Help</h6>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Terms of use</a>
                </nav>
            </footer>
                <div className="mt-2 mb-2 w-full text-center border-t border-gray-700 pt-4">
                    <p className="text-sm">&copy; 2024 Md Ehsanul Haque Rizvy. All rights reserved.</p>
                </div>
        </div>
    );
};

export default Footer;
