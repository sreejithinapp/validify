/*
import {Constants,ExcludeAccessToken} from 'app/core/constants';
import {HttpService} from './http.service';
import { SharedService } from "app/core/shared.service";
import { Messages } from "primeng/components/messages/messages";

export function HttpConfigFactory(RestangularProvider, sharedService){
    let serverMessages:Messages[] = [];
    RestangularProvider.setBaseUrl(Constants.api_url);

    // Handling tokens, requesting refresh token etc
    // ExcludeAccessToken must contain list of calls which doesn't need tokens

    RestangularProvider.addFullRequestInterceptor((headers,requestType,path)=>{
        if(ExcludeAccessToken.indexOf(path)<0){
          let accessToken = window.localStorage.getItem('access_token');
          if(accessToken){
            RestangularProvider.setDefaultHeaders({'Authorization':"Bearer "+accessToken});
          }
        }
    });

    // Handles server error codes
    RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
      if(response.status==0)
      {
        // this.serverMessages.push({severity:'error', summary:'Error', detail:'Server seems to be not responding. Please try again later'})
        this.sharedService.setErrorMessages({severity:'error', summary:'Error', detail:'Server seems to be not responding. Please try again later'});
      }
      else if(response.status==404){

      }
      if(response.status==500)
      {
        // this.serverMessages.push({severity:'error', summary:'Error', detail:'Server seems to be not responding. Please try again later'})
        this.sharedService.setErrorMessages({severity:'error', summary:'Error', detail:'Server seems to be not responding. Please try again later'});
      }
    })
  }
*/