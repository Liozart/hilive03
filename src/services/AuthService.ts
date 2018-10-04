import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isLogged = false;
  public filter_category: string[];
  public filter_maxPrice: number;
  public filter_maxDistance: number;
}
