import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="block">
                <p>Company</p>
                <ul>
                    <li>
                        About us
                    </li>
                    <li>
                        Shop
                    </li>
                    <li>
                        Deliveries
                    </li>
                    <li>
                        Become a partner
                    </li>
                </ul>
            </div>
            <div className="block">
                <p>Account</p>
                <ul>
                    <li>
                        Create an account
                    </li>
                    <li>
                        Track your order
                    </li>
                </ul>
            </div>
            <div className="block">
                <p>Services</p>
                <ul>
                    <li>
                        Ask us
                    </li>
                    <li>
                        Track your order
                    </li>
                </ul>
            </div>
        </div>
    );
}