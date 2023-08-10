import { AppThunk } from '../store';
import { setUserData } from './userSlice';
import { WalletEnum } from '../../types';
import AnchorLink from 'anchor-link';
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport';
import * as waxjs from '@waxio/waxjs/dist';

export const loginThunk =
  (type: WalletEnum, selectedChain: any): AppThunk =>
  async (dispatch, getState) => {
    try {
      const userData = getState().user.userData;
      const transport = new AnchorLinkBrowserTransport();

      const newUserData = {
        loginType: userData.loginType,
        accountName: userData.accountName,
        anchorSession: userData.anchorSession,
        waxSession: userData.waxSession,
        selectedNodeURL: userData.selectedNodeURL,
      };
      newUserData.loginType = type;
      newUserData.selectedNodeURL = selectedChain.nodeUrl;

      //   dispatch(setLoading(true))
      if (type === 'wax') {
        newUserData.waxSession = new waxjs.WaxJS({
          rpcEndpoint: selectedChain.nodeUrl,
        });
        newUserData.waxSession.login('industrialcraft').then((data: any) => {
          dispatch(setUserData({ ...newUserData, accountName: data }));
          //   dispatch(setLoading(false))
        });
      } else {
        const anchorLink = new AnchorLink({
          transport,
          chains: [
            {
              chainId: selectedChain.chainId,
              nodeUrl: selectedChain.nodeUrl,
            },
          ],
        });
        anchorLink
          .login('industrialcraft')
          .then((identity) => {
            const { session } = identity;
            newUserData.anchorSession = session;
            const accountName = session.auth.toString().split('@')[0];
            newUserData.accountName = accountName;
            dispatch(setUserData(newUserData));
            //   dispatch(setLoading(false))
          })
          .catch((error: any) => {
            console.log(error);
            //   dispatch(setLoading(false))
          });
      }
    } catch (error) {
      console.log('Unable to login. Please reload the page');
    }
  };
