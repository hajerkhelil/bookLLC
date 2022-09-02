
import React from 'react'

function Search({ setSearch }) {
  return (
    <div><form>
    <label>
     search:
      <input type="text" name="search" />
    </label>
    <input type="submit" value="search" onChange={(e)=>setSearch(e.target.value)} />
  </form></div>
  )
}

export default Search