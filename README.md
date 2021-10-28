# Create-Your-Own-CRUD
---

## Set Up Your App
* Fork and clone this repo
* Turn it into a Node app with Express, EJS, and EJS Layouts
* Use your readme notes to set everything up with a working GET / route

## HINT:
Make sure to reference the class notes for the Dinosaurs code-along! This should basically be a clone of that app, but DONT' JUST COPY OVER CODE FROM YOUR DINOSAURS APP ITSELF!! Just follow along with the notes.

## Plan your App
* What items will you store in your "database"?
* Plan out your routes (make sure your url patterns are restful!)
* Your app should have the following routes (subsititute with your item of choice, and feel free to add more routes!)
| VERB | URL pattern | Action \(CRUD\) | Description |
| :--- | :--- | :--- | :--- |
| GET | /item | Index \(Read\) | lists all items (index) |
| GET | /item/new | New \(Read\) | shows a form to make a new item |
| POST | /item | Create \(Create\) | creates an item with the POST payload\(form\) data, redirects to the index page|
| GET | /item/:id | Show \(Read\) | list information about a specific item based on its id \(i.e. /item/1\) |
| GET | /item/edit/:id | Edit \(Read\) | shows a form for editting a specific item \(i.e. /item/edit/1\) |
| PUT | /item/:id | Update \(Update\) | updates the data for a specific item \(i.e. /item/1\), redirects to the item's show page|
| DELETE | /item/:id | Destroy \(Delete\) | deletes the item with the specified id \(i.e. /item/1\), redirects to the index page|

## Stub out your routes to res.send() or console.log basic text information

All GET routes will res.send():
```javascript
app.get('/item', (req, res)=>{
  res.send('Here is a list of all the items')
}
```

All POST/PUT/DELETE routes will console.log() and redirect:
```javascript
app.post('/item', (req, res)=>{
  console.log('Posting \n', req.body)
  res.redirect('/item')
}
```

**Note that you will not be able to test the POST/PUT/DELETE route from the browser.*** If this bugs you, you're welcome to look into [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) and try using one of those tools to test these routes!

## BONUS: Add templates!

Finish the app by adding EJS templates.
