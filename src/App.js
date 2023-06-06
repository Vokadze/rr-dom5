import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useParams,
  NavLink,
} from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>React Router Dom5</h1>
      <hr />
      <BrowserRouter>
        <h1>App Layout</h1>
        <NavLink to="/users">User List Layout</NavLink>
        <Switch>
          <Route path="/users" component={UsersLayout} />
          <Route path="/" exact component={MainPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

function MainPage() {
  return <h1>Main Page</h1>
}

function UsersLayout() {
  const { path } = useRouteMatch()
  return (
    <>
      <h1>Users Layout</h1>
      <NavLink to="/">Main Page</NavLink>
      <Switch>
        <Route path={path + '/:userId/profile'} component={UserProfilePage} />
        <Route path={path + '/:userId/edit'} component={EditUserPage} />
        <Route path={path} exact component={UserListPage} />
        <Redirect from={path + '/:userId'} to={path + '/:userId/profile'} />
      </Switch>
    </>
  )
}

function UserProfilePage() {
  const { userId } = useParams()
  return (
    //<div>
    //  <h1>UserPage</h1>
    //  <p>userId: {userId}</p>
    //</div>

    <div>
      <h1>UserPage</h1>
      <li>
        <NavLink to="/users">User List Page</NavLink>
      </li>
      <li>
        <NavLink to={`/users/${userId}/edit`}>Edit this user</NavLink>
      </li>
      <p>userId: {userId}</p>
    </div>
  )
}

function EditUserPage() {
  const { userId } = useParams()
  //  return <h1>Edit User Page</h1>
  return (
    <div>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <NavLink to={'/users/' + userId}>User profile Page</NavLink>
        </li>
        <li>
          <NavLink to={'/users/' + (+userId + 1)}>Another User</NavLink>
        </li>
        <li>
          <NavLink to={'/users/'}>User List Page</NavLink>
        </li>
      </ul>
    </div>
  )
}

function UserListPage() {
  const users = [
    { id: 1, title: 'user 1' },
    { id: 2, title: 'user 2' },
    { id: 3, title: 'user 3' },
    { id: 4, title: 'user 4' },
    { id: 5, title: 'user 5' },
  ]

  const { path } = useRouteMatch()

  return (
    <>
      <h1>User List Page</h1>
      {users.map((user) => (
        <p key={user.id}>
          {user.title}
          <NavLink to={`${path}/${user.id}`}>Пользователь</NavLink>
        </p>
      ))}
    </>
  )
}

export default App
