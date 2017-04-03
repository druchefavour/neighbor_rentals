# neighbor_rentals

# Project 2: Requirements

* **The requirements for Project #2 are as follows:**

  * Must use a Node and Express Web Server

  * Must be backed by a MySQL Database with a Sequelize ORM  

  * Must have both GET and POST routes for retrieving and adding new data

  * Must be deployed using Heroku (with Data)

  * Must utilize at least one new library, package, or technology that we haven’t discussed

  * Must have a polished frontend / UI

  * Must have folder structure that meets MVC Paradigm

  * Must meet good quality coding standards (indentation, scoping, naming)

## Project Description
Instead of people buying stuff and using them only a few times in the duration of their ownership, or renting things from Home Depot people can now just share and borrow from others while also making money. One of the intent is to help reduce the amount of things that are bought by consumers and as a result we reduce our overall carbon footprint (i.e. potentially less waste in landfills). 

Our team will build an AirBnB-like storefront with functionalities that enable users to advertised owned items for sale / rent / hire.
 
Optional: Annex a consumer complaint section in the app (this will only be implemented if we have sufficient time).

## Mission Statement
To create a digital platform where people can share and borrow items as an effort to reduce overall carbon footprint.
Branding
The impression and feel of the app should have a simplistic, current, socially-aware and user-friendly interface.

## Personas
* A recent divorcee whose husband took all the tools for after the break up. Now she is faced with a re-vamping her house where she is in need of power tools to do her remodeling and renovation but could not afford to buy the full-price of the tools.
* A college student who is scheduled to go on a mission trip, but needs camping materials such as tents, back pack, sleeping mat, etc. She is now able to rent this out through an avid traveller in NeighboRentals
* A self employed person who needs to kick-start a lawn mowing biz. Could borrow basic tools for his job.
* A single mum/dad who does not have a lot of savings to buy new items - could borrow at a reasonable rate. 
* A family that has a lot of things in the garage could just get it out there for users who need them 
## Wireframe
* Simple front-end can have the following functionalities: Share & Borrow the items. 
* Websites to review: AirBnB, Craigslist, Home Depot, O’Reilly Rentals

We will use:
* MVC to arrange our directory
* Sequelize as our ORM
* Handlebars to render the frontend.
* Additional options: use google map API to site users and payment snippet in bootstrap to take payments and location of available items

## User Flow
Tabs in the web page: 
* Share - where user posts their things to share / lend
* Availability of item
* Rent duration
* Cost (flat fee + $x / day)
* Borrow - where user searches for items that they need
* Add a search bar
* Search by category
* Search by location (zip) - incorporate searched_item closest to you (Google API)
