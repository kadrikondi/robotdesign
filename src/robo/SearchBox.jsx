import React from 'react';

const SearchBox=({searchField ,onsearch})=>{


 return(
     <div className="pa3">
     <input 
      className="pa2 ba bg-light-green shadow-8 ma3"type="search" placeholder="search robots"
      onChange={onsearch}
     />
     <hr/>

     </div>
 )

}


export default SearchBox