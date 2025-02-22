import AddPost from '@/components/AddPost';
import Feed from '@/components/Feed';
import LeftMenu from '@/components/LeftMenu';
import RightMenu from '@/components/RightMenu';
import Stories from '@/components/Stories';

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden w-[20%] xl:block">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden w-[30%] lg:block">
        <RightMenu />
      </div>
    </div>
  );
};

export default Homepage;
