# Padticular2
###### Implements Redux to original React Native app, [Padticular](https://github.com/penguyen1/Padticular) 

#### Mission Statement:
###### Experience the ease of browsing beautiful worldwide AirBnB homes with just the swipe of a finger! 

---
#### Introduction:
Discovering lavishingly stunning AirBnB homes anywhere in the world has never been so easy! Padticular2 is a Redux | React Native mobile app that provides a simplistic and interactive user interface to help you find your ideal vacation abode. 

---
#### Technologies Used:
* React Native
* Redux 
* JavaScript
* Firebase 
* AirBnB API
* NodeJS
* PG-Promise
* ***React Bootstrap (coming soon!)***
* ***React Semantic-UI (coming soon!)***
* ***NYC Open Data API (coming soon!)***
* ***Google Places API (coming soon!)***

---
#### User Story & Components (v1.0.0):

###### Intro Page
* Will be the first page the user will see when the app loads
* Page will have:
    * Background picture
    * Padticular2 title (or logo?)
    * Link for new users to **Sign Up**
    * Link for returning users to **Log In**

###### Sign Up
* When page is loaded, a form will render prompting for the new user's..
    * First & Last Name
    * Email Address
    * New Password
* **An Error popup will appear** if the user enters a pre-existing/duplicate email address or password
* Will transition to the Log In page upon verifying & adding the new user

###### Log In
* When page is loaded, a form will render prompting for the user's..
    * Email Address
    * Password
* **An Error popup will appear** if the user enters non-matching/invalid information
* Will transition to the Homepage upon verifying user information

###### Homepage
* **Nav | Tab bar**
* Greets user with "Hello, {firstname}!"
* Display list of user's most recent favorite apartments. Each list item will show:
    * Address + Unit Number _(if available)_
    * Neighborhood
    * Property type
    * Price
    * View button (tap to view) - redirect to apartment's Profile page
    * Delete __(swipe right|left?)__ - delete apartment from favorites list

###### Profile Page
* **Nav | Tab bar**
* Display additional information of apartment listing
    * Images ***(user swipes left|right to view)***
    * Price
    * Address + unit number _(if available)_ + city + state + zipcode
    * Property Type | Neighborhood
    * Sqft Size | Bedrooms | Bathrooms
    * Listing Description
    * **BOOK NOW** button - loads AirBnB webpage via listing's URL_link

###### Nav | Tab bar
* **Home** - redirect to Homepage
* **Search Home** - redirect to Search component
* **Log Out**
    * destroy user token
    * redirect to Intro Component

###### Search Page
* **Nav | Tab bar**
* Display form with search features:
    * Name of destination (text input)
    * Affordable price range (Range Slider module)
    * Number of bedrooms (Slider module 0-10)
    * Number of bathrooms (Slider module 0-10)
    * Select property type _(checkbox?)_
    * Search button
        * calls AirBnB API + converts response to JSON
        * redirect to YesOrNo Page 
            * ***with results as an array???***
            * ***one by one???***
* **An Error popup will appear** if no results matches user's search requirements

###### YesOrNo Page
* Render API response (apartment listings) - **one at a time!**
* Toggles between front & back views when user taps on the listing
* **Front View:**
    * Images (user swipes left|right)
    * Property Type | Neighborhood
    * Price
* **Back View:**
    * Address + unit number _(if available)_
    * Number of Bedrooms | Bathrooms
    * Number of Guest capacity
    * Apartment listing description
* **When User swipes...**
    * **Left** - not interested
        * Renders next apartment listing 
    * **Right** - interested
        * Adds listing to user's apartment favorites
        * Renders next listing in response
    * **Up | Down** - exit 
        * Redirect to Homepage Component

---
#### API Routes

###### AirBnB
| What does it do? | API Route | Required URL Parameters |
|:---:|:---:|:---:|
| Searches rental listings in an area | `https://api.airbnb.com/v2/search_results?client_id=[API_KEY]&[params]` | API key + optional query parameters |
| Gets rental listing info | `https://api.airbnb.com/v2/search_results?client_id=[API_KEY]&[params]` | API key + result format |
| URL link to rental listing  | `https://www.airbnb.com/rooms/[id#]` | Listing ID number |

---
###### Firebase
| What does it do? | URL Route | Query Event | Required Parameters |
|:---:|:---:|:---:|:---:|
| Create & verify new User | `https://dazzling-inferno-3629.firebaseio.com/` | userRef.createUser + users.child( uid ).set | unique email address |
| Authenticate User Login | `https://dazzling-inferno-3629.firebaseio.com/users` | userRef.authWithPassword | correct email + password |
| Get User's favorited apt listings | `https://dazzling-inferno-3629.firebaseio.com/favs` | aptRef.on( "value" ) | user uid |
| Add apt listing to User's favorites | `https://dazzling-inferno-3629.firebaseio.com/favs` | aptRef.on( "child_added" ) | user uid + apt id | 
| Delete apt listing from User's favorites | `https://dazzling-inferno-3629.firebaseio.com/favs` | aptRef.on("child_removed") | user uid + apt id |
| Add image(s) to an apt listing | `https://dazzling-inferno-3629.firebaseio.com/images` | imgRef.on( "child_added" ) | apt id | 

---
#### Bonues Features:

* ###### Nav | Tab: Invite a Friend 
    * Users can invite their friends by submitting their: (via form)
        * Full Name
        * Email Address
        * Phone Number
    * Friends will receive a text message (Twilio) to join this awesome app

#![](./images/More-Coming-Soon.png)