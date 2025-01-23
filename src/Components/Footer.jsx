import React from 'react';

const Footer = () => {
    return (
        <>
            <style>
                {`
                .footer-container {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    padding: 20px 40px;
                    background: linear-gradient(90deg, #0f172a, #1C2953, #0f172a);
                    color: white;
                    text-align: center;
                    font-family: 'Poppins', sans-serif;
                    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                    z-index: 1000; 
                }

                .footer-links {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .footer-links a {
                    color: white;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }

                .footer-links a:hover {
                    color: #FFD700;
                }

                .footer-text {
                    font-size: 14px;
                    color: #93A3B5;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
                    margin: 0;
                }

                /* Responsivité */
                @media (max-width: 768px) {
                    .footer-container {
                        padding: 15px 20px;
                        gap: 15px;
                    }

                    .footer-links {
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .footer-links a {
                        font-size: 12px;
                    }

                    .footer-text {
                        font-size: 12px;
                    }
                }
                `}
            </style>

            <div className="footer-container">
                <ul className="footer-links">
                    {['Accueil', 'À propos', 'Contact', 'Mentions légales', 'Politique de confidentialité'].map((item, index) => (
                        <li key={index}>
                            <a 
                                href={`/${item.replace(/ /g, '-').toLowerCase()}`}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="footer-text">
                    © {new Date().getFullYear()} BookBook - Tous droits réservés.
                </p>
            </div>
        </>
    );
};

export default Footer;

 