import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

const Blog = ( { blog } ) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"وبلاگ"} pageDesc={blog.page.subtitle} />

      {/* Onovo Blog */}
			<div className="onovo-blog gap-top-140">
				<div className="container">
          {/* Blog items */}
					<div className="row">
            <PaginatedBlog
              items={blog.posts}
            />
          </div>

          <Pagination
            currentPage={1}
            totalItems={blog.total}
            perPage={2}
            renderPageLink={(id) => `/blog/page/${id}`}
          />
        </div>
      </div>
      
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/blog/")
  const blog = await res.json()
  return{
      props : {
          blog
      },
      revalidate : 10,
  }
}