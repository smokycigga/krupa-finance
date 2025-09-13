import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'

export default function LogoCloud() {
    const lenderLogos = [
        { src: '/lenders/sbi-logo.jpg', alt: 'State Bank of India', height: 56 },
        { src: '/lenders/union-bank-of-india-home-loan-service-500x500.jpeg', alt: 'Union Bank of India', height: 56 },
        { src: '/lenders/Logo.webp', alt: 'Partner Bank', height: 56 },
        { src: '/lenders/lt-logo.webp', alt: 'LT Finance', height: 56 },
        { src: '/lenders/oxyzo-logo-new-01.webp', alt: 'Oxyzo', height: 56 },
        { src: '/lenders/image.png', alt: 'Banking Partner', height: 56 },
        { src: '/lenders/image copy.png', alt: 'NBFC Partner', height: 56 },
        { src: '/lenders/image copy 7.png', alt: 'Finance Company', height: 56 },
        { src: '/lenders/image copy 8.png', alt: 'Lending Institution', height: 56 }
    ]

    return (
        <section className="w-full py-12 sm:py-16 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-dm-sans font-semibold text-global-7 mb-3 sm:mb-4">
                    We offer you the best
                </h2>
                <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-dm-sans text-global-11 mb-2">
                    We only collaborate with the 
                    <span className="text-global-3"> top banks & NBFCs providers</span>
                </p>
                <div className="mb-8 sm:mb-12"></div>
                
                {/* Infinite Scrolling Partner Logos */}
                <div className="relative overflow-hidden">
                    <InfiniteSlider
                        speedOnHover={20}
                        speed={40}
                        gap={32}>
                        {lenderLogos.map((logo, index) => (
                            <div key={index} className="flex justify-center items-center bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] h-[70px] sm:h-[85px] md:h-[100px] shadow-sm">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-w-[80px] sm:max-w-[110px] md:max-w-[140px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] w-auto h-auto object-contain"
                                />
                            </div>
                        ))}
                    </InfiniteSlider>

                    <ProgressiveBlur
                        className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 md:w-20"
                        direction="left"
                        blurIntensity={1}
                    />
                    <ProgressiveBlur
                        className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 md:w-20"
                        direction="right"
                        blurIntensity={1}
                    />
                </div>
            </div>
        </section>
    )
}