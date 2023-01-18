import { useEffect, useState } from "react";

export default function DynamicImport() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      import("@mui/base"),
      import("antd"),
      import("d3"),
      import("jquery"),
      import("lodash"),
      import("moment"),
      import("moment-timezone"),
      import("react"),
      import("react-bootstrap"),
      import("three"),
      import("three"),
      import("three"),
      import("underscore"),
    ])
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  return (
    <ul>
      <li>{isLoading ? "Chargement..." : "Chargé!"}</li>
    </ul>
  );
}
