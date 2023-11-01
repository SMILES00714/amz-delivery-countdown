// import React from "react";

/** Redux */
import { searchHubsAction } from "../../../redux/actions/hub";

/** Custom Hooks */
import useDelay from "../../../hooks/useDelay";
// import useSocket from "../../../hooks/useSocket";
import { useAppDispatch } from "../../../hooks/useRedux";
import { Typography, Input } from 'antd';
import "./building.css";

export default function BuildingView() {
  // const socket = useSocket();
  const dispatch = useAppDispatch();
  const delay = useDelay();

  const actions = {
    onSearch: (event: any) => {
      //call redux to get the searches
      //onsuccess - push to next screen
      //onfailure - show prompt
      const identifier = event?.target?.value as string;
      delay(() => dispatch(searchHubsAction({ identifier })), 250);
    },
  };
  console.log(actions);

  const { Paragraph } = Typography;

  return (
    <div className="building-container flex flex-column align-center">
      <img alt="img" className="card-img" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
      <Paragraph className="text-white text-title">Enter Building Number</Paragraph>
      <Paragraph className="text-white text-content margin-top-mfive">Input the correct building number to continue</Paragraph>
      <Input className="building-number" size="large" placeholder="Building Number" />
    </div>
  );
}
