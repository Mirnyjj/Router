import './ListItem.css'
import { NavLink, Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ListItem({ id, title }) {

    return (
        <>
            <li key={id} id={id} className='todosList'>
                <NavLink to={`/${id}`}>{title}</NavLink>
            </li>
            <Outlet />
        </>

    )
}
export default ListItem