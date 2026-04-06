"use client";
import Image from 'next/image';
import React from 'react';
import { useLang } from '@/context/LanguageContext';

export default function ValueAndStrengths() {
    const { t } = useLang();

    return (
        <div className="w-full font-sans">

            {/* =========================================
                Section 1: How We Create Value (Dark Overlay)
            ========================================= */}
            <section className="relative w-full py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        alt="Office Background"
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <span className="text-[#C5A028] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                            {t("value.overline")}
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            {t("value.title")}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                        {/* Step 1 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#745B00] hover:bg-[#C5A028] transition-colors duration-300 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                                01
                            </div>
                            <h3 className="text-[#C5A028] text-xl font-bold mb-3">{t("value.step1_title")}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{t("value.step1_desc")}</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#745B00] hover:bg-[#C5A028] transition-colors duration-300 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                                02
                            </div>
                            <h3 className="text-[#C5A028] text-xl font-bold mb-3">{t("value.step2_title")}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{t("value.step2_desc")}</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#745B00] hover:bg-[#C5A028] transition-colors duration-300 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                                03
                            </div>
                            <h3 className="text-[#C5A028] text-xl font-bold mb-3">{t("value.step3_title")}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{t("value.step3_desc")}</p>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#745B00] hover:bg-[#C5A028] transition-colors duration-300 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                                04
                            </div>
                            <h3 className="text-[#C5A028] text-xl font-bold mb-3">{t("value.step4_title")}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{t("value.step4_desc")}</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================
                Section 2: Why Choose Us — updated cards
            ========================================= */}
            <section className="bg-[#fbfaf8] py-20 lg:py-28 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 gap-6">
                        <div>
                            <span className="text-[#C5A028] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                                {t("strengths.overline")}
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                                {t("strengths.title")}
                            </h2>
                        </div>
                        <a href="#" className="flex items-center text-gray-900 font-bold hover:text-[#C5A028] transition-colors group">
                            {t("strengths.learn_more")}
                            <svg className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 transform rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Cards — icon উপরে, hover এ icon color + card bg change */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                        {/* Card 1 */}
                        <div className="group bg-[#f5f3ee] hover:bg-[#ede9df] p-8 rounded-xl transition-colors duration-300 flex flex-col h-full">
                            <div className="text-[#745B00] group-hover:text-[#C5A028] transition-colors duration-300 mb-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <path d="M22.75 3.25H3.25V16.25H22.75V3.25Z" fill="currentColor" />
                                    <path d="M22.75 22.75H3.25V48.75H22.75V22.75Z" fill="currentColor" />
                                    <path d="M29.25 3.25H48.75V29.25H29.25V3.25Z" fill="currentColor" />
                                    <path d="M48.75 35.75H29.25V48.75H48.75V35.75Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-4">{t("strengths.card1_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-8">
                                {t("strengths.card1_desc")}
                            </p>
                            <span className="text-[#A67C00] text-[10px] font-bold tracking-[0.15em] uppercase">
                                {t("strengths.card_tag")}
                            </span>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-[#f5f3ee] hover:bg-[#ede9df] p-8 rounded-xl transition-colors duration-300 flex flex-col h-full">
                            <div className="text-[#745B00] group-hover:text-[#C5A028] transition-colors duration-300 mb-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <path d="M26 6.50005L27.0599 4.61039C26.4017 4.24104 25.5983 4.24104 24.9401 4.61039L26 6.50005ZM29.0281 8.19871L27.9682 10.0884C28.2841 10.2655 28.6392 10.3607 29.0013 10.3652L29.0281 8.19871ZM32.5 8.24172L34.3629 7.13523C33.9772 6.48616 33.2817 6.08457 32.5269 6.07521L32.5 8.24172ZM34.2732 11.2269L32.4103 12.3334C32.5953 12.6447 32.8553 12.9048 33.1667 13.0897L34.2732 11.2269ZM37.2584 13L39.4249 12.9732C39.4156 12.2183 39.0139 11.5227 38.3647 11.1372L37.2584 13ZM37.3013 16.4719L35.1349 16.4987C35.1392 16.8608 35.2346 17.216 35.4116 17.5319L37.3013 16.4719ZM39 19.5L40.8898 20.5601C41.259 19.9016 41.259 19.0985 40.8898 18.44L39 19.5ZM37.3013 22.5282L35.4116 21.4682C35.2346 21.7841 35.1392 22.1393 35.1349 22.5013L37.3013 22.5282ZM37.2584 26L38.3647 27.8629C39.0139 27.4773 39.4156 26.7818 39.4249 26.0269L37.2584 26ZM34.2732 27.7732L33.1667 25.9103C32.8553 26.0954 32.5953 26.3554 32.4103 26.6667L34.2732 27.7732ZM32.5 30.7585L32.5269 32.9249C33.2817 32.9156 33.9772 32.5139 34.3629 31.8648L32.5 30.7585ZM29.0281 30.8014L29.0013 28.6349C28.6392 28.6393 28.2841 28.7346 27.9682 28.9116L29.0281 30.8014ZM26 32.5L24.9401 34.3898C25.5983 34.759 26.4017 34.759 27.0599 34.3898L26 32.5ZM22.9719 30.8014L24.0318 28.9116C23.7159 28.7346 23.3608 28.6393 22.9987 28.6349L22.9719 30.8014ZM19.5 30.7585L17.6372 31.8648C18.0227 32.5139 18.7183 32.9156 19.4732 32.9249L19.5 30.7585ZM17.7268 27.7732L19.5897 26.6667C19.4047 26.3554 19.1447 26.0954 18.8333 25.9103L17.7268 27.7732ZM14.7417 26L12.5752 26.0269C12.5845 26.7818 12.9861 27.4773 13.6352 27.8629L14.7417 26ZM14.6987 22.5282L16.8652 22.5013C16.8607 22.1393 16.7655 21.7841 16.5883 21.4682L14.6987 22.5282ZM13 19.5L11.1103 18.44C10.741 19.0985 10.741 19.9016 11.1103 20.5601L13 19.5ZM14.6987 16.4719L16.5883 17.5319C16.7655 17.216 16.8607 16.8608 16.8652 16.4987L14.6987 16.4719ZM14.7417 13L13.6352 11.1372C12.9861 11.5227 12.5845 12.2183 12.5752 12.9732L14.7417 13ZM17.7268 11.2269L18.8333 13.0897C19.1447 12.9048 19.4047 12.6448 19.5897 12.3334L17.7268 11.2269ZM19.5 8.24172L19.4732 6.07521C18.7183 6.08457 18.0227 6.48616 17.6372 7.13523L19.5 8.24172ZM22.9719 8.19871L22.9987 10.3652C23.3608 10.3607 23.7159 10.2655 24.0318 10.0884L22.9719 8.19871ZM8.66667 41.1667L6.72874 40.1978C6.39293 40.8694 6.42881 41.667 6.8236 42.3059C7.21838 42.9447 7.91575 43.3334 8.66667 43.3334V41.1667ZM14.0833 41.1667L15.8167 39.8667C15.4075 39.3211 14.7653 39 14.0833 39V41.1667ZM17.3333 45.5L15.6 46.8C16.0506 47.4009 16.78 47.7254 17.5279 47.658C18.2758 47.5907 18.9354 47.1406 19.2713 46.469L17.3333 45.5ZM43.3333 41.1667V43.3334C44.0843 43.3334 44.7815 42.9447 45.1765 42.3059C45.5713 41.667 45.607 40.8694 45.2712 40.1978L43.3333 41.1667ZM37.9167 41.1667V39C37.2346 39 36.5926 39.3211 36.1833 39.8667L37.9167 41.1667ZM34.6667 45.5L32.7288 46.469C33.0646 47.1406 33.7242 47.5907 34.4721 47.658C35.22 47.7254 35.9496 47.4009 36.4 46.8L34.6667 45.5ZM42.0212 33.6978C41.486 32.6274 40.1847 32.1937 39.1144 32.7288C38.0441 33.264 37.6103 34.5655 38.1455 35.6356L42.0212 33.6978ZM33.3545 38.0311C32.8194 36.9608 31.5181 36.527 30.4477 37.0622C29.3774 37.5973 28.9436 38.8989 29.4788 39.969L33.3545 38.0311ZM22.5212 39.969C23.0564 38.8989 22.6226 37.5973 21.5523 37.0622C20.482 36.527 19.1805 36.9608 18.6454 38.0311L22.5212 39.969ZM13.8546 35.6356C14.3897 34.5655 13.9559 33.264 12.8856 32.7288C11.8154 32.1937 10.5139 32.6274 9.97874 33.6978L13.8546 35.6356ZM24.9401 8.3897L27.9682 10.0884L30.0883 6.30905L27.0599 4.61039L24.9401 8.3897ZM29.0013 10.3652L32.4731 10.4082L32.5269 6.07521L29.055 6.03222L29.0013 10.3652ZM30.6371 9.34822L32.4103 12.3334L36.1359 10.1204L34.3629 7.13523L30.6371 9.34822ZM33.1667 13.0897L36.1519 14.8629L38.3647 11.1372L35.3797 9.36408L33.1667 13.0897ZM35.0918 13.0269L35.1349 16.4987L39.4678 16.445L39.4249 12.9732L35.0918 13.0269ZM35.4116 17.5319L37.1102 20.5601L40.8898 18.44L39.1911 15.4118L35.4116 17.5319ZM37.1102 18.44L35.4116 21.4682L39.1911 23.5883L40.8898 20.5601L37.1102 18.44ZM35.1349 22.5013L35.0918 25.9732L39.4249 26.0269L39.4678 22.555L35.1349 22.5013ZM32.4103 26.6667L30.6371 29.652L34.3629 31.8648L36.1359 28.8798L32.4103 26.6667ZM32.4731 28.5918L29.0013 28.6349L29.055 32.9678L32.5269 32.9249L32.4731 28.5918ZM22.9987 28.6349L19.5268 28.5918L19.4732 32.9249L22.945 32.9678L22.9987 28.6349ZM21.3628 29.652L19.5897 26.6667L15.864 28.8798L17.6372 31.8648L21.3628 29.652ZM16.9082 25.9732L16.8652 22.5013L12.5322 22.555L12.5752 26.0269L16.9082 25.9732ZM16.5883 21.4682L14.8897 18.44L11.1103 20.5601L12.809 23.5883L16.5883 21.4682ZM14.8897 20.5601L16.5883 17.5319L12.809 15.4118L11.1103 18.44L14.8897 20.5601ZM16.8652 16.4987L16.9082 13.0269L12.5752 12.9732L12.5322 16.445L16.8652 16.4987ZM15.8482 14.8629L18.8333 13.0897L16.6204 9.36408L13.6352 11.1372L15.8482 14.8629ZM19.5897 12.3334L21.3628 9.34822L17.6372 7.13523L15.864 10.1204L19.5897 12.3334ZM19.5268 10.4082L22.9987 10.3652L22.945 6.03222L19.4732 6.07521L19.5268 10.4082ZM24.0318 10.0884L27.0599 8.3897L24.9401 4.61039L21.9117 6.30905L24.0318 10.0884ZM36.1519 24.1371L33.1667 25.9103L35.3797 29.6359L38.3647 27.8629L36.1519 24.1371ZM18.8333 25.9103L15.8482 24.1371L13.6352 27.8629L16.6204 29.6359L18.8333 25.9103ZM27.9682 28.9116L24.9401 30.6103L27.0599 34.3898L30.0883 32.6911L27.9682 28.9116ZM27.0599 30.6103L24.0318 28.9116L21.9117 32.6911L24.9401 34.3898L27.0599 30.6103ZM8.66667 43.3334H14.0833V39H8.66667V43.3334ZM12.35 42.4667L15.6 46.8L19.0667 44.2L15.8167 39.8667L12.35 42.4667ZM43.3333 39H37.9167V43.3334H43.3333V39ZM36.1833 39.8667L32.9333 44.2L36.4 46.8L39.65 42.4667L36.1833 39.8667ZM38.1455 35.6356L41.3955 42.1356L45.2712 40.1978L42.0212 33.6978L38.1455 35.6356ZM29.4788 39.969L32.7288 46.469L36.6045 44.5311L33.3545 38.0311L29.4788 39.969ZM18.6454 38.0311L15.3954 44.5311L19.2713 46.469L22.5212 39.969L18.6454 38.0311ZM9.97874 33.6978L6.72874 40.1978L10.6046 42.1356L13.8546 35.6356L9.97874 33.6978ZM28.1667 19.5C28.1667 20.6967 27.1967 21.6667 26 21.6667V26C29.59 26 32.5 23.09 32.5 19.5H28.1667ZM26 21.6667C24.8034 21.6667 23.8333 20.6967 23.8333 19.5H19.5C19.5 23.09 22.4101 26 26 26V21.6667ZM23.8333 19.5C23.8333 18.3034 24.8034 17.3334 26 17.3334V13C22.4101 13 19.5 15.9102 19.5 19.5H23.8333ZM26 17.3334C27.1967 17.3334 28.1667 18.3034 28.1667 19.5H32.5C32.5 15.9102 29.59 13 26 13V17.3334Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-4">{t("strengths.card2_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-8">
                                {t("strengths.card2_desc")}
                            </p>
                            <span className="text-[#A67C00] text-[10px] font-bold tracking-[0.15em] uppercase">
                                {t("strengths.card_tag")}
                            </span>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-[#f5f3ee] hover:bg-[#ede9df] p-8 rounded-xl transition-colors duration-300 flex flex-col h-full">
                            <div className="text-[#745B00] group-hover:text-[#C5A028] transition-colors duration-300 mb-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 37.375V47.125L21.125 52H30.875L35.75 47.125V37.375L39.7787 33.3463C43.4421 29.683 45.5 24.7046 45.5 19.5239C45.5 8.75436 36.7695 0 26 0C15.2304 0 6.5 8.75436 6.5 19.5239C6.5 24.7046 8.55803 29.683 12.2213 33.3463L16.25 37.375ZM22.75 32.0904V19.5H29.25V32.0904C34.8569 30.6473 39 25.5575 39 19.5C39 12.3203 33.1796 6.5 26 6.5C18.8203 6.5 13 12.3203 13 19.5C13 25.5575 17.143 30.6473 22.75 32.0904Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-4">{t("strengths.card3_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-8">
                                {t("strengths.card3_desc")}
                            </p>
                            <span className="text-[#A67C00] text-[10px] font-bold tracking-[0.15em] uppercase">
                                {t("strengths.card_tag")}
                            </span>
                        </div>

                        {/* Card 4 */}
                        <div className="group bg-[#f5f3ee] hover:bg-[#ede9df] p-8 rounded-xl transition-colors duration-300 flex flex-col h-full">
                            <div className="text-[#745B00] group-hover:text-[#C5A028] transition-colors duration-300 mb-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <path d="M47.6666 17.3332H43.3332H47.6666ZM43.3332 17.3332H41.1666C36.8332 13.0037 30.3333 8.66608 25.9999 12.9999M43.3332 17.3332V34.6664V17.3332ZM25.9999 12.9999L19.499 19.5034C19.327 19.6754 19.241 19.7614 19.1719 19.8375C17.6691 21.4909 17.6697 24.0157 19.1733 25.6685C19.2425 25.7445 19.3287 25.8305 19.5006 26.0024C19.6725 26.1742 19.7585 26.2602 19.8346 26.3293C21.4877 27.8315 24.0118 27.8312 25.6643 26.3284C25.7404 26.2593 25.8264 26.1733 25.9982 26.0015L28.1657 23.834M25.9999 12.9999C21.6666 8.66608 15.1666 13.0039 10.8333 17.3333H8.66658M4.33325 17.3333H8.66658H4.33325ZM8.66658 17.3333V34.6664V17.3333ZM43.3332 34.6664V41.1664H47.6666M43.3332 34.6664H37.2051H43.3332ZM32.4999 28.1664L35.7499 31.4164C35.9224 31.5891 36.0088 31.6753 36.0782 31.7518C37.5805 33.4046 37.5805 35.9285 36.0782 37.5812C36.0088 37.6577 35.9224 37.744 35.7499 37.9164C35.5774 38.0889 35.491 38.1753 35.4147 38.2449C33.7618 39.7473 31.2381 39.7473 29.5851 38.2449C29.5088 38.1753 29.4224 38.0889 29.2499 37.9164L28.1666 36.8331C26.9853 38.0146 26.3945 38.6052 25.7572 38.9211C24.545 39.5217 23.1215 39.5217 21.9093 38.9211C21.272 38.6052 20.6813 38.0146 19.4999 36.8331C18.0068 38.824 14.9404 38.5476 13.8275 36.3218L12.9999 34.6664H8.66658M8.66658 34.6664V41.1664H4.33325" fill="currentColor" />
                                    <path d="M47.6666 17.3332H43.3332M43.3332 17.3332H41.1666C36.8332 13.0037 30.3333 8.66608 25.9999 12.9999M43.3332 17.3332V34.6664M25.9999 12.9999L19.499 19.5034C19.327 19.6754 19.241 19.7614 19.1719 19.8375C17.6691 21.4909 17.6697 24.0157 19.1733 25.6685C19.2425 25.7445 19.3287 25.8305 19.5006 26.0024C19.6725 26.1742 19.7585 26.2602 19.8346 26.3293C21.4877 27.8315 24.0118 27.8312 25.6643 26.3284C25.7404 26.2593 25.8264 26.1733 25.9982 26.0015L28.1657 23.834M25.9999 12.9999C21.6666 8.66608 15.1666 13.0039 10.8333 17.3333H8.66658M43.3332 34.6664V41.1664H47.6666M43.3332 34.6664H37.2051M8.66658 17.3333H4.33325M8.66658 17.3333V34.6664M8.66658 34.6664H12.9999L13.8275 36.3218C14.9404 38.5476 18.0068 38.824 19.4999 36.8331C20.6813 38.0146 21.272 38.6052 21.9093 38.9211C23.1215 39.5217 24.545 39.5217 25.7572 38.9211C26.3945 38.6052 26.9853 38.0146 28.1666 36.8331L29.2499 37.9164C29.4224 38.0889 29.5088 38.1753 29.5851 38.2449C31.2381 39.7473 33.7618 39.7473 35.4147 38.2449C35.491 38.1753 35.5774 38.0889 35.7499 37.9164C35.9224 37.744 36.0088 37.6577 36.0782 37.5812C37.5805 35.9285 37.5805 33.4046 36.0782 31.7518C36.0088 31.6753 35.9224 31.5891 35.7499 31.4164L32.4999 28.1664M8.66658 34.6664V41.1664H4.33325" stroke="currentColor" stroke-width="4.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-4">{t("strengths.card4_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-8">
                                {t("strengths.card4_desc")}
                            </p>
                            <span className="text-[#A67C00] text-[10px] font-bold tracking-[0.15em] uppercase">
                                {t("strengths.card_tag")}
                            </span>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}