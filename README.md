<h1>First App </h1>
<h3> Overview </h3>
First App list out the movies with their posters.<br/><br/> 
<h3> Concepts Used / Learnings</h3>

- Variety of views such as Text, Image, View, Fragmets
- Function components and Class components
- Stack Navigator
- Data Map and passing unique keys to child components
- Rendering dynamic movie card as per the data provided<br>
- Scroll View
- Redirection to different screen on the button press
- ES6 Shorthands for traditional function writing methods
- DOM and Virtual DOM
- Inline CSS

<h3>Errors/Warnings encountered</h3>

- Warning: Warning: Each child in a list should have a unique "key" prop
  >        To uniquely identify the element and to track the changes in each of the elements so that the complete DOM will not be updated when a single change will be made, we use the keys

* Warning: Two childrem with the same key

  > Keys should always be unique within siblings and was assigning then a string, so I changd the key value to Array Index of the data element passed on to the card via Map.

  <h3> Learnings</h3>

* Started from adding the static card components for every data item, converted this to dynamically add card component on the basis of data items passed through array
* Assigning keys to every card compenent to track any changes made on it and uniquely identify the same
* Added scrollView to scroll on the card components
* To move to a different screen, implememted the onPress event on button which was calling a function there.
