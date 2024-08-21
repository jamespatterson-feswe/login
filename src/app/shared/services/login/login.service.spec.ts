import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should expect the service to be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loginUser', () => {
    it('should expect the isLoggedIn to set to true', () => {
      service['isLoggedIn'].next(false);
      service.loginUser();
      expect(service['isLoggedIn'].getValue()).toBeTruthy();
    });
  });

  describe('logoutUser', () => {
    it('should expect the isLoggedIn to set to false', () => {
      service['isLoggedIn'].next(true);
      service.logoutUser();
      expect(service['isLoggedIn'].getValue()).toBeFalsy();
    });
  });

  describe('loginUser and loginUser', () => {
    it('should expect the user to be logged in and out', () => {
      service['isLoggedIn'].next(false);
      service.loginUser();
      expect(service['isLoggedIn'].getValue()).toBeTruthy();
      service.logoutUser();
      expect(service['isLoggedIn'].getValue()).toBeFalsy();
    });
  });

  // describe('', () => {
  //   it('', () => {});
  // });
});
