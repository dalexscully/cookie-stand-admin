import CookieStandForm from "./CookieStandForm";
import CookieStandTable from "./CookieStandTable";
import useResource from "../hooks/useResource";
import Header from "./Header";
import Footer from "./Footer";

export default function CookieStandAdmin({user, resources, deleteResource}) {

  // const { resources, deleteResource } = useResource();
  // console.log(useResource())
  return (
    <>
      <Header user={user} />
      <CookieStandForm />
      <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
      <Footer stands={resources || []} deleteStand={deleteResource} />
    </>
  );
}
