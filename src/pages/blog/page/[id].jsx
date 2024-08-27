import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

export const PER_PAGE = 9

const Blog = ( { post , currentPage } ) => {

  return (
    <Layouts>
      <PageBanner pageTitle={"وبلاگ"} pageDesc={""} />

      {/* Onovo Blog */}
			<div className="onovo-blog gap-top-140">
				<div className="container">
          {/* Blog items */}
					<div className="row">
            <PaginatedBlog
              items={post.posts}
            />
          </div>

          <Pagination
            currentPage={currentPage}
            totalItems={post.total}
            perPage={2}
            renderPageLink={(id) => `/blog/page/${id}`}
          />
        </div>
      </div>
      
    </Layouts>
  );
};
export default Blog;

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/blog/')
  const post = await res.json()
  const paths = post.posts.map(u=>{
      return { params: { id: `${u.id}` } }
  })
  return {
      paths,
      fallback: 'blocking'
  }
}

export async function getStaticProps(context){
  const {params} = context
  const page = params?.id || 1

  const res = await fetch(`http://127.0.0.1:8000/blog/?page=${params.id}`)
  const post = await res.json()

  if (page == 1) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }

  return {
      props : {
        post : post,
        currentPage: page,
      },
      revalidate : 10
  }
}