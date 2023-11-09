import { getSortedPostsData } from '@/lib/posts'
import utilStyles from '@/assets/styles/utils.module.css'
import Link from 'next/link'
export default async function Page() {
  // 获取按日期排序好的博客大纲
  const allPostsData: any = await getSortedPostsData()
  // console.log('allPostsData', allPostsData)
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blogs</h2>
      <ul className={utilStyles.list}>
        {/* 渲染博客列表 */}
        {allPostsData.map(({ id, date, title }: { id: string; date: string; title: string }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/blogs/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>{date}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}
