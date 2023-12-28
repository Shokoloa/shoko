import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';

export const Morse = () => {
    document.getElementById('canvas').style.display = 'none';

    useEffect(() => {
        const handleMorseConversion = () => {
            const textInput = document.getElementById('text-input');
            const morseInput = document.getElementById('morse-input');

            textInput.addEventListener('input', () => {
                const inputText = textInput.value.toUpperCase();

                const morseMap = {
                    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
                    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
                    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
                    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
                    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
                    'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
                    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
                    '9': '----.', ' ': '/'
                };

                let morseCode = '';

                for (let i = 0; i < inputText.length; i++) {
                    const char = inputText[i];

                    if (morseMap[char]) {
                        morseCode += morseMap[char] + ' ';
                    } else { }
                }

                morseInput.value = morseCode;
            });

            const morseToTextMap = {
                '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
                '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
                '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
                '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
                '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
                '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
                '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
                '----.': '9', '/': ' ', '': ''
            };

            morseInput.addEventListener('input', () => {
                const inputMorse = morseInput.value;
                const morseArray = inputMorse.split(' ');
                let translatedText = '';

                for (let i = 0; i < morseArray.length; i++) {
                    const morseChar = morseArray[i];

                    if (morseToTextMap[morseChar]) {
                        translatedText += morseToTextMap[morseChar];
                    } else { }
                }

                textInput.value = translatedText.toLowerCase();
            });

            const copymorse = document.querySelector('.copy-morse');

            copymorse.addEventListener("click", function () {
                morseInput.select();
                document.execCommand("copy");
                window.getSelection().removeAllRanges();
            });

            const copytext = document.querySelector('.copy-text');

            copytext.addEventListener("click", function () {
                textInput.select();
                document.execCommand("copy");
                window.getSelection().removeAllRanges();
            });
        };

        handleMorseConversion();
    }, []);

    const SVGCode = `<svg xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 6.35 6.35" y="0" x="0" height="20" width="20" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" class="clipboard">
                        <g>
                            <path fill="currentColor" d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"></path>
                        </g>
                    </svg>
                    <svg xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="18" width="18" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" class="checkmark">
                        <g>
                            <path data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                        </g>
                    </svg>`

    return (
        <section>
            <Helmet>
                <title>Shoko | Morse</title>
                <meta name="og:site_name" content="Morse" />
            </Helmet>
            <header className="returnhome">
                <a id="returnhome" draggable={false} href="/">
                    <i className="uil uil-estate"></i>
                </a>
            </header>

            <main className="slug">
                <h1>Morse</h1>
                <p>Morse Converter</p>
                <div className="separator"></div>
                <article className="slug-desc">
                    <h1>Text to Morse</h1>
                    <div className="auto-expand">
                        <textarea className="textare-auto" id="text-input" placeholder="Place text here"></textarea>
                        <button className="copy copy-text">
                            <span data-text-end="Copied!" data-text-initial="Copy to clipboard" className="tooltip"></span>
                            <span dangerouslySetInnerHTML={{ __html: SVGCode }}></span>
                        </button>
                    </div>
                    <div className="separator"></div>

                    <h1>Morse to Text</h1>
                    <div className="auto-expand">
                        <textarea className="textare-auto" id="morse-input" placeholder="Place morse here"></textarea>
                        <button className="copy copy-morse">
                            <span data-text-end="Copied!" data-text-initial="Copy to clipboard" className="tooltip"></span>
                            <span dangerouslySetInnerHTML={{ __html: SVGCode }}></span>
                        </button>
                    </div>
                </article>
            </main>
        </section>
    );
};