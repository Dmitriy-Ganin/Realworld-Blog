import { Routes, Route } from 'react-router-dom'

import Layout from '../../component/Layout/Layout'
import ArticleList from '../../component/ArticleList/ArticleList'
import ArticleForm from '../../component/Article/ArticleForm/ArticleForm'
import SignUp from '../User/SignUp/SignUp'
import SignIn from '../User/SignIn/SignIn'
import Profile from '../User/Profile/Profile'
import CreateArticle from '../../component/Article/CreateArticle/CreateArticle'
import {
  slash,
  articleList,
  articlePage,
  articleSlug,
  articleSlugEdit,
  newArticle,
  signIn,
  signUp,
  profile,
} from '../Route/Route'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={slash} element={<Layout />}>
          <Route index element={<ArticleList />} />
          <Route path={articleList} element={<ArticleList />} />
          <Route path={articlePage} element={<ArticleList />} />
          <Route path={articleSlug} element={<ArticleForm />} />
          <Route path={articleSlugEdit} element={<CreateArticle />} />
          <Route path={newArticle} element={<CreateArticle />} />
          <Route path={signIn} element={<SignIn />} />
          <Route path={signUp} element={<SignUp />} />
          <Route path={profile} element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
