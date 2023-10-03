import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'antd'

import { fetchArticles } from '../../Service/platformAPI'
import { setLimit, setPage } from '../../Reducer/slices/articles-slice'
import { setLocation, setStatus, goHome } from '../../Reducer/slices/status-slice'
import SingleArticle from '../Article/SingleArticle/SingleArticle'
import Content from '../Content/Content'

import styles from './ArticleList.module.scss'

function ArticleList() {
  const dispatch = useDispatch()
  const { articles, articlesCount, page, limit } = useSelector((state) => state.articles)
  const status = useSelector((state) => state.status.status)
  const { token } = useSelector((state) => state.user.user)

  const PG = Number(localStorage.getItem('page')) || page

  useEffect(() => {
    dispatch(goHome(false))
    dispatch(setLocation('articles-list'))
    dispatch(setStatus('loading'))
    dispatch(fetchArticles(page, limit, token))
  }, [page, limit, dispatch, token])

  const articlez = articles.map((article) => (
    <li key={article.slug}>
      <SingleArticle article={article} />
    </li>
  ))

  const error = Content(status)

  // eslint-disable-next-line no-shadow
  const onPaginationChange = (page) => {
    dispatch(setPage(page))
    const data = {
      offset: (page - 1) * 5,
      token: token || localStorage.token,
      page: Number(localStorage.getItem('page')),
    }
    localStorage.setItem('page', page)
    dispatch(setLimit(limit))
    dispatch(fetchArticles(data))
  }

  return (
    <div className={styles.main}>
      <ul className={styles.list}>{error || articlez}</ul>
      {status !== 'error' && (
        <Pagination
          className={styles.pag}
          hideOnSinglePage
          current={PG}
          pageSize={limit}
          pageSizeOptions={[5, 10, 20, 40, 100, 500]}
          total={articlesCount}
          onChange={(PG, pageSize) => onPaginationChange(PG, pageSize)}
        />
      )}
    </div>
  )
}

export default ArticleList
