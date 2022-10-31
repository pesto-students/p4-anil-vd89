
## Week 10 - Assignment [Total Time ~ 8 hrs]

* In this Assignment you would be create your own working url shortener
* The web application should have different pages like Home, Contact us.
* Home page will have a textbox to enter the url to be shortened.
* There should be a Shorten button which will create a short url for the long url.
* Once the url is shortened, it will be added to a list of shortened urls
* Use the below doc for APIs for creating short urls
* API Doc :https://shrtco.de/docs/
* Below is the example of how a application should look like


### Example of API:
```
GET/POST:
https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html

GET/POST:
https://api.shrtco.de/v2/info?code=example
```

### Video 



https://user-images.githubusercontent.com/34570078/198322718-feda5e1f-64f0-4d33-8462-71a1f563c94f.mp4



### Benchmarks:
1. There should be a separate branch created in GitHub for this exercise.
2. The Project should include a ReadMe File which will lists down all the commands clearly for running application on local
3. Application should adhere to component architecture and should have meaningful component hierarchy
4. Application should handle all the validations.
5. There should be one or more Git commits with meaningful commit messages.
6. Use Loading Spinners/notifications for feedback
7. Handle all the failure messages
