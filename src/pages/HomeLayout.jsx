import { Outlet, useNavigation, useOutletContext } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <>
      <section>
        {isLoading ? <h3>Loading...</h3> : <Outlet context={isLoading} />}
      </section>
    </>
  );
};

export default HomeLayout;
