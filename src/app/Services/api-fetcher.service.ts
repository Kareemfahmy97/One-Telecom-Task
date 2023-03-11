import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { QueryParams } from '../Interfaces/iquery';

type Methods = 'delete' | 'put' | 'post' | 'get' | 'patch';

@Injectable({
  providedIn: 'root',
})
export class GenericApiFetcher {
  private apiURL: string;
  constructor(private httpClient: HttpClient) {
    this.apiURL = environment.APIURL;
  }
  private modifyFormatofQuery(queryParams: QueryParams) {
    if (!queryParams) {
      return '';
    }
    const queryParamsAsString = this.mapQueryParamsToUrl(queryParams);
    return queryParamsAsString.length === 0
      ? ''
      : `${queryParamsAsString.join('&')}`;
  }

  private mapQueryParamsToUrl(queryParams: QueryParams): Array<string> {
    return Object.keys(queryParams).map(
      (key: string) => `${key}=${queryParams[key]}`
    );
  }

  genericFetchFunc<returnType>(
    method: Methods = 'get',
    endPoint: string,
    queryParams: QueryParams = {},
    id?: number,
    data?: any
  ): Observable<returnType> {
    const modifiedQuery = this.modifyFormatofQuery(queryParams);

    return this.httpClient[method](
      `${this.apiURL}/${endPoint}${id ? '/' + id : ''}${modifiedQuery}`,
      method === 'get' || method === 'delete' ? '' : data
    ) as Observable<returnType>;
  }
}
