import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import utilStyles from '@/assets/styles/utils.module.css'
import Link from 'next/link'

// params中的属性对应文件夹[id]
type pathProps = [{ params: { id: string } }]
// generateStaticParams函数可以与动态路由段结合使用，以便在构建时静态生成路由，而不是在请求时按需生成路由。
// 若是无generateStaticParams函数不影响动态路由使用
// 静态生成的params参数数组，用于构建动态路由
export async function generateStaticParams() {
  const paths = (await getAllPostIds()) as pathProps
  console.log('paths', paths)
  return paths
}

type pageParams = {
  params: {
    // 此处id对应动态路由文件夹 [id], 若是[slug]文件夹应该是 slug:string
    id: string
  }
  // 此处的searchParams对应浏览器的query参数，即?username=xzq&age=18这种
  searchParams: {}
}
// 页面(默认导出)，根据对应的动态路由渲染页面
export default async function Page({ params, searchParams }: pageParams) {
  console.log(2)
  const postData: any = await getPostData(params.id)
  return (
    <>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData?.id}</h1>
        <div className={utilStyles.lightText}>{postData?.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData?.contentHtml }} />
      </article>
      <Link style={{ position: 'absolute', marginTop: 100 }} href={`/blogs`}>
        back blogs
      </Link>
    </>
  )
}
