import { useEffect } from "react";

export default function DynamicImport() {
  useEffect(() => {
    import("@mui/base").then(console.info).catch(console.error);
    import("antd").then(console.info).catch(console.error);
    import("d3").then(console.info).catch(console.error);
    import("jquery").then(console.info).catch(console.error);
    import("lodash").then(console.info).catch(console.error);
    import("moment").then(console.info).catch(console.error);
    import("moment-timezone").then(console.info).catch(console.error);
    import("react").then(console.info).catch(console.error);
    import("react-bootstrap").then(console.info).catch(console.error);
    import("three").then(console.info).catch(console.error);
    import("three").then(console.info).catch(console.error);
    import("three").then(console.info).catch(console.error);
    import("underscore").then(console.info).catch(console.error);
  }, []);

  return <div>Dependencies</div>;
}
