import Layouts from "@/src/layouts/Layouts";

const E404 = () => {
  return (
    <Layouts darkHeader noFooter>
      <div className="page-404">
        <div className="container page-404__container">
          <div className="page-404__num">404</div>
          <h3 className="page-404__title">صفحه مورد نظر یافت نشد</h3>
          <div className="page-404__text onovo-text">مشکلی رخ داده است</div>
        </div>
      </div>
    </Layouts>
  );
};
export default E404;
