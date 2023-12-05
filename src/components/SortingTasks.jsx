/* eslint-disable react/prop-types */
import '../App.css'
import SortIcon from '@mui/icons-material/Sort';


function SortTasksAlphabetically({ fetchBySort }) {



    return (
        <button className="ButtonSort" onClick={() => fetchBySort()}>
            <SortIcon />
        </button>
    )
}

export default SortTasksAlphabetically