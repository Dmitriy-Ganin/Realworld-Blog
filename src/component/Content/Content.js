import { Alert, Spin } from 'antd'

import styles from '../Article/SingleArticle/SingleArticle.module.scss'

const Content = (stat) => {
  switch (stat) {
    case 'loading':
      return <Spin size="large" />
    case '404':
      return (
        <Alert
          message="По Вашему запросу ничего не найдено"
          description="Попробуйте изменить запрос"
          type="warning"
          showIcon
        />
      )
    case 'error':
      return <Alert message="Ошибка сервера" description="Попробуйте перезагрузить страницу" type="error" showIcon />
    case 'offline':
      return (
        <Alert
          className={styles.error}
          message="У вас нет интернет соединения!"
          description="Пожалуйста проверьте ваш кабель"
          type="error"
          showIcon
        />
      )
    default:
      return false
  }
}

export default Content
