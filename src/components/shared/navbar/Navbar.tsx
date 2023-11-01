// import React from "react";

/** Vendors */
import { Button, Layout, Typography } from "antd";
/** Custom Assets */
import Logo from "../../../dist/img/icons/bu-logo-512.png";

export default function Navbar() {
  const { Paragraph } = Typography;
  return (
    <Layout.Header className="justify-between flex align-center navbar-divider">
      <div className="flex align-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="145" height="44" viewBox="0 0 145 44" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M85.9272 31.4797C79.4456 36.2572 70.0508 38.8062 61.9621 38.8062C50.6203 38.8062 40.4098 34.6112 32.6851 27.6344C32.0784 27.0856 32.6221 26.338 33.3503 26.7653C41.6867 31.6157 51.9943 34.5336 62.6418 34.5336C69.8226 34.5336 77.722 33.0479 84.9854 29.9649C86.0826 29.4988 87.0002 30.6834 85.9272 31.4797Z" fill="#FF9900" />
          <path fillRule="evenodd" clipRule="evenodd" d="M88.6214 28.3967C87.796 27.3382 83.1446 27.8965 81.0568 28.1441C80.4208 28.2219 80.3238 27.6683 80.8967 27.2702C84.6012 24.663 90.6799 25.4156 91.3887 26.2895C92.0976 27.1683 91.2043 33.2615 87.723 36.1698C87.189 36.6165 86.6791 36.3786 86.9171 35.7862C87.6988 33.8345 89.4515 29.46 88.6214 28.3967Z" fill="#FF9900" />
          <path fillRule="evenodd" clipRule="evenodd" d="M80.2028 8.86399V6.32961C80.2028 5.94603 80.4942 5.68871 80.8437 5.68871H92.1903C92.5545 5.68871 92.8458 5.95083 92.8458 6.32961V8.49982C92.8409 8.86399 92.5351 9.33981 91.9913 10.0924L86.1117 18.487C88.2965 18.4337 90.6027 18.7589 92.5836 19.8756C93.0303 20.128 93.1517 20.4971 93.1857 20.8612V23.5655C93.1857 23.9345 92.7778 24.3666 92.3506 24.1433C88.8597 22.313 84.223 22.1139 80.3631 24.1627C79.9698 24.3764 79.5571 23.9491 79.5571 23.5801V21.0118C79.5571 20.5991 79.5619 19.895 79.9746 19.2687L86.7865 9.50009H80.8582C80.4942 9.50009 80.2028 9.24277 80.2028 8.86399ZM38.8124 24.6774H35.3603C35.0301 24.6531 34.768 24.4055 34.7437 24.0899V6.37334C34.7437 6.01887 35.0398 5.73723 35.4088 5.73723H38.6278C38.9628 5.75173 39.2299 6.00916 39.2542 6.3295V8.6456H39.3173C40.1572 6.40735 41.7351 5.36358 43.8617 5.36358C46.0222 5.36358 47.3721 6.40735 48.3431 8.6456C49.1782 6.40735 51.0766 5.36358 53.1109 5.36358C54.5577 5.36358 56.1405 5.96075 57.1067 7.30078C58.1991 8.79127 57.9758 10.9567 57.9758 12.8551L57.9709 24.0366C57.9709 24.391 57.6748 24.6775 57.3058 24.6775H53.8586C53.5139 24.6533 53.2371 24.3765 53.2371 24.0366V14.6466C53.2371 13.8988 53.3051 12.0344 53.14 11.3256C52.8827 10.1361 52.1108 9.80102 51.1105 9.80102C50.2754 9.80102 49.4015 10.3594 49.047 11.2528C48.6927 12.1462 48.7267 13.6415 48.7267 14.6466V24.0365C48.7267 24.3909 48.4304 24.6774 48.0615 24.6774H44.6143C44.2647 24.6531 43.9928 24.3764 43.9928 24.0365L43.988 14.6466C43.988 12.6705 44.3132 9.76232 41.8614 9.76232C39.3804 9.76232 39.4775 12.5976 39.4775 14.6466V24.0365C39.4775 24.3909 39.1813 24.6774 38.8124 24.6774ZM102.614 5.36347C107.737 5.36347 110.509 9.76221 110.509 15.3554C110.509 20.7592 107.445 25.0464 102.614 25.0464C97.5844 25.0464 94.8462 20.6476 94.8462 15.166C94.8462 9.65056 97.6185 5.36347 102.614 5.36347ZM102.644 8.98055C100.099 8.98055 99.9392 12.4472 99.9392 14.6077C99.9392 16.7732 99.9053 21.3952 102.614 21.3952C105.29 21.3952 105.416 17.6665 105.416 15.3942C105.416 13.8988 105.353 12.1121 104.901 10.6944C104.513 9.46117 103.741 8.98055 102.644 8.98055ZM117.151 24.6774H113.713C113.369 24.6531 113.092 24.3764 113.092 24.0365L113.087 6.315C113.116 5.98975 113.403 5.73723 113.752 5.73723H116.952C117.253 5.75173 117.501 5.95585 117.568 6.23246V8.94173H117.632C118.598 6.519 119.952 5.36347 122.336 5.36347C123.885 5.36347 125.395 5.92172 126.366 7.45113C127.269 8.86878 127.269 11.2528 127.269 12.9667V24.119C127.23 24.4297 126.944 24.6774 126.604 24.6774H123.142C122.827 24.6531 122.564 24.42 122.53 24.119V14.496C122.53 12.5588 122.754 9.72328 120.37 9.72328C119.53 9.72328 118.758 10.2866 118.375 11.141C117.889 12.2239 117.826 13.3017 117.826 14.4961V24.0365C117.821 24.3909 117.52 24.6774 117.151 24.6774ZM71.1576 16.2148C71.1576 17.5596 71.1917 18.6813 70.5118 19.8755C69.9633 20.8467 69.0894 21.4437 68.1231 21.4437C66.7977 21.4437 66.0208 20.434 66.0208 18.9434C66.0208 16.0011 68.6573 15.4671 71.1576 15.4671V16.2148ZM74.6387 24.6288C74.4107 24.8327 74.0805 24.8473 73.8232 24.7114C72.6773 23.7597 72.4685 23.3179 71.8423 22.41C69.9487 24.3424 68.6038 24.9202 66.1519 24.9202C63.2436 24.9202 60.986 23.1285 60.986 19.5407C60.986 16.7392 62.5008 14.8311 64.6662 13.8988C66.5404 13.0734 69.1573 12.9278 71.1577 12.6996V12.253C71.1577 11.4324 71.2208 10.4613 70.7352 9.7525C70.3177 9.11651 69.5117 8.85429 68.798 8.85429C67.4822 8.85429 66.3122 9.52909 66.0257 10.9275C65.9674 11.2382 65.7392 11.544 65.4237 11.5586L62.0784 11.1994C61.7969 11.1363 61.4812 10.908 61.5638 10.4759C62.3309 6.41706 66.0014 5.19348 69.2837 5.19348C70.9636 5.19348 73.1581 5.64019 74.4836 6.91229C76.1634 8.48052 76.0032 10.573 76.0032 12.8502V18.2296C76.0032 19.8465 76.6733 20.5552 77.3044 21.4292C77.523 21.74 77.5714 22.1139 77.2899 22.3469C76.5859 22.9343 75.3332 24.0268 74.6438 24.6385L74.639 24.6288M25.9024 16.2148C25.9024 17.5596 25.9364 18.6813 25.2565 19.8755C24.708 20.8467 23.8389 21.4437 22.8678 21.4437C21.5424 21.4437 20.7704 20.434 20.7704 18.9434C20.7704 16.0011 23.4068 15.4671 25.9024 15.4671V16.2148ZM29.3835 24.6288C29.1554 24.8327 28.8252 24.8473 28.5679 24.7114C27.4221 23.7597 27.2181 23.3179 26.587 22.41C24.6934 24.3424 23.3535 24.9202 20.8966 24.9202C17.9933 24.9202 15.7307 23.1285 15.7307 19.5407C15.7307 16.7392 17.2504 14.8311 19.4109 13.8988C21.2851 13.0734 23.902 12.9278 25.9024 12.6996V12.253C25.9024 11.4324 25.9655 10.4613 25.4848 9.7525C25.0624 9.11651 24.2565 8.85429 23.5476 8.85429C22.2318 8.85429 21.0569 9.52909 20.7704 10.9275C20.7121 11.2382 20.4839 11.544 20.1732 11.5586L16.8231 11.1994C16.5415 11.1363 16.2309 10.908 16.3085 10.4759C17.0804 6.41706 20.7462 5.19348 24.0283 5.19348C25.7081 5.19348 27.9027 5.64019 29.2282 6.91229C30.908 8.48052 30.7478 10.573 30.7478 12.8502V18.2296C30.7478 19.8465 31.4178 20.5552 32.049 21.4292C32.2724 21.74 32.3209 22.1139 32.0393 22.3469C31.3353 22.9343 30.0827 24.0268 29.3933 24.6385L29.3835 24.6288Z" fill="white" />
        </svg>
      </div>
      <div className="flex align-center">
        <Button type="text" shape="round">
          <Paragraph className="text-content text-white margin-top-zero flex align-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 10.063V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H19C17.021 4.979 13.303 6.087 11 6.613V17.387C13.303 17.913 17.021 19.021 19 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V13.937C21.4298 13.8265 21.8106 13.5762 22.0825 13.2255C22.3544 12.8749 22.502 12.4437 22.502 12C22.502 11.5563 22.3544 11.1251 22.0825 10.7745C21.8106 10.4238 21.4298 10.1735 21 10.063ZM5 7C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H6L7 22H9V7H5Z" fill="white" />
            </svg>
            &nbsp;{"Report an Issue"}
          </Paragraph>
        </Button>
        <div className="navbar-report-divider"></div>
        <Button className='common-button margin-left background-common' size="large" shape="round">
          <Paragraph className="text-content text-white margin-top-zero">{"Change Building Number"}</Paragraph>
        </Button>
        <div className="flex align-center margin-left">
          <img alt="Blue Umbrella LLC" src={Logo} />
        </div>
      </div>
    </Layout.Header>
  );
}
