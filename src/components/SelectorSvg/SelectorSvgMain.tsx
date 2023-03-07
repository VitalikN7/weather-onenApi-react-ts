import React from 'react'
// types
import { SvgProps } from "../../types";

export default function SelectorSvg({ svgName }: SvgProps) {
   switch (svgName) {
      case 'sunny':
         return <svg version="1.1" id="sunny_day" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.sun{fill:orange;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <circle className="sun" cx="303.4" cy="302.1" r="136.8" />
               <g>
                  <line className="sun" x1="425.1" y1="179.8" x2="473.4" y2="131.3" />
                  <line className="sun" x1="183.8" y1="422.2" x2="135.6" y2="470.7" />
                  <line className="sun" x1="183.3" y1="180.4" x2="134.8" y2="132.1" />
                  <line className="sun" x1="425.7" y1="421.7" x2="474.1" y2="469.9" />
               </g>
               <line className="sun" x1={303} y1={131} x2={303} y2={63} />
               <line className="sun" x1={303} y1={474} x2={303} y2={542} />
               <line className="sun" x1={128} y1={302} x2={60} y2={302} />
               <line className="sun" x1={471} y1={302} x2={539} y2={302} />
            </g>
         </svg>
      case 'partly_cloudy':
         return <svg version="1.1" id="partly_cloudy_day" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.sun{fill:orange;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.cloud{fill:#F2F2F2;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <g>
                  <circle className="sun" cx="303.4" cy="302.1" r="136.8" />
                  <g>
                     <line className="sun" x1="425.1" y1="179.8" x2="473.4" y2="131.3" />
                     <line className="sun" x1="183.8" y1="422.2" x2="135.6" y2="470.7" />
                     <line className="sun" x1="183.3" y1="180.4" x2="134.8" y2="132.1" />
                     <line className="sun" x1="425.7" y1="421.7" x2="474.1" y2="469.9" />
                  </g>
                  <line className="sun" x1={303} y1={131} x2={303} y2={63} />
                  <line className="sun" x1={303} y1={474} x2={303} y2={542} />
                  <line className="sun" x1={128} y1={302} x2={60} y2={302} />
                  <line className="sun" x1={471} y1={302} x2={539} y2={302} />
               </g>
            </g>
            <g>
               <path className="cloud" d="M274,418.9c0-31.1,24.6-53.5,55.5-54.5c12.9-46.8,55.8-81.3,106.6-81.3c61.1,0,110.6,48.6,110.6,109.7
             c25.3,3,44.9,27.8,44.9,53.9c0,28.1-22.8,54.2-50.9,54.2h-263c-25.2,0-40.3-21.9-40.3-41.8C237.3,439.2,254,418.9,274,418.9z" />
               <path className="cloud" d="M39.5,184.9c0-25.5,20.3-44,45.6-44.8c10.6-38.4,45.8-66.8,87.6-66.8c50.2,0,90.9,39.9,90.9,90.2
             c20.8,2.5,36.9,22.7,36.9,44.1c0,23.1-18.7,44.4-41.9,44.4H42.5c-20.7,0-33.2-17.8-33.2-34.2C9.3,201.4,23,184.9,39.5,184.9z" />
            </g>
         </svg>
      case 'heavy_rain':
         return <svg version="1.1" id="heavy_rain" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n               .cloud{fill:#666666;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n               .raindrop{fill:#29ABE2;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}\n            " }} />
            <g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
     c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <path className="raindrop" d="M329.5,457.8c0,16.2-13.1,29.2-29.2,29.2S271,473.9,271,457.8s13.1-66.8,29.2-66.8S329.5,441.6,329.5,457.8z" />
               <path className="raindrop" d="M179.5,457.8c0,16.2-13.1,29.2-29.2,29.2S121,473.9,121,457.8s13.1-66.8,29.2-66.8S179.5,441.6,179.5,457.8z" />
               <path className="raindrop" d="M479.5,457.8c0,16.2-13.1,29.2-29.2,29.2S421,473.9,421,457.8s13.1-66.8,29.2-66.8S479.5,441.6,479.5,457.8z" />
            </g>
         </svg>
      case 'partly_cloudy_and_heavy_rain':
         return <svg version="1.1" id="heavy_rain_shower_day" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#666666;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.raindrop{fill:#29ABE2;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}\n\t.sun{fill:orange;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <g>
                  <circle className="sun" cx="165.3" cy="159.7" r="90.3" />
                  <g>
                     <line className="sun" x1="245.5" y1="79.1" x2="277.4" y2="47.1" />
                     <line className="sun" x1="86.4" y1={239} x2="54.5" y2={271} />
                     <line className="sun" x1={86} y1="79.4" x2={54} y2="47.6" />
                     <line className="sun" x1="245.9" y1="238.6" x2="277.9" y2="270.5" />
                  </g>
                  <line className="sun" x1={165} y1={47} x2={165} y2={2} />
                  <line className="sun" x1={165} y1={273} x2={165} y2={318} />
                  <line className="sun" x1={50} y1={160} x2={5} y2={160} />
                  <line className="sun" x1={276} y1={160} x2={321} y2={160} />
               </g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <path className="raindrop" d="M329.5,457.8c0,16.2-13.1,29.2-29.2,29.2S271,473.9,271,457.8s13.1-66.8,29.2-66.8S329.5,441.6,329.5,457.8z" />
               <path className="raindrop" d="M179.5,457.8c0,16.2-13.1,29.2-29.2,29.2S121,473.9,121,457.8s13.1-66.8,29.2-66.8S179.5,441.6,179.5,457.8z" />
               <path className="raindrop" d="M479.5,457.8c0,16.2-13.1,29.2-29.2,29.2S421,473.9,421,457.8s13.1-66.8,29.2-66.8S479.5,441.6,479.5,457.8z" />
            </g>
         </svg>
      case 'partly_cloudy_thunder':
         return <svg version="1.1" id="thunder_shower_day" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#666666;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.thunder{fill:#FFFF00;stroke:#FFFFFF;stroke-width:11;stroke-miterlimit:10;}\n\t.sun{fill:orange;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <polygon className="thunder" points="275.8,443.8 235.8,444.5 288.6,316.5 352.4,319 314.5,410.5 364.2,410.8 239.8,547.9" />
            </g>
            <g>
               <g>
                  <circle className="sun" cx="165.3" cy="159.7" r="90.3" />
                  <g>
                     <line className="sun" x1="245.5" y1="79.1" x2="277.4" y2="47.1" />
                     <line className="sun" x1="86.4" y1={239} x2="54.5" y2={271} />
                     <line className="sun" x1={86} y1="79.4" x2={54} y2="47.6" />
                     <line className="sun" x1="245.9" y1="238.6" x2="277.9" y2="270.5" />
                  </g>
                  <line className="sun" x1={165} y1={47} x2={165} y2={2} />
                  <line className="sun" x1={165} y1={273} x2={165} y2={318} />
                  <line className="sun" x1={50} y1={160} x2={5} y2={160} />
                  <line className="sun" x1={276} y1={160} x2={321} y2={160} />
               </g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
         </svg>
      case 'partly_cloudy_sleet':
         return <svg version="1.1" id="sleet_shower_day" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground="new 0 0 600 600" xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#E6E6E6;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.raindrop{fill:#29ABE2;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}\n\t.snowflake{fill:#F2F2F2;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}\n\t.sun{fill:orange;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <g>
                  <circle className="sun" cx="165.3" cy="159.7" r="90.3" />
                  <g>
                     <line className="sun" x1="245.5" y1="79.1" x2="277.4" y2="47.1" />
                     <line className="sun" x1="86.4" y1={239} x2="54.5" y2={271} />
                     <line className="sun" x1={86} y1="79.4" x2={54} y2="47.6" />
                     <line className="sun" x1="245.9" y1="238.6" x2="277.9" y2="270.5" />
                  </g>
                  <line className="sun" x1={165} y1={47} x2={165} y2={2} />
                  <line className="sun" x1={165} y1={273} x2={165} y2={318} />
                  <line className="sun" x1={50} y1={160} x2={5} y2={160} />
                  <line className="sun" x1={276} y1={160} x2={321} y2={160} />
               </g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <path className="raindrop" d="M264,457.8c0,16.2-13.1,29.2-29.2,29.2 c-16.1,0-29.3-13.1-29.3-29.2c0-16.1,13.1-66.8,29.2-66.8C250.8,391,264,441.6,264,457.8z" />
               <path className="snowflake" d="M383.1,409.3l-23.8,27.9l0.2,0.7l35-7V453.1l-35.2-6.199l-0.2,0.699l24,27.101L363.5,486.1L351,452l-0.4,0.2L337.8,486.1L318.9,474.7l23.5-27.5v-0.4l-34.5,6.4V431l34.1,6.8 l0.2-0.399l-23.3-27.7l19.6-11.2l12.3,33.7h0.4l12.5-33.7L383.1,409.3z" />
            </g>
         </svg>
      case 'thunder':
         return <svg version="1.1" id="thunder" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#666666;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.thunder{fill:#FFFF00;stroke:#FFFFFF;stroke-width:11;stroke-miterlimit:10;}\n" }} />
            <g>
               <polygon className="thunder" points="275.8,443.8 235.8,444.5 288.6,316.5 352.4,319 314.5,410.5 364.2,410.8 239.8,547.9" />
            </g>
            <g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
         </svg>
      case 'cloudy_cloud':
         return <svg version="1.1" id="cloudy" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#F2F2F2;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
         </svg>
      case 'partly_cloudy_light_rain':
         return <svg version="1.1" id="light_rain_shower_day" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.raindrop{fill:#29ABE2;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}\n\t.sun{fill:orange;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.cloud{fill:#F2F2F2;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <g>
                  <circle className="sun" cx="165.3" cy="159.7" r="90.3" />
                  <g>
                     <line className="sun" x1="245.5" y1="79.1" x2="277.4" y2="47.1" />
                     <line className="sun" x1="86.4" y1={239} x2="54.5" y2={271} />
                     <line className="sun" x1={86} y1="79.4" x2={54} y2="47.6" />
                     <line className="sun" x1="245.9" y1="238.6" x2="277.9" y2="270.5" />
                  </g>
                  <line className="sun" x1={165} y1={47} x2={165} y2={2} />
                  <line className="sun" x1={165} y1={273} x2={165} y2={318} />
                  <line className="sun" x1={50} y1={160} x2={5} y2={160} />
                  <line className="sun" x1={276} y1={160} x2={321} y2={160} />
               </g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <path className="raindrop" d="M329.5,457.8c0,16.2-13.1,29.2-29.2,29.2S271,473.9,271,457.8s13.1-66.8,29.2-66.8S329.5,441.6,329.5,457.8z" />
            </g>
         </svg>
      case 'overcast_cloud':
         return <svg version="1.1" id="overcast" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#CCCCCC;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
         </svg>
      case 'partly_cloudy_and_heavy_snow':
         return <svg version="1.1" id="heavy_snow_shower_day" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#E6E6E6;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.sun{fill:orange;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.snowflake{fill:#F2F2F2;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}\n" }} />
            <g>
               <g>
                  <circle className="sun" cx="165.3" cy="159.7" r="90.3" />
                  <g>
                     <line className="sun" x1="245.5" y1="79.1" x2="277.4" y2="47.1" />
                     <line className="sun" x1="86.4" y1={239} x2="54.5" y2={271} />
                     <line className="sun" x1={86} y1="79.4" x2={54} y2="47.6" />
                     <line className="sun" x1="245.9" y1="238.6" x2="277.9" y2="270.5" />
                  </g>
                  <line className="sun" x1={165} y1={47} x2={165} y2={2} />
                  <line className="sun" x1={165} y1={273} x2={165} y2={318} />
                  <line className="sun" x1={50} y1={160} x2={5} y2={160} />
                  <line className="sun" x1={276} y1={160} x2={321} y2={160} />
               </g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <path className="snowflake" d="M187.6,409.3l-23.8,27.9l0.2,0.7l35-7v22.2l-35.2-6.2l-0.2,0.7l24,27.1L168,486.1L155.5,452l-0.4,0.2
                l-12.8,33.9l-18.9-11.4l23.5-27.5v-0.4l-34.5,6.4v-22.2l34.1,6.8l0.2-0.4l-23.3-27.7l19.6-11.2l12.3,33.7h0.4l12.5-33.7
                L187.6,409.3z" />
               <path className="snowflake" d="M331.9,409.3l-23.8,27.9l0.2,0.7l35-7v22.2l-35.2-6.2l-0.2,0.7l24,27.1l-19.6,11.4L299.8,452l-0.4,0.2
                l-12.8,33.9l-18.9-11.4l23.5-27.5v-0.4l-34.5,6.4v-22.2l34.1,6.8l0.2-0.4l-23.3-27.7l19.6-11.2l12.3,33.7h0.4l12.5-33.7
                L331.9,409.3z" />
               <path className="snowflake" d="M476.2,409.3l-23.8,27.9l0.2,0.7l35-7v22.2l-35.2-6.2l-0.2,0.7l24,27.1l-19.6,11.4L444.1,452l-0.4,0.2
                l-12.8,33.9L412,474.6l23.5-27.5v-0.4l-34.5,6.4v-22.2l34.1,6.8l0.2-0.4L412,409.5l19.6-11.2l12.3,33.7h0.4l12.5-33.7L476.2,409.3
                z" />
            </g>
         </svg>
      case 'heavy_snow':
         return <svg version="1.1" id="heavy_snow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#E6E6E6;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.snowflake{fill:#F2F2F2;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}\n" }} />
            <g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <g>
                  <path className="snowflake" d="M187.6,409.3l-23.8,27.9l0.2,0.7l35-7v22.2l-35.2-6.2l-0.2,0.7l24,27.1L168,486.1L155.5,452l-0.4,0.2
                l-12.8,33.9l-18.9-11.4l23.5-27.5v-0.4l-34.5,6.4v-22.2l34.1,6.8l0.2-0.4l-23.3-27.7l19.6-11.2l12.3,33.7h0.4l12.5-33.7
                L187.6,409.3z" />
                  <path className="snowflake" d="M331.9,409.3l-23.8,27.9l0.2,0.7l35-7v22.2l-35.2-6.2l-0.2,0.7l24,27.1l-19.6,11.4L299.8,452l-0.4,0.2
                l-12.8,33.9l-18.9-11.4l23.5-27.5v-0.4l-34.5,6.4v-22.2l34.1,6.8l0.2-0.4l-23.3-27.7l19.6-11.2l12.3,33.7h0.4l12.5-33.7
                L331.9,409.3z" />
                  <path className="snowflake" d="M476.2,409.3l-23.8,27.9l0.2,0.7l35-7v22.2l-35.2-6.2l-0.2,0.7l24,27.1l-19.6,11.4L444.1,452l-0.4,0.2
                l-12.8,33.9L412,474.6l23.5-27.5v-0.4l-34.5,6.4v-22.2l34.1,6.8l0.2-0.4L412,409.5l19.6-11.2l12.3,33.7h0.4l12.5-33.7L476.2,409.3
                z" />
               </g>
            </g>
         </svg>
      case 'partly_cloudy_light_snow':
         return <svg version="1.1" id="light_snow_shower_day" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#E6E6E6;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.sun{fill:orange;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.snowflake{fill:#F2F2F2;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}\n" }} />
            <g>
               <g>
                  <circle className="sun" cx="165.3" cy="159.7" r="90.3" />
                  <g>
                     <line className="sun" x1="245.5" y1="79.1" x2="277.4" y2="47.1" />
                     <line className="sun" x1="86.4" y1={239} x2="54.5" y2={271} />
                     <line className="sun" x1={86} y1="79.4" x2={54} y2="47.6" />
                     <line className="sun" x1="245.9" y1="238.6" x2="277.9" y2="270.5" />
                  </g>
                  <line className="sun" x1={165} y1={47} x2={165} y2={2} />
                  <line className="sun" x1={165} y1={273} x2={165} y2={318} />
                  <line className="sun" x1={50} y1={160} x2={5} y2={160} />
                  <line className="sun" x1={276} y1={160} x2={321} y2={160} />
               </g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <g>
                  <path className="snowflake" d="M331.9,409.3l-23.8,27.9l0.2,0.7l35-7v22.2l-35.2-6.2l-0.2,0.7l24,27.1l-19.6,11.4L299.8,452l-0.4,0.2
                l-12.8,33.9l-18.9-11.4l23.5-27.5v-0.4l-34.5,6.4v-22.2l34.1,6.8l0.2-0.4l-23.3-27.7l19.6-11.2l12.3,33.7h0.4l12.5-33.7
                L331.9,409.3z" />
               </g>
            </g>
         </svg>
      case 'drizzle_rain':
         return <svg version="1.1" id="drizzle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.drizzle{fill:#29ABE2;stroke:#000000;stroke-width:2;}\n\t.cloud{fill:#F2F2F2;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <circle className="drizzle" cx="131.5" cy="410.1" r={9} />
            <circle className="drizzle" cx={300} cy="410.1" r={9} />
            <circle className="drizzle" cx="215.5" cy="457.1" r={9} />
            <circle className="drizzle" cx="377.5" cy="457.1" r={9} />
            <circle className="drizzle" cx="466.2" cy="410.1" r={9} />
         </svg>
      case 'fog':
         return <svg version="1.1" id="fog" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.fogbar{fill:none;stroke:#B3B3B3;stroke-width:12;stroke-miterlimit:10;}\n\t.cloud{fill:#F2F2F2;stroke:#B3B3B3;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <line className="fogbar" x1={58} y1={395} x2={542} y2={395} />
               <line className="fogbar" x1={58} y1={425} x2={542} y2={425} />
               <line className="fogbar" x1={58} y1={455} x2={542} y2={455} />
            </g>
         </svg>
      case 'partly_cloudy_hail':
         return <svg version="1.1" id="hail_shower_day" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.hail{fill:#BDCCD4;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}\n\t.cloud{fill:#E6E6E6;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.sun{fill:orange;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <g>
                  <circle className="sun" cx="165.3" cy="159.7" r="90.3" />
                  <g>
                     <line className="sun" x1="245.5" y1="79.1" x2="277.4" y2="47.1" />
                     <line className="sun" x1="86.4" y1={239} x2="54.5" y2={271} />
                     <line className="sun" x1={86} y1="79.4" x2={54} y2="47.6" />
                     <line className="sun" x1="245.9" y1="238.6" x2="277.9" y2="270.5" />
                  </g>
                  <line className="sun" x1={165} y1={47} x2={165} y2={2} />
                  <line className="sun" x1={165} y1={273} x2={165} y2={318} />
                  <line className="sun" x1={50} y1={160} x2={5} y2={160} />
                  <line className="sun" x1={276} y1={160} x2={321} y2={160} />
               </g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <circle className="hail" cx="150.5" cy="433.1" r="33.7" />
               <circle className="hail" cx="303.9" cy="433.1" r="33.7" />
               <circle className="hail" cx="450.9" cy="433.1" r="33.7" />
            </g>
         </svg>
      case 'cloudy_cloud_sleet':
         return <svg version="1.1" id="sleet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#E6E6E6;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.raindrop{fill:#29ABE2;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}\n\t.snowflake{fill:#F2F2F2;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}\n" }} />
            <g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <path className="raindrop" d="M264,457.8c0,16.2-13.1,29.2-29.2,29.2 c-16.1,0-29.3-13.1-29.3-29.2c0-16.1,13.1-66.8,29.2-66.8C250.8,391,264,441.6,264,457.8z" />
               <path className="snowflake" d="M383.1,409.3l-23.8,27.9l0.2,0.7l35-7V453.1l-35.2-6.199l-0.2,0.699l24,27.101L363.5,486.1L351,452l-0.4,0.2L337.8,486.1L318.9,474.7l23.5-27.5v-0.4l-34.5,6.4V431l34.1,6.8 l0.2-0.399l-23.3-27.7l19.6-11.2l12.3,33.7h0.4l12.5-33.7L383.1,409.3z" />
            </g>
         </svg>
      case 'cloudy_cloud_light_snow':
         return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\n\t.st0{fill:#E6E6E6;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.st1{fill:#F2F2F2;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}\n\n" }} />
            <g id="outline">
               <path className="st0" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
               c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g id="raindrops">
               <g>
                  <path className="st1" d="M331.9,409.3l-23.8,27.9l0.2,0.7l35-7v22.2l-35.2-6.2l-0.2,0.7l24,27.1l-19.6,11.4L299.8,452l-0.4,0.2
                  l-12.8,33.9l-18.9-11.4l23.5-27.5v-0.4l-34.5,6.4v-22.2l34.1,6.8l0.2-0.4l-23.3-27.7l19.6-11.2l12.3,33.7h0.4l12.5-33.7
                  L331.9,409.3z" />
               </g>
            </g>
         </svg>
      case 'cloudy_cloud_light_rain':
         return <svg version="1.1" id="light_rain" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.raindrop{fill:#29ABE2;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}\n\t.cloud{fill:#F2F2F2;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n" }} />
            <g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <path className="raindrop" d="M329.5,457.8c0,16.2-13.1,29.2-29.2,29.2S271,473.9,271,457.8s13.1-66.8,29.2-66.8S329.5,441.6,329.5,457.8z" />
            </g>
         </svg>
      case 'cloudy_cloud_hail':
         return <svg version="1.1" id="hail" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="119px" height="119px" viewBox="0 0 600 600" enableBackground='new 0 0 600 600' xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.cloud{fill:#E6E6E6;stroke:#000000;stroke-width:12;stroke-miterlimit:10;}\n\t.hail{fill:#BDCCD4;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}\n" }} />
            <g>
               <path className="cloud" d="M108.4,255c0-42.4,33.6-73,75.6-74.3c17.6-63.8,76.1-110.8,145.4-110.8c83.3,0,150.9,66.3,150.9,149.6
             c34.5,4.1,61.2,37.5,61.2,73.1c0,38.4-31.1,73.5-69.5,73.5H113.4c-34.4,0-55-29.4-55-56.6C58.4,282.1,81.2,255,108.4,255z" />
            </g>
            <g>
               <circle className="hail" cx="150.5" cy="433.1" r="33.7" />
               <circle className="hail" cx="303.9" cy="433.1" r="33.7" />
               <circle className="hail" cx="450.9" cy="433.1" r="33.7" />
            </g>
         </svg>
      default:
         return null;
   }
}
