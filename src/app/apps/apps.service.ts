import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/Rx';

import {Logger} from "angular2-logger/core";
import {LocalStorage} from '../libs/localstorage';
import {Config} from '../config/config';
import {Socket} from 'ng-socket-io';


@Injectable()
export class AppsService {
  public remoteUrl = "https://erbium.ch/backend/api/";
  constructor(public socket:Socket,private _http : Http, private _localstorage : LocalStorage, private _config : Config, private _logger : Logger) {
  };

  public getAllTransporters(page : string) : Observable < any > {
    let url = this.remoteUrl + "transports?page=" + page + "&created_at=desc";
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    return this._http
      .get(url, {headers: headers})
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public searchTransports(page : string, shipement : string) : Observable < any > {
    let url = this.remoteUrl + "transports?page=" + page + "&created_at=desc&shipement=" + shipement;
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    return this
      ._http
      .get(url, {headers: headers})
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public getTransporter(formData : Object) : Observable < any > {
    let url = this.remoteUrl + "transports/" + formData['id'];
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    return this._http
      .get(url, {headers: headers})
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public addTransporter(formData : Object) : Observable < any > {
    let url = this.remoteUrl + "transports";
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({headers: headers});
    formData['user_id'] = user_token.user.id;
    return this
      ._http
      .post(url, formData, options)
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public updateTransporter(formData : Object) : Observable < any > {
    let url = this.remoteUrl + "transports/" + formData['id'];
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({headers: headers});
    formData['_method'] = "PUT";
    formData['user_id'] = user_token.user.id;
    return this
      ._http
      .put(url, formData, options)
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public pickAndstart(formData : Object) : Observable < any > {
    let url = this.remoteUrl + "transports/pick-start/" + formData['id'];
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({headers: headers});
    formData['forklift_id'] = user_token.user['id'];
    return this
      ._http
      .post(url, formData, options)
      .map((res : Response) => {
        let response = res.json();
        this.socket.emit('forklift-started',{code:200, message:'transports started', from:'forklift-started', success:true});
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public getRamps() : Observable < any > {
    let url = this.remoteUrl + "rampe";
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    return this
      ._http
      .get(url, {headers: headers})
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public getForkLift() : Observable < any > {
    let url = this.remoteUrl + "forklifts";
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    return this
      ._http
      .get(url, {headers: headers})
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public updateForklist(formData) : Observable < any > {
    let url = this.remoteUrl + "forklifts/" + formData['newforklift'];
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({headers: headers});
    formData['_method'] = "PUT";
    return this
      ._http
      .put(url, formData, options)
      .map((res : Response) => {
        let response = res.json();
        this.socket.emit('prozess',response);
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public uploadForkliftImage(formData, id) : Observable < any > {
    let url = this.remoteUrl + "forklifts/images-update/" + id;
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': undefined, withCredentials: true}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    headers.delete('Content-Type');
    let options = new RequestOptions({headers: headers});
    return this
      ._http
      .post(url, formData, options)
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public uploadForkliftSignature(formData : any, id) : Observable < any > {
    let user_token = this._localstorage.getObject('user_token');    
    let url = this.remoteUrl + "forklifts/update/signature/" + id;
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': undefined, withCredentials: true}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    headers.delete('Content-Type');
    let options = new RequestOptions({headers: headers});
    return this
      ._http
      .post(url, formData, options)
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public getForkLiftId(id) : Observable < any > {
    let url = this.remoteUrl + "forklifts/" + id;
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    return this
      ._http
      .get(url, {headers: headers})
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));

  };

  public updateRampe(formData, transport_id) {
    let user_token = this._localstorage.getObject('user_token');
    let url = this.remoteUrl + "transports/rampe/" + transport_id;
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json', withCredentials: true}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    formData['_method'] = "PUT";
    let options = new RequestOptions({headers: headers});
    return this
      ._http
      .put(url, formData, options)
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public sendEmail(formData, id) : Observable < any > {
    let url = this.remoteUrl + "transports/send/report/" + id;
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': undefined, withCredentials: true}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    headers.delete('Content-Type');
    let options = new RequestOptions({headers: headers});
    return this
      ._http
      .post(url, formData, options)
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public deleteImage(formData, id) : Observable < any > {
    let url = this.remoteUrl + 'forklift/del-images/' + id + '/' + formData.id;
    let user_token = this._localstorage.getObject('user_token');    
    let token = user_token.access_token;
    let headers = new Headers(); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({headers: headers});
    return this
      ._http
      .delete(url, options)
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public deleteTransports(formData) : Observable < any > {
    let url = this.remoteUrl + "transports/" + formData['id'];
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({headers: headers});
    formData['_method'] = "DELETE";
    formData['user_id'] = user_token.user.id;
    return this
      ._http
      .delete(url,options)
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public resetTransport (formData) : Observable < any > {
    let url = this.remoteUrl + "transports/reset/" + formData['id'];
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({headers: headers});
    formData['_method'] = "PUT";
    formData['user_id'] = user_token.user.id;
    return this
      ._http
      .put(url,{id:formData['id']},options)
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };

  public statusUpdateTransport (formData) : Observable < any > {
    let url = this.remoteUrl + "transports/" + formData['id'];
    let user_token = this._localstorage.getObject('user_token');
    let token = user_token.access_token;
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({headers: headers});
    formData['_method'] = "PUT";
    formData['user_id'] = user_token.user.id;
    return this
      ._http
      .put(url,{id:formData['id'],status:formData['status']},options)
      .map((res : Response) => {
        let response = res.json();
        return response;
      })
      .catch((error : any) => Observable.throw(error.json() || {
        message: 'Server error'
      }));
  };
}
