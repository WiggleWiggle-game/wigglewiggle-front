import {
  ADAPTER_EVENTS,
  CHAIN_NAMESPACES,
  CONNECTED_EVENT_DATA,
  WEB3AUTH_NETWORK,
} from "@web3auth/base";
import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import YellowShortButton from "./YellowShortButton";
import { useEffect, useState } from "react";
import YellowLongButton from "./YellowLongButton";
import Web3, { Contract } from "web3";
import { useDispatch } from "react-redux";
import { SET_USER_LOGIN } from "@/redux/slice/authSlice";
import { SET_PROVIDER_SIGNER } from "@/redux/slice/web3Slice";
import { AlchemyProvider, ethers } from "ethers";
import ABI from ".././abis/WiggleFree.json";
import { useWeb3Auth } from "@/context/Web3AuthContext";

const W3AWallet = () => {
  const dispatch = useDispatch();

  const web3auth = useWeb3Auth();

  useEffect(() => {
    async function initialize() {
      await web3auth!.initModal();
    }
    initialize();
  }, []);

  // subscribe to lifecycle events emitted by web3auth
  const subscribeAuthEvents = (web3auth: Web3Auth) => {
    web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
      console.log("connected to wallet", data);
      // web3auth.provider will be available here after user is connected
    });
    web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
      console.log("connecting");
    });
    web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
      console.log("disconnected");
    });
    web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
      console.log("error", error);
    });
    web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
      console.log("error", error);
    });
  };
  return (
    <YellowLongButton
      text={"CONNECT WALLET"}
      onClickHandler={async () => {
        const web3authProvider = await web3auth!.connect();
        const web3 = new Web3(web3authProvider!);

        const provider = new AlchemyProvider(
          "maticmum",
          process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
        );

        const userInfo = await web3auth!.getUserInfo();
        console.log(userInfo);

        const address = (await web3!.eth.getAccounts())[0];
        console.log(address);

        const privateKey = await web3auth!.provider!.request({
          method: "private_key",
        });

        if (typeof privateKey === "string") {
          const signer = new ethers.Wallet(privateKey, provider);
        }
        dispatch(
          SET_USER_LOGIN({
            address: address,
            email: userInfo.email!,
            nickname: userInfo.name!,
            profileImage: userInfo.profileImage!,
          })
        );
      }}
      margin="99px 0 0 0"
    />
  );
};

export default W3AWallet;
