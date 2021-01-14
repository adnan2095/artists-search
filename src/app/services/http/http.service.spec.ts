import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { HttpService } from './http.service';
import { HttpParams } from '@angular/common/http';

describe('HttpService', () => {
  let httpTestingController: HttpTestingController;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HttpService ]
    });

    httpService = TestBed.get(HttpService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })
  describe('#get', () => {
    let expectedResults: any[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedResults = [
        {
          "id": "76765",
          "name": "John",
          "url": "https://www.bandsintown.com/a/76765?came_from=267&app_id=asdf",
          "mbid": "19ccb0f4-f511-4c39-8f39-fb22ffef02b9",
          "options": {
            "display_listen_unit": false
          },
          "image_url": "https://photos.bandsintown.com/large/7349968.jpeg",
          "thumb_url": "https://photos.bandsintown.com/thumb/7349968.jpeg",
          "facebook_page_url": "http://www.facebook.com/1666357743639455",
          "tracker_count": 6050,
          "upcoming_event_count": 16,
          "support_url": ""
        }
      ] as any[];
    });

    //Test case 1: Get test results for 'John'
    it('should return artists', () => {
      let params = new HttpParams().set('app_id', 'something');
      httpService.get('https://rest.bandsintown.com/artists/john', params).subscribe(
        artists => expect(artists).toEqual(expectedResults, 'should return expected artists'),
        fail
      );

      const req = httpTestingController.expectOne('https://rest.bandsintown.com/artists/john?app_id=something');
      expect(req.request.method).toEqual('GET');

      req.flush(expectedResults);
    });

    //Test case 2: Get no test result for 'asdfghfgsdfn'
    it('should return empty list on no match', () => {
      let params = new HttpParams().set('app_id', 'something');
      httpService.get('https://rest.bandsintown.com/api/artists/asdfghfgsdfn', params).subscribe(
        artists => expect(artists).toEqual([], 'should return no artists'),
        fail
      );

      const req = httpTestingController.expectOne('https://rest.bandsintown.com/artists/asdfghfgsdfn?app_id=something');
      expect(req.request.method).toEqual('GET');

      req.flush([]);
    });
  });
});
