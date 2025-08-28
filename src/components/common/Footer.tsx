'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-global-6 -mt-[4px]">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-start items-center w-full">
          <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-[192px] w-full max-w-[1536px]">
            <div className="flex flex-col lg:flex-row justify-center items-start w-full">
              <div className="flex flex-col gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-center lg:items-end w-full lg:w-[24%] mb-[18px] sm:mb-[27px] md:mb-[36px]">
                <div className="flex flex-col justify-start items-start w-auto">
                  <img 
                    src="/images/img_pillow_logo.png" 
                    alt="Krupa Finance Logo" 
                    className="w-[57px] sm:w-[86px] md:w-[114px] h-[25px] sm:h-[38px] md:h-[50px] ml-[27px] sm:ml-[41px] md:ml-[54px]"
                  />
                  <p className="text-[12px] sm:text-[14px] md:text-[16px] font-dm-sans font-medium leading-[16px] sm:leading-[19px] md:leading-[21px] text-center text-footer-1 w-auto -mt-[4px] sm:-mt-[6px] md:-mt-[8px]">
                    Financing made simple with Krupa Finance
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-end items-center w-full mr-0 sm:mr-[5px] md:mr-[10px]">
                  <div className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-center flex-1 mb-4 sm:mb-0">
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] font-dm-sans font-normal leading-[12px] sm:leading-[14px] md:leading-[16px] text-left text-footer-1 w-auto">
                      For Finance Queries:
                    </p>
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] font-dm-sans font-normal leading-[12px] sm:leading-[14px] md:leading-[16px] text-left text-global-6 w-auto">
                      finsupport@Krupacorp.com
                    </p>
                  </div>
                  <div className="w-[1px] h-[14px] sm:h-[21px] md:h-[28px] bg-footer-1 ml-0 sm:ml-[14px] md:ml-[28px] hidden sm:block"></div>
                  <div className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-center flex-1 ml-0 sm:ml-[8px] md:ml-[16px]">
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] font-dm-sans font-normal leading-[12px] sm:leading-[14px] md:leading-[16px] text-left text-footer-1 w-auto">
                      For claims Queries:
                    </p>
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] font-dm-sans font-normal leading-[12px] sm:leading-[14px] md:leading-[16px] text-left text-global-6 w-auto">
                      claims@pillowinsurance.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[2px] sm:gap-[3px] md:gap-[4px] justify-start items-start w-full px-4 sm:px-8 md:px-16 lg:px-[104px] py-[21px] sm:py-[32px] md:py-[42px] bg-global-6">
          <p className="text-[12px] sm:text-[13px] md:text-[14px] font-dm-sans font-normal leading-[14px] sm:leading-[17px] md:leading-[19px] text-left text-footer-1 w-auto mt-[3px] sm:mt-[5px] md:mt-[6px]">
            Krupa Finance © 2024-2027. All Rights Reserved..
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[90%] mt-[3px] sm:mt-[5px] md:mt-[6px]">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-dm-sans font-normal leading-[16px] sm:leading-[19px] md:leading-[22px] text-left text-footer-1 w-full lg:w-[50%] self-start lg:self-end mb-4 lg:mb-0">
              Krupa Finance Pvt. Ltd. <br />
              Door No. 8-21, Krupa House, Beside Gulcose Factory, Perecherla, Guntur, Gnt, AP 522009 IN
            </p>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-dm-sans font-normal leading-[15px] sm:leading-[18px] md:leading-[20px] text-left text-global-6 w-full lg:w-[44%]">
              Disclaimer : The information provided on this website is for general informational purpose only<br />
              and does not constitute professional advice. For detailed policy information and terms, please<br />
              refer to your individual policy document or contact our customer service team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;