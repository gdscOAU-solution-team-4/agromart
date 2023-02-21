import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
// router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      // errorElement={<ErrorPage />}
    >
      <Route index element={<div>bala blu</div>} />
      <Route path="contacts" element={<div>gdgdg</div>} />
      {/* <Route errorElement={<ErrorPage />}>
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route path="contacts/:contactId/destroy" action={destroyAction} />
      </Route> */}
    </Route>
  )
);

export default router;
