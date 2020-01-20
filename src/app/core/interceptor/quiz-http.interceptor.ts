import { Injectable} from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class QuizHttpInterceptor implements HttpInterceptor{
    private readonly apiBaseUrl = environment.apiBaseUrl;
    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        if(!req.headers.has('Content-Type')){
            req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
        }
        req = req.clone({url: this.apiBaseUrl + req.url});
        return next.handle(req).pipe(
            map((event:HttpEvent<any>)=>{
                if(event instanceof HttpResponse){
                    console.log('event', event);
                }
                return event;
            })
        )
    }

}