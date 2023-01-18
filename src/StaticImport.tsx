import * as MUI from "@mui/base";
import * as Ant from "antd";
import * as d3 from "d3";
import * as jquery from "jquery";
import * as lodash from "lodash";
import moment from "moment";
import momentTimezone from "moment-timezone";
import { useEffect } from "react";
import * as Bootstrap from "react-bootstrap";
import * as FIVE from "three";
import * as FOUR from "three";
import * as THREE from "three";
import * as underscore from "underscore";

export default function StaticImport() {
  useEffect(() => {
    console.info(d3);
    console.info(underscore);
    console.info(lodash);
    console.info(jquery);
    console.info(moment);
    console.info(momentTimezone);
    console.info(THREE);
    console.info(FOUR);
    console.info(FIVE);
    console.info(MUI);
    console.info(Ant);
    console.info(Bootstrap);
  }, []);

  return <div>Dependencies</div>;
}
