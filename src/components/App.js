import React, {useState} from "react";
import Nav from "./Nav";
import Filter from "./Filter"
import Hogs from "./Hogs"; 

import hogs from "../porkers_data";

function App() {
	const [hogList, setHogList] = useState(hogs.map(hog => {
        return {...hog, toggle: false} 
        }
    ))
	const [filterTerm, setFilterTerm] = useState('')
	const [sortTerm, setSortTerm] = useState('')

	function handleFilter(filterCriteria) {
		setFilterTerm(filterCriteria)
	}

	function handleSort(sortCriteria) {
		setSortTerm(sortCriteria)
	}

	function handleToggle(target) {
		const newHogList = hogList.map(hog => {
            if (hog.name === target) {
                if (hog.toggle === true) {
                    return {...hog, toggle: false}
                } else {
                    return {...hog, toggle: true}
                }
            } else {
                return {...hog}
            }
        })
        setHogList(newHogList)
	}

	const hogsDisplay = hogList
	.filter(hog => {
		if (filterTerm === 'greasy') {
			return (hog.greased)
		} else if(filterTerm === 'clean') {
			return (!hog.greased)
		} else {
			return true; 
		}
	}) 
	.sort((hog1, hog2) => {
		if(hog1[sortTerm] < hog2[sortTerm]) {
			return -1
		} else {
			return 1
		}
	})




	return (
		<div className="App">
			<Nav />
			<Filter onFilter={handleFilter} onSort={handleSort} /> 
			<Hogs hogsData={hogsDisplay} onUpdate={handleToggle}/>
		</div>
	);
}

export default App;
