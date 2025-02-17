import { useMediaQuery } from "@mui/material";
import DSignin from "./Desktop/DSignin";
import MSignin from "./Mobile/mSignin";

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
};

const ResponsiveComponent = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMobile = isSmallScreen || isMobileDevice(); // Kiểm tra cả hai yếu tố

  return (
    <div>
      {isMobile ? (
        <MSignin></MSignin>
      ) : (
        <DSignin></DSignin>
      )}
    </div>
  );
};

export default ResponsiveComponent;
